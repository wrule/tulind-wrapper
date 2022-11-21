import tulind from 'tulind';

console.log(tulind.indicators.sma);

tulind.indicators.sma.indicator([[1, 2, 3]], [2], (error, data) => {
  if (error) throw error;
  console.log(data);
});
