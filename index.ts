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

export
function abs(real: number[]) {
  const result = converter('abs', [real], []);
  return { abs: result[0] };
}

export
function acos(real: number[]) {
  const result = converter('acos', [real], []);
  return { acos: result[0] };
}

export
function ad(high: number[], low: number[], close: number[], volume: number[]) {
  const result = converter('ad', [high, low, close, volume], []);
  return { ad: result[0] };
}

export
function add(real: number[], real: number[]) {
  const result = converter('add', [real, real], []);
  return { add: result[0] };
}

export
function adosc(high: number[], low: number[], close: number[], volume: number[], options: { short_period: number; long_period: number }) {
  const result = converter('adosc', [high, low, close, volume], [options.short_period, options.long_period]);
  return { adosc: result[0] };
}

export
function adx(high: number[], low: number[], close: number[], options: { period: number }) {
  const result = converter('adx', [high, low, close], [options.period]);
  return { dx: result[0] };
}

export
function adxr(high: number[], low: number[], close: number[], options: { period: number }) {
  const result = converter('adxr', [high, low, close], [options.period]);
  return { dx: result[0] };
}

export
function ao(high: number[], low: number[]) {
  const result = converter('ao', [high, low], []);
  return { ao: result[0] };
}

export
function apo(real: number[], options: { short_period: number; long_period: number }) {
  const result = converter('apo', [real], [options.short_period, options.long_period]);
  return { apo: result[0] };
}

export
function aroon(high: number[], low: number[], options: { period: number }) {
  const result = converter('aroon', [high, low], [options.period]);
  return { aroon_down: result[0], aroon_up: result[1] };
}

export
function aroonosc(high: number[], low: number[], options: { period: number }) {
  const result = converter('aroonosc', [high, low], [options.period]);
  return { aroonosc: result[0] };
}

export
function asin(real: number[]) {
  const result = converter('asin', [real], []);
  return { asin: result[0] };
}

export
function atan(real: number[]) {
  const result = converter('atan', [real], []);
  return { atan: result[0] };
}

export
function atr(high: number[], low: number[], close: number[], options: { period: number }) {
  const result = converter('atr', [high, low, close], [options.period]);
  return { atr: result[0] };
}

export
function avgprice(open: number[], high: number[], low: number[], close: number[]) {
  const result = converter('avgprice', [open, high, low, close], []);
  return { avgprice: result[0] };
}

export
function bbands(real: number[], options: { period: number; stddev: number }) {
  const result = converter('bbands', [real], [options.period, options.stddev]);
  return { bbands_lower: result[0], bbands_middle: result[1], bbands_upper: result[2] };
}

export
function bop(open: number[], high: number[], low: number[], close: number[]) {
  const result = converter('bop', [open, high, low, close], []);
  return { bop: result[0] };
}

export
function cci(high: number[], low: number[], close: number[], options: { period: number }) {
  const result = converter('cci', [high, low, close], [options.period]);
  return { cci: result[0] };
}

export
function ceil(real: number[]) {
  const result = converter('ceil', [real], []);
  return { ceil: result[0] };
}

export
function cmo(real: number[], options: { period: number }) {
  const result = converter('cmo', [real], [options.period]);
  return { cmo: result[0] };
}

export
function cos(real: number[]) {
  const result = converter('cos', [real], []);
  return { cos: result[0] };
}

export
function cosh(real: number[]) {
  const result = converter('cosh', [real], []);
  return { cosh: result[0] };
}

export
function crossany(real: number[], real: number[]) {
  const result = converter('crossany', [real, real], []);
  return { crossany: result[0] };
}

export
function crossover(real: number[], real: number[]) {
  const result = converter('crossover', [real, real], []);
  return { crossover: result[0] };
}

export
function cvi(high: number[], low: number[], options: { period: number }) {
  const result = converter('cvi', [high, low], [options.period]);
  return { cvi: result[0] };
}

export
function decay(real: number[], options: { period: number }) {
  const result = converter('decay', [real], [options.period]);
  return { decay: result[0] };
}

