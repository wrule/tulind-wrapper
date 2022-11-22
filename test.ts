import { macd, sma } from '.';

async function main() {
  const result = macd([1, 2, 3, 3, 2, 3, 4, 8, 7], { short_period: 2, long_period: 3, signal_period: 4 });
  console.log(result);
}

main();
