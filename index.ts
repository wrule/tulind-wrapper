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
  return '';
}

async function main() {
  console.log(tulind.indicators.sma);
  console.log(sma([2, 3, 1, 3, 4], 2));
}

main();
