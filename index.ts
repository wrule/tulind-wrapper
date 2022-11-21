import tulind from 'tulind';

tulind.indicators.sma.indicator([[1, 2, 3]], [2], (error, data) => {
  if (error) throw error;
  console.log(data);
});
