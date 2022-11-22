import tulind from 'tulind';


async function main() {
  let result: string[] = [];
  Object
    .values(tulind.indicators)
    .map((value) => Object.keys(value))
    .forEach((item) => {
      result.push(...item);
    });
  result = Array.from(new Set(result));
  console.log(result);
}
// console.log(tulind.indicators.sma);
main();
