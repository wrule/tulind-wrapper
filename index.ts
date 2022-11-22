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

export
function abs(real: number[]) {
  const result = _converter('abs', [real], []);
  return result[0];
}

export
function acos(real: number[]) {
  const result = _converter('acos', [real], []);
  return result[0];
}

export
function ad(high: number[], low: number[], close: number[], volume: number[]) {
  const result = _converter('ad', [high, low, close, volume], []);
  return result[0];
}

export
function add(real1: number[], real2: number[]) {
  const result = _converter('add', [real1, real2], []);
  return result[0];
}

export
function adosc(high: number[], low: number[], close: number[], volume: number[], options: { short_period: number; long_period: number }) {
  const result = _converter('adosc', [high, low, close, volume], [options.short_period, options.long_period]);
  return result[0];
}

export
function adx(high: number[], low: number[], close: number[], options: { period: number }) {
  const result = _converter('adx', [high, low, close], [options.period]);
  return result[0];
}

export
function adxr(high: number[], low: number[], close: number[], options: { period: number }) {
  const result = _converter('adxr', [high, low, close], [options.period]);
  return result[0];
}

export
function ao(high: number[], low: number[]) {
  const result = _converter('ao', [high, low], []);
  return result[0];
}

export
function apo(real: number[], options: { short_period: number; long_period: number }) {
  const result = _converter('apo', [real], [options.short_period, options.long_period]);
  return result[0];
}

export
function aroon(high: number[], low: number[], options: { period: number }) {
  const result = _converter('aroon', [high, low], [options.period]);
  return { aroon_down: result[0], aroon_up: result[1] };
}

export
function aroonosc(high: number[], low: number[], options: { period: number }) {
  const result = _converter('aroonosc', [high, low], [options.period]);
  return result[0];
}

export
function asin(real: number[]) {
  const result = _converter('asin', [real], []);
  return result[0];
}

export
function atan(real: number[]) {
  const result = _converter('atan', [real], []);
  return result[0];
}

export
function atr(high: number[], low: number[], close: number[], options: { period: number }) {
  const result = _converter('atr', [high, low, close], [options.period]);
  return result[0];
}

export
function avgprice(open: number[], high: number[], low: number[], close: number[]) {
  const result = _converter('avgprice', [open, high, low, close], []);
  return result[0];
}

export
function bbands(real: number[], options: { period: number; stddev: number }) {
  const result = _converter('bbands', [real], [options.period, options.stddev]);
  return { bbands_lower: result[0], bbands_middle: result[1], bbands_upper: result[2] };
}

export
function bop(open: number[], high: number[], low: number[], close: number[]) {
  const result = _converter('bop', [open, high, low, close], []);
  return result[0];
}

export
function cci(high: number[], low: number[], close: number[], options: { period: number }) {
  const result = _converter('cci', [high, low, close], [options.period]);
  return result[0];
}

export
function ceil(real: number[]) {
  const result = _converter('ceil', [real], []);
  return result[0];
}

export
function cmo(real: number[], options: { period: number }) {
  const result = _converter('cmo', [real], [options.period]);
  return result[0];
}

export
function cos(real: number[]) {
  const result = _converter('cos', [real], []);
  return result[0];
}

export
function cosh(real: number[]) {
  const result = _converter('cosh', [real], []);
  return result[0];
}

export
function crossany(real1: number[], real2: number[]) {
  const result = _converter('crossany', [real1, real2], []);
  return result[0];
}

export
function crossover(real1: number[], real2: number[]) {
  const result = _converter('crossover', [real1, real2], []);
  return result[0];
}

export
function cvi(high: number[], low: number[], options: { period: number }) {
  const result = _converter('cvi', [high, low], [options.period]);
  return result[0];
}

export
function decay(real: number[], options: { period: number }) {
  const result = _converter('decay', [real], [options.period]);
  return result[0];
}

export
function dema(real: number[], options: { period: number }) {
  const result = _converter('dema', [real], [options.period]);
  return result[0];
}

export
function di(high: number[], low: number[], close: number[], options: { period: number }) {
  const result = _converter('di', [high, low, close], [options.period]);
  return { plus_di: result[0], minus_di: result[1] };
}

export
function div(real1: number[], real2: number[]) {
  const result = _converter('div', [real1, real2], []);
  return result[0];
}

export
function dm(high: number[], low: number[], options: { period: number }) {
  const result = _converter('dm', [high, low], [options.period]);
  return { plus_dm: result[0], minus_dm: result[1] };
}

export
function dpo(real: number[], options: { period: number }) {
  const result = _converter('dpo', [real], [options.period]);
  return result[0];
}

export
function dx(high: number[], low: number[], close: number[], options: { period: number }) {
  const result = _converter('dx', [high, low, close], [options.period]);
  return result[0];
}

export
function edecay(real: number[], options: { period: number }) {
  const result = _converter('edecay', [real], [options.period]);
  return result[0];
}

export
function ema(real: number[], options: { period: number }) {
  const result = _converter('ema', [real], [options.period]);
  return result[0];
}

