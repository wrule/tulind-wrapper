import tulind from 'tulind';
import fs from 'fs';

export
function sma(real: number[], period: number) {
  return converter('sma', [real], [period])[0];
}


export
function converter(name: string, inputs: number[][], options: number[]) {
  let result: number[][] = [];
  tulind.indicators[name].indicator(inputs, options, (error, data) => {
    if (error) throw error;
    result = data;
  });
  return result;
}

export
function norm(text: string) {
  return text.replace(/\s/g, '_').replace(/\%/g, '');
}

export
function typescript_code(indic: indicator) {
  return `
export
function ${indic.name}(${indic.input_names.map((name) => `${norm(name)}: number[]`).join(', ')}${
  indic.option_names.length < 1 ?
    '' :
    `, options: { ${indic.option_names.map((name) => `${norm(name)}: number`).join('; ')} }`
}) {
  const result = converter('${indic.name}', [${indic.input_names.join(', ')}], [${
    indic.option_names.length < 1 ? '' : indic.option_names.map((name) => `options.${norm(name)}`).join(', ')
  }]);
  return { ${indic.output_names.map((name, index) => `${norm(name)}: result[${index}]`).join(', ')} };
}
  `.trim() + '\n\n';
}

async function main() {
  fs.writeFileSync('index.ts', '');
  fs.writeFileSync('index.ts', `
import tulind from 'tulind';

export
function converter(name: string, inputs: number[][], options: number[]) {
  let result: number[][] = [];
  tulind.indicators[name].indicator(inputs, options, (error, data) => {
    if (error) throw error;
    result = data;
  });
  return result;
}
  `.trim() + '\n\n');
  Object.values(tulind.indicators).forEach((indic) => {
    fs.appendFileSync('index.ts', typescript_code(indic));
  });
}

main();
