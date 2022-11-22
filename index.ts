import tulind from 'tulind';

export
function sma(real: number[], period: number) {
  let sma: number[] = [];
  tulind.indicators.sma.indicator([], [], (error, data) => {
    if (error) throw error;
    sma = data[0];
  });
  return sma;
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
}, ${
  (() => {
    if (indic.option_names.length < 1) return '';
    if (indic.option_names.length < 2) return `${indic.option_names[0]}: number`;
    return `options: { ${indic.option_names.map((name) => `${name}: number[];`).join(' ')} }`;
  })()
}) {
  let sma: number[] = [];
  tulind.indicators.${
  indic.name
}.indicator([], [], (error, data) => {
    if (error) throw error;
    sma = data[0];
  });
  return sma;
}
`.trim();
}

async function main() {
  console.log(tulind.indicators.macd);
  console.log(typescript_code(tulind.indicators.macd));
}

main();