export
function dema(real: number[], options: { period: number }) {
  const result = converter('dema', [real], [options.period]);
  return { dema: result[0] };
}

export
function di(high: number[], low: number[], close: number[], options: { period: number }) {
  const result = converter('di', [high, low, close], [options.period]);
  return { plus_di: result[0], minus_di: result[1] };
}

export
function div(real: number[], real: number[]) {
  const result = converter('div', [real, real], []);
  return { div: result[0] };
}

export
function dm(high: number[], low: number[], options: { period: number }) {
  const result = converter('dm', [high, low], [options.period]);
  return { plus_dm: result[0], minus_dm: result[1] };
}

export
function dpo(real: number[], options: { period: number }) {
  const result = converter('dpo', [real], [options.period]);
  return { dpo: result[0] };
}

export
function dx(high: number[], low: number[], close: number[], options: { period: number }) {
  const result = converter('dx', [high, low, close], [options.period]);
  return { dx: result[0] };
}

export
function edecay(real: number[], options: { period: number }) {
  const result = converter('edecay', [real], [options.period]);
  return { edecay: result[0] };
}

export
function ema(real: number[], options: { period: number }) {
  const result = converter('ema', [real], [options.period]);
  return { ema: result[0] };
}

export
function emv(high: number[], low: number[], volume: number[]) {
  const result = converter('emv', [high, low, volume], []);
  return { emv: result[0] };
}

export
function exp(real: number[]) {
  const result = converter('exp', [real], []);
  return { exp: result[0] };
}

export
function fisher(high: number[], low: number[], options: { period: number }) {
  const result = converter('fisher', [high, low], [options.period]);
  return { fisher: result[0], fisher_signal: result[1] };
}

export
function floor(real: number[]) {
  const result = converter('floor', [real], []);
  return { floor: result[0] };
}

export
function fosc(real: number[], options: { period: number }) {
  const result = converter('fosc', [real], [options.period]);
  return { fosc: result[0] };
}

export
function hma(real: number[], options: { period: number }) {
  const result = converter('hma', [real], [options.period]);
  return { hma: result[0] };
}

export
function kama(real: number[], options: { period: number }) {
  const result = converter('kama', [real], [options.period]);
  return { kama: result[0] };
}

export
function kvo(high: number[], low: number[], close: number[], volume: number[], options: { short_period: number; long_period: number }) {
  const result = converter('kvo', [high, low, close, volume], [options.short_period, options.long_period]);
  return { kvo: result[0] };
}

export
function lag(real: number[], options: { period: number }) {
  const result = converter('lag', [real], [options.period]);
  return { lag: result[0] };
}

export
function linreg(real: number[], options: { period: number }) {
  const result = converter('linreg', [real], [options.period]);
  return { linreg: result[0] };
}

export
function linregintercept(real: number[], options: { period: number }) {
  const result = converter('linregintercept', [real], [options.period]);
  return { linregintercept: result[0] };
}

export
function linregslope(real: number[], options: { period: number }) {
  const result = converter('linregslope', [real], [options.period]);
  return { linregslope: result[0] };
}

export
function ln(real: number[]) {
  const result = converter('ln', [real], []);
  return { ln: result[0] };
}

export
function log10(real: number[]) {
  const result = converter('log10', [real], []);
  return { log10: result[0] };
}

export
function macd(real: number[], options: { short_period: number; long_period: number; signal_period: number }) {
  const result = converter('macd', [real], [options.short_period, options.long_period, options.signal_period]);
  return { macd: result[0], macd_signal: result[1], macd_histogram: result[2] };
}

export
function marketfi(high: number[], low: number[], volume: number[]) {
  const result = converter('marketfi', [high, low, volume], []);
  return { marketfi: result[0] };
}

export
function mass(high: number[], low: number[], options: { period: number }) {
  const result = converter('mass', [high, low], [options.period]);
  return { mass: result[0] };
}