export
function emv(high: number[], low: number[], volume: number[]) {
  const result = _converter('emv', [high, low, volume], []);
  return result[0];
}

export
function exp(real: number[]) {
  const result = _converter('exp', [real], []);
  return result[0];
}

export
function fisher(high: number[], low: number[], options: { period: number }) {
  const result = _converter('fisher', [high, low], [options.period]);
  return { fisher: result[0], fisher_signal: result[1] };
}

export
function floor(real: number[]) {
  const result = _converter('floor', [real], []);
  return result[0];
}

export
function fosc(real: number[], options: { period: number }) {
  const result = _converter('fosc', [real], [options.period]);
  return result[0];
}

export
function hma(real: number[], options: { period: number }) {
  const result = _converter('hma', [real], [options.period]);
  return result[0];
}

export
function kama(real: number[], options: { period: number }) {
  const result = _converter('kama', [real], [options.period]);
  return result[0];
}

export
function kvo(high: number[], low: number[], close: number[], volume: number[], options: { short_period: number; long_period: number }) {
  const result = _converter('kvo', [high, low, close, volume], [options.short_period, options.long_period]);
  return result[0];
}

export
function lag(real: number[], options: { period: number }) {
  const result = _converter('lag', [real], [options.period]);
  return result[0];
}

export
function linreg(real: number[], options: { period: number }) {
  const result = _converter('linreg', [real], [options.period]);
  return result[0];
}

export
function linregintercept(real: number[], options: { period: number }) {
  const result = _converter('linregintercept', [real], [options.period]);
  return result[0];
}

export
function linregslope(real: number[], options: { period: number }) {
  const result = _converter('linregslope', [real], [options.period]);
  return result[0];
}

export
function ln(real: number[]) {
  const result = _converter('ln', [real], []);
  return result[0];
}

export
function log10(real: number[]) {
  const result = _converter('log10', [real], []);
  return result[0];
}

export
function macd(real: number[], options: { short_period: number; long_period: number; signal_period: number }) {
  const result = _converter('macd', [real], [options.short_period, options.long_period, options.signal_period]);
  return { macd: result[0], macd_signal: result[1], macd_histogram: result[2] };
}

export
function marketfi(high: number[], low: number[], volume: number[]) {
  const result = _converter('marketfi', [high, low, volume], []);
  return result[0];
}

export
function mass(high: number[], low: number[], options: { period: number }) {
  const result = _converter('mass', [high, low], [options.period]);
  return result[0];
}

export
function max(real: number[], options: { period: number }) {
  const result = _converter('max', [real], [options.period]);
  return result[0];
}

export
function md(real: number[], options: { period: number }) {
  const result = _converter('md', [real], [options.period]);
  return result[0];
}

export
function medprice(high: number[], low: number[]) {
  const result = _converter('medprice', [high, low], []);
  return result[0];
}

export
function mfi(high: number[], low: number[], close: number[], volume: number[], options: { period: number }) {
  const result = _converter('mfi', [high, low, close, volume], [options.period]);
  return result[0];
}

export
function min(real: number[], options: { period: number }) {
  const result = _converter('min', [real], [options.period]);
  return result[0];
}

export
function mom(real: number[], options: { period: number }) {
  const result = _converter('mom', [real], [options.period]);
  return result[0];
}

export
function msw(real: number[], options: { period: number }) {
  const result = _converter('msw', [real], [options.period]);
  return { msw_sine: result[0], msw_lead: result[1] };
}

export
function mul(real1: number[], real2: number[]) {
  const result = _converter('mul', [real1, real2], []);
  return result[0];
}

export
function natr(high: number[], low: number[], close: number[], options: { period: number }) {
  const result = _converter('natr', [high, low, close], [options.period]);
  return result[0];
}

export
function nvi(close: number[], volume: number[]) {
  const result = _converter('nvi', [close, volume], []);
  return result[0];
}

export
function obv(close: number[], volume: number[]) {
  const result = _converter('obv', [close, volume], []);
  return result[0];
}

export
function ppo(real: number[], options: { short_period: number; long_period: number }) {
  const result = _converter('ppo', [real], [options.short_period, options.long_period]);
  return result[0];
}

export
function psar(high: number[], low: number[], options: { acceleration_factor_step: number; acceleration_factor_maximum: number }) {
  const result = _converter('psar', [high, low], [options.acceleration_factor_step, options.acceleration_factor_maximum]);
  return result[0];
}

export
function pvi(close: number[], volume: number[]) {
  const result = _converter('pvi', [close, volume], []);
  return result[0];
}

export
function qstick(open: number[], close: number[], options: { period: number }) {
  const result = _converter('qstick', [open, close], [options.period]);
  return result[0];
}

export
function roc(real: number[], options: { period: number }) {
  const result = _converter('roc', [real], [options.period]);
  return result[0];
}

export
function rocr(real: number[], options: { period: number }) {
  const result = _converter('rocr', [real], [options.period]);
  return result[0];
}

