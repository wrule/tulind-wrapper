import tulind from 'tulind';

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
function typescript_code(indic: indicator) {
  return `
export
function ${
  indic.name
}(${
  indic.input_names.map((name) => `${name}: number[]`).join(', ')
}) {
  const result = converter('${indic.name}', [${indic.input_names.join(', ')}], []);
  return { ${indic.output_names.map((name, index) => `${name}: result[${index}]`).join(', ')} };
}
  `.trim();
}

async function main() {
  console.log(typescript_code(tulind.indicators.macd));
  console.log(sma([2, 3, 1, 3, 4], 2));
  console.log(tulind.indicators.macd);
}

main();