export
function max(real: number[], options: { period: number }) {
  const result = converter('max', [real], [options.period]);
  return { max: result[0] };
}

export
function md(real: number[], options: { period: number }) {
  const result = converter('md', [real], [options.period]);
  return { md: result[0] };
}

export
function medprice(high: number[], low: number[]) {
  const result = converter('medprice', [high, low], []);
  return { medprice: result[0] };
}

export
function mfi(high: number[], low: number[], close: number[], volume: number[], options: { period: number }) {
  const result = converter('mfi', [high, low, close, volume], [options.period]);
  return { mfi: result[0] };
}

export
function min(real: number[], options: { period: number }) {
  const result = converter('min', [real], [options.period]);
  return { min: result[0] };
}

export
function mom(real: number[], options: { period: number }) {
  const result = converter('mom', [real], [options.period]);
  return { mom: result[0] };
}

export
function msw(real: number[], options: { period: number }) {
  const result = converter('msw', [real], [options.period]);
  return { msw_sine: result[0], msw_lead: result[1] };
}

export
function mul(real: number[], real: number[]) {
  const result = converter('mul', [real, real], []);
  return { mul: result[0] };
}

export
function natr(high: number[], low: number[], close: number[], options: { period: number }) {
  const result = converter('natr', [high, low, close], [options.period]);
  return { natr: result[0] };
}

export
function nvi(close: number[], volume: number[]) {
  const result = converter('nvi', [close, volume], []);
  return { nvi: result[0] };
}

export
function obv(close: number[], volume: number[]) {
  const result = converter('obv', [close, volume], []);
  return { obv: result[0] };
}

export
function ppo(real: number[], options: { short_period: number; long_period: number }) {
  const result = converter('ppo', [real], [options.short_period, options.long_period]);
  return { ppo: result[0] };
}

export
function psar(high: number[], low: number[], options: { acceleration_factor_step: number; acceleration_factor_maximum: number }) {
  const result = converter('psar', [high, low], [options.acceleration_factor_step, options.acceleration_factor_maximum]);
  return { psar: result[0] };
}

export
function pvi(close: number[], volume: number[]) {
  const result = converter('pvi', [close, volume], []);
  return { pvi: result[0] };
}

export
function qstick(open: number[], close: number[], options: { period: number }) {
  const result = converter('qstick', [open, close], [options.period]);
  return { qstick: result[0] };
}

export
function roc(real: number[], options: { period: number }) {
  const result = converter('roc', [real], [options.period]);
  return { roc: result[0] };
}

export
function rocr(real: number[], options: { period: number }) {
  const result = converter('rocr', [real], [options.period]);
  return { rocr: result[0] };
}

export
function round(real: number[]) {
  const result = converter('round', [real], []);
  return { round: result[0] };
}

export
function rsi(real: number[], options: { period: number }) {
  const result = converter('rsi', [real], [options.period]);
  return { rsi: result[0] };
}

export
function sin(real: number[]) {
  const result = converter('sin', [real], []);
  return { sin: result[0] };
}

export
function sinh(real: number[]) {
  const result = converter('sinh', [real], []);
  return { sinh: result[0] };
}

export
function sma(real: number[], options: { period: number }) {
  const result = converter('sma', [real], [options.period]);
  return { sma: result[0] };
}

export
function sqrt(real: number[]) {
  const result = converter('sqrt', [real], []);
  return { sqrt: result[0] };
}

export
function stddev(real: number[], options: { period: number }) {
  const result = converter('stddev', [real], [options.period]);
  return { stddev: result[0] };
}

export
function stderr(real: number[], options: { period: number }) {
  const result = converter('stderr', [real], [options.period]);
  return { stderr: result[0] };
}

export
function stoch(high: number[], low: number[], close: number[], options: { k_period: number; k_slowing_period: number; d_period: number }) {
  const result = converter('stoch', [high, low, close], [options.k_period, options.k_slowing_period, options.d_period]);
  return { stoch_k: result[0], stoch_d: result[1] };
}