export
function round(real: number[]) {
  const result = _converter('round', [real], []);
  return result[0];
}

export
function rsi(real: number[], options: { period: number }) {
  const result = _converter('rsi', [real], [options.period]);
  return result[0];
}

export
function sin(real: number[]) {
  const result = _converter('sin', [real], []);
  return result[0];
}

export
function sinh(real: number[]) {
  const result = _converter('sinh', [real], []);
  return result[0];
}

export
function sma(real: number[], options: { period: number }) {
  const result = _converter('sma', [real], [options.period]);
  return result[0];
}

export
function sqrt(real: number[]) {
  const result = _converter('sqrt', [real], []);
  return result[0];
}

export
function stddev(real: number[], options: { period: number }) {
  const result = _converter('stddev', [real], [options.period]);
  return result[0];
}

export
function stderr(real: number[], options: { period: number }) {
  const result = _converter('stderr', [real], [options.period]);
  return result[0];
}

export
function stoch(high: number[], low: number[], close: number[], options: { k_period: number; k_slowing_period: number; d_period: number }) {
  const result = _converter('stoch', [high, low, close], [options.k_period, options.k_slowing_period, options.d_period]);
  return { stoch_k: result[0], stoch_d: result[1] };
}

export
function stochrsi(real: number[], options: { period: number }) {
  const result = _converter('stochrsi', [real], [options.period]);
  return result[0];
}

export
function sub(real1: number[], real2: number[]) {
  const result = _converter('sub', [real1, real2], []);
  return result[0];
}

export
function sum(real: number[], options: { period: number }) {
  const result = _converter('sum', [real], [options.period]);
  return result[0];
}

export
function tan(real: number[]) {
  const result = _converter('tan', [real], []);
  return result[0];
}

export
function tanh(real: number[]) {
  const result = _converter('tanh', [real], []);
  return result[0];
}

export
function tema(real: number[], options: { period: number }) {
  const result = _converter('tema', [real], [options.period]);
  return result[0];
}

export
function todeg(real: number[]) {
  const result = _converter('todeg', [real], []);
  return result[0];
}

export
function torad(real: number[]) {
  const result = _converter('torad', [real], []);
  return result[0];
}

export
function tr(high: number[], low: number[], close: number[]) {
  const result = _converter('tr', [high, low, close], []);
  return result[0];
}

export
function trima(real: number[], options: { period: number }) {
  const result = _converter('trima', [real], [options.period]);
  return result[0];
}

export
function trix(real: number[], options: { period: number }) {
  const result = _converter('trix', [real], [options.period]);
  return result[0];
}

export
function trunc(real: number[]) {
  const result = _converter('trunc', [real], []);
  return result[0];
}

export
function tsf(real: number[], options: { period: number }) {
  const result = _converter('tsf', [real], [options.period]);
  return result[0];
}

export
function typprice(high: number[], low: number[], close: number[]) {
  const result = _converter('typprice', [high, low, close], []);
  return result[0];
}

export
function ultosc(high: number[], low: number[], close: number[], options: { short_period: number; medium_period: number; long_period: number }) {
  const result = _converter('ultosc', [high, low, close], [options.short_period, options.medium_period, options.long_period]);
  return result[0];
}

export
function var_(real: number[], options: { period: number }) {
  const result = _converter('var_', [real], [options.period]);
  return result[0];
}

export
function vhf(real: number[], options: { period: number }) {
  const result = _converter('vhf', [real], [options.period]);
  return result[0];
}

export
function vidya(real: number[], options: { short_period: number; long_period: number; alpha: number }) {
  const result = _converter('vidya', [real], [options.short_period, options.long_period, options.alpha]);
  return result[0];
}

export
function volatility(real: number[], options: { period: number }) {
  const result = _converter('volatility', [real], [options.period]);
  return result[0];
}

export
function vosc(volume: number[], options: { short_period: number; long_period: number }) {
  const result = _converter('vosc', [volume], [options.short_period, options.long_period]);
  return result[0];
}

export
function vwma(close: number[], volume: number[], options: { period: number }) {
  const result = _converter('vwma', [close, volume], [options.period]);
  return result[0];
}

export
function wad(high: number[], low: number[], close: number[]) {
  const result = _converter('wad', [high, low, close], []);
  return result[0];
}

export
function wcprice(high: number[], low: number[], close: number[]) {
  const result = _converter('wcprice', [high, low, close], []);
  return result[0];
}

export
function wilders(real: number[], options: { period: number }) {
  const result = _converter('wilders', [real], [options.period]);
  return result[0];
}

export
function willr(high: number[], low: number[], close: number[], options: { period: number }) {
  const result = _converter('willr', [high, low, close], [options.period]);
  return result[0];
}

export
function wma(real: number[], options: { period: number }) {
  const result = _converter('wma', [real], [options.period]);
  return result[0];
}

export
function zlema(real: number[], options: { period: number }) {
  const result = _converter('zlema', [real], [options.period]);
  return result[0];
}

