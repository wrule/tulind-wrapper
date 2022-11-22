import tulind from 'tulind';
import fs from 'fs';

const patches: { [key: string]: (indic: indicator) => void } = {
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
function typescript_code(indic: indicator) {
  return `
export
function ${indic.name_ || indic.name}(${indic.input_names.map((name) => `${norm(name)}: number[]`).join(', ')}${
  indic.option_names.length < 1 ?
    '' :
    `, options: { ${indic.option_names.map((name) => `${norm(name)}: number`).join('; ')} }`
}) {
  const result = _converter('${indic.name}', [${indic.input_names.join(', ')}], [${
    indic.option_names.length < 1 ? '' : indic.option_names.map((name) => `options.${norm(name)}`).join(', ')
  }]);
  return ${
    indic.output_names.length < 2 ?
      'result[0]' :
      `{ ${indic.output_names.map((name, index) => `${norm(name)}: result[${index}]`).join(', ')} }`
  };
}
  `.trim() + '\n\n';
}

async function main() {
  fs.writeFileSync('index.ts', '');
  fs.writeFileSync('index.ts', `
import tulind from 'tulind';

export
function _converter(name: string, inputs: number[][], options: number[]) {
  let result: number[][] = [];
  tulind.indicators[name].indicator(inputs, options, (error, data) => {
    if (error) throw error;
    result = data;
  });
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
function _converter(name: string, inputs: number[][], options: number[]) {
  let result: number[][] = [];
  tulind.indicators[name].indicator(inputs, options, (error, data) => {
    if (error) throw error;
    result = data;
  });
  return result;
}