export
function stochrsi(real: number[], options: { period: number }) {
  const result = converter('stochrsi', [real], [options.period]);
  return { stochrsi: result[0] };
}

export
function sub(real: number[], real: number[]) {
  const result = converter('sub', [real, real], []);
  return { sub: result[0] };
}

export
function sum(real: number[], options: { period: number }) {
  const result = converter('sum', [real], [options.period]);
  return { sum: result[0] };
}

export
function tan(real: number[]) {
  const result = converter('tan', [real], []);
  return { tan: result[0] };
}

export
function tanh(real: number[]) {
  const result = converter('tanh', [real], []);
  return { tanh: result[0] };
}

export
function tema(real: number[], options: { period: number }) {
  const result = converter('tema', [real], [options.period]);
  return { tema: result[0] };
}

export
function todeg(real: number[]) {
  const result = converter('todeg', [real], []);
  return { degrees: result[0] };
}

export
function torad(real: number[]) {
  const result = converter('torad', [real], []);
  return { radians: result[0] };
}

export
function tr(high: number[], low: number[], close: number[]) {
  const result = converter('tr', [high, low, close], []);
  return { tr: result[0] };
}

export
function trima(real: number[], options: { period: number }) {
  const result = converter('trima', [real], [options.period]);
  return { trima: result[0] };
}

export
function trix(real: number[], options: { period: number }) {
  const result = converter('trix', [real], [options.period]);
  return { trix: result[0] };
}

export
function trunc(real: number[]) {
  const result = converter('trunc', [real], []);
  return { trunc: result[0] };
}

export
function tsf(real: number[], options: { period: number }) {
  const result = converter('tsf', [real], [options.period]);
  return { tsf: result[0] };
}

export
function typprice(high: number[], low: number[], close: number[]) {
  const result = converter('typprice', [high, low, close], []);
  return { typprice: result[0] };
}

export
function ultosc(high: number[], low: number[], close: number[], options: { short_period: number; medium_period: number; long_period: number }) {
  const result = converter('ultosc', [high, low, close], [options.short_period, options.medium_period, options.long_period]);
  return { ultosc: result[0] };
}

export
function var(real: number[], options: { period: number }) {
  const result = converter('var', [real], [options.period]);
  return { var: result[0] };
}

export
function vhf(real: number[], options: { period: number }) {
  const result = converter('vhf', [real], [options.period]);
  return { vhf: result[0] };
}

export
function vidya(real: number[], options: { short_period: number; long_period: number; alpha: number }) {
  const result = converter('vidya', [real], [options.short_period, options.long_period, options.alpha]);
  return { vidya: result[0] };
}

export
function volatility(real: number[], options: { period: number }) {
  const result = converter('volatility', [real], [options.period]);
  return { volatility: result[0] };
}

export
function vosc(volume: number[], options: { short_period: number; long_period: number }) {
  const result = converter('vosc', [volume], [options.short_period, options.long_period]);
  return { vosc: result[0] };
}

export
function vwma(close: number[], volume: number[], options: { period: number }) {
  const result = converter('vwma', [close, volume], [options.period]);
  return { vwma: result[0] };
}

export
function wad(high: number[], low: number[], close: number[]) {
  const result = converter('wad', [high, low, close], []);
  return { wad: result[0] };
}

export
function wcprice(high: number[], low: number[], close: number[]) {
  const result = converter('wcprice', [high, low, close], []);
  return { wcprice: result[0] };
}

export
function wilders(real: number[], options: { period: number }) {
  const result = converter('wilders', [real], [options.period]);
  return { wilders: result[0] };
}

export
function willr(high: number[], low: number[], close: number[], options: { period: number }) {
  const result = converter('willr', [high, low, close], [options.period]);
  return { willr: result[0] };
}

export
function wma(real: number[], options: { period: number }) {
  const result = converter('wma', [real], [options.period]);
  return { wma: result[0] };
}

export
function zlema(real: number[], options: { period: number }) {
  const result = converter('zlema', [real], [options.period]);
  return { zlema: result[0] };
}

