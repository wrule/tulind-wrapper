import tulind from 'tulind';
import fs from 'fs';

const patches: { [key: string]: (indic: Indicator) => void } = {
  'add': (indic) => indic.input_names = ['real1', 'real2'],
  'crossany': (indic) => indic.input_names = ['real1', 'real2'],
  'crossover': (indic) => indic.input_names = ['real1', 'real2'],
  'div': (indic) => indic.input_names = ['real1', 'real2'],
  'mul': (indic) => indic.input_names = ['real1', 'real2'],
  'sub': (indic) => indic.input_names = ['real1', 'real2'],
  'var': (indic) => indic.name_ = 'var_',
};

export
function norm(text: string) {
  return text.replace(/\s/g, '_').replace(/\%/g, '');
}

export
function typescript_code(indic: Indicator) {
  return `
export
function ${indic.name_ || indic.name}(${indic.input_names.map((name) => `${norm(name)}: number[]`).join(', ')}${
  (() => {
    if (indic.option_names.length < 1) return '';
    if (indic.option_names.length < 2) return `, ${norm(indic.option_names[0])}: number`;
    return `, options: { ${indic.option_names.map((name) => `${norm(name)}: number`).join('; ')} }`;
  })()
}, align: boolean | number = false) {
  const result = _converter('${indic.name}', [${indic.input_names.join(', ')}], [${
    indic.option_names.length == 1 ?
      norm(indic.option_names[0]) :
      indic.option_names.map((name) => `options.${norm(name)}`).join(', ')
  }], align);
  return ${
    indic.output_names.length < 2 ?
      'result[0]' :
      `{ ${indic.output_names.map((name, index) => `${norm(name)}: result[${index}]`).join(', ')} }`
  };
}

export
function ${indic.name_ || indic.name}_start(${
  (() => {
    if (indic.option_names.length < 1) return '';
    if (indic.option_names.length < 2) return `${norm(indic.option_names[0])}: number`;
    return `options: { ${indic.option_names.map((name) => `${norm(name)}: number`).join('; ')} }`;
  })()
}) {
  return tulind.indicators.${indic.name}.start([${
    indic.option_names.length == 1 ?
      norm(indic.option_names[0]) :
      indic.option_names.map((name) => `options.${norm(name)}`).join(', ')
  }]);
}
  `.trim() + '\n\n';
}

function main() {
  fs.writeFileSync('index.ts', '');
  fs.writeFileSync('index.ts', `
import tulind from 'tulind';

export
function _align(outputs: number[][], length: number) {
  outputs.forEach((output) => {
    const diff = length - output.length;
    if (diff > 0) output.unshift(...Array(diff).fill(NaN));
    if (diff < 0) output.splice(0, -diff);
  });
}

export
function _converter(name: string, inputs: number[][], options: number[], align: boolean | number = false) {
  let result: number[][] = [];
  tulind.indicators[name].indicator(inputs, options, (error: any, data: number[][]) => {
    if (error) throw error;
    result = data;
  });
  align && _align(result, align === true ? inputs[0].length : align);
  return result;
}
  `.trim() + '\n\n');
  Object.values(tulind.indicators).forEach((indic) => {
    patches[indic.name] && patches[indic.name](indic);
    fs.appendFileSync('index.ts', typescript_code(indic));
  });
}

main();

// 模板内代码，调试用
export
function _align(outputs: number[][], length: number) {
  outputs.forEach((output) => {
    const diff = length - output.length;
    if (diff > 0) output.unshift(...Array(diff).fill(NaN));
    if (diff < 0) output.splice(0, -diff);
  });
}

export
function _converter(name: string, inputs: number[][], options: number[], align: boolean | number = false) {
  let result: number[][] = [];
  tulind.indicators[name].indicator(inputs, options, (error: any, data: number[][]) => {
    if (error) throw error;
    result = data;
  });
  align && _align(result, align === true ? inputs[0].length : align);
  return result;
}
