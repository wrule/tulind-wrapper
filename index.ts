import tulind from 'tulind';

export
function _align(outputs: number[][], length: number) {
  outputs.forEach((output) => {
    const diff = length - output.length;
    if (diff > 0) output.unshift(...Array(diff).fill(NaN));
    if (diff < 0) output.splice(0, -diff);
  });
}

export
function _converter(name: string, inputs: number[][], options: number[], align = false) {
  let result: number[][] = [];
  tulind.indicators[name].indicator(inputs, options, (error, data) => {
    if (error) throw error;
    result = data;
  });
  align && _align(result, inputs[0].length);
  return result;
}

export
function abs(real: number[], align = false) {
  const result = _converter('abs', [real], [], align);
  return result[0];
}

export
function abs_start() {
  return tulind.indicators.abs.start([]);
}

export
function acos(real: number[], align = false) {
  const result = _converter('acos', [real], [], align);
  return result[0];
}

export
function acos_start() {
  return tulind.indicators.acos.start([]);
}

export
function ad(high: number[], low: number[], close: number[], volume: number[], align = false) {
  const result = _converter('ad', [high, low, close, volume], [], align);
  return result[0];
}

export
function ad_start() {
  return tulind.indicators.ad.start([]);
}

export
function add(real1: number[], real2: number[], align = false) {
  const result = _converter('add', [real1, real2], [], align);
  return result[0];
}

export
function add_start() {
  return tulind.indicators.add.start([]);
}

export
function adosc(high: number[], low: number[], close: number[], volume: number[], options: { short_period: number; long_period: number }, align = false) {
  const result = _converter('adosc', [high, low, close, volume], [options.short_period, options.long_period], align);
  return result[0];
}

export
function adosc_start(options: { short_period: number; long_period: number }) {
  return tulind.indicators.adosc.start([options.short_period, options.long_period]);
}

export
function adx(high: number[], low: number[], close: number[], options: { period: number }, align = false) {
  const result = _converter('adx', [high, low, close], [options.period], align);
  return result[0];
}

export
function adx_start(options: { period: number }) {
  return tulind.indicators.adx.start([options.period]);
}

export
function adxr(high: number[], low: number[], close: number[], options: { period: number }, align = false) {
  const result = _converter('adxr', [high, low, close], [options.period], align);
  return result[0];
}

export
function adxr_start(options: { period: number }) {
  return tulind.indicators.adxr.start([options.period]);
}

export
function ao(high: number[], low: number[], align = false) {
  const result = _converter('ao', [high, low], [], align);
  return result[0];
}

export
function ao_start() {
  return tulind.indicators.ao.start([]);
}

export
function apo(real: number[], options: { short_period: number; long_period: number }, align = false) {
  const result = _converter('apo', [real], [options.short_period, options.long_period], align);
  return result[0];
}

export
function apo_start(options: { short_period: number; long_period: number }) {
  return tulind.indicators.apo.start([options.short_period, options.long_period]);
}

export
function aroon(high: number[], low: number[], options: { period: number }, align = false) {
  const result = _converter('aroon', [high, low], [options.period], align);
  return { aroon_down: result[0], aroon_up: result[1] };
}

export
function aroon_start(options: { period: number }) {
  return tulind.indicators.aroon.start([options.period]);
}

export
function aroonosc(high: number[], low: number[], options: { period: number }, align = false) {
  const result = _converter('aroonosc', [high, low], [options.period], align);
  return result[0];
}

export
function aroonosc_start(options: { period: number }) {
  return tulind.indicators.aroonosc.start([options.period]);
}

export
function asin(real: number[], align = false) {
  const result = _converter('asin', [real], [], align);
  return result[0];
}

export
function asin_start() {
  return tulind.indicators.asin.start([]);
}

export
function atan(real: number[], align = false) {
  const result = _converter('atan', [real], [], align);
  return result[0];
}

export
function atan_start() {
  return tulind.indicators.atan.start([]);
}

export
function atr(high: number[], low: number[], close: number[], options: { period: number }, align = false) {
  const result = _converter('atr', [high, low, close], [options.period], align);
  return result[0];
}

export
function atr_start(options: { period: number }) {
  return tulind.indicators.atr.start([options.period]);
}

export
function avgprice(open: number[], high: number[], low: number[], close: number[], align = false) {
  const result = _converter('avgprice', [open, high, low, close], [], align);
  return result[0];
}

export
function avgprice_start() {
  return tulind.indicators.avgprice.start([]);
}

export
function bbands(real: number[], options: { period: number; stddev: number }, align = false) {
  const result = _converter('bbands', [real], [options.period, options.stddev], align);
  return { bbands_lower: result[0], bbands_middle: result[1], bbands_upper: result[2] };
}

export
function bbands_start(options: { period: number; stddev: number }) {
  return tulind.indicators.bbands.start([options.period, options.stddev]);
}

export
function bop(open: number[], high: number[], low: number[], close: number[], align = false) {
  const result = _converter('bop', [open, high, low, close], [], align);
  return result[0];
}

export
function bop_start() {
  return tulind.indicators.bop.start([]);
}

export
function cci(high: number[], low: number[], close: number[], options: { period: number }, align = false) {
  const result = _converter('cci', [high, low, close], [options.period], align);
  return result[0];
}

export
function cci_start(options: { period: number }) {
  return tulind.indicators.cci.start([options.period]);
}

export
function ceil(real: number[], align = false) {
  const result = _converter('ceil', [real], [], align);
  return result[0];
}

export
function ceil_start() {
  return tulind.indicators.ceil.start([]);
}

export
function cmo(real: number[], options: { period: number }, align = false) {
  const result = _converter('cmo', [real], [options.period], align);
  return result[0];
}

export
function cmo_start(options: { period: number }) {
  return tulind.indicators.cmo.start([options.period]);
}

export
function cos(real: number[], align = false) {
  const result = _converter('cos', [real], [], align);
  return result[0];
}

export
function cos_start() {
  return tulind.indicators.cos.start([]);
}

export
function cosh(real: number[], align = false) {
  const result = _converter('cosh', [real], [], align);
  return result[0];
}

export
function cosh_start() {
  return tulind.indicators.cosh.start([]);
}

export
function crossany(real1: number[], real2: number[], align = false) {
  const result = _converter('crossany', [real1, real2], [], align);
  return result[0];
}

export
function crossany_start() {
  return tulind.indicators.crossany.start([]);
}

export
function crossover(real1: number[], real2: number[], align = false) {
  const result = _converter('crossover', [real1, real2], [], align);
  return result[0];
}

export
function crossover_start() {
  return tulind.indicators.crossover.start([]);
}

export
function cvi(high: number[], low: number[], options: { period: number }, align = false) {
  const result = _converter('cvi', [high, low], [options.period], align);
  return result[0];
}

export
function cvi_start(options: { period: number }) {
  return tulind.indicators.cvi.start([options.period]);
}

export
function decay(real: number[], options: { period: number }, align = false) {
  const result = _converter('decay', [real], [options.period], align);
  return result[0];
}

export
function decay_start(options: { period: number }) {
  return tulind.indicators.decay.start([options.period]);
}

export
function dema(real: number[], options: { period: number }, align = false) {
  const result = _converter('dema', [real], [options.period], align);
  return result[0];
}

export
function dema_start(options: { period: number }) {
  return tulind.indicators.dema.start([options.period]);
}

export
function di(high: number[], low: number[], close: number[], options: { period: number }, align = false) {
  const result = _converter('di', [high, low, close], [options.period], align);
  return { plus_di: result[0], minus_di: result[1] };
}

export
function di_start(options: { period: number }) {
  return tulind.indicators.di.start([options.period]);
}

export
function div(real1: number[], real2: number[], align = false) {
  const result = _converter('div', [real1, real2], [], align);
  return result[0];
}

export
function div_start() {
  return tulind.indicators.div.start([]);
}

export
function dm(high: number[], low: number[], options: { period: number }, align = false) {
  const result = _converter('dm', [high, low], [options.period], align);
  return { plus_dm: result[0], minus_dm: result[1] };
}

export
function dm_start(options: { period: number }) {
  return tulind.indicators.dm.start([options.period]);
}

export
function dpo(real: number[], options: { period: number }, align = false) {
  const result = _converter('dpo', [real], [options.period], align);
  return result[0];
}

export
function dpo_start(options: { period: number }) {
  return tulind.indicators.dpo.start([options.period]);
}

export
function dx(high: number[], low: number[], close: number[], options: { period: number }, align = false) {
  const result = _converter('dx', [high, low, close], [options.period], align);
  return result[0];
}

export
function dx_start(options: { period: number }) {
  return tulind.indicators.dx.start([options.period]);
}

export
function edecay(real: number[], options: { period: number }, align = false) {
  const result = _converter('edecay', [real], [options.period], align);
  return result[0];
}

export
function edecay_start(options: { period: number }) {
  return tulind.indicators.edecay.start([options.period]);
}

export
function ema(real: number[], options: { period: number }, align = false) {
  const result = _converter('ema', [real], [options.period], align);
  return result[0];
}

export
function ema_start(options: { period: number }) {
  return tulind.indicators.ema.start([options.period]);
}

export
function emv(high: number[], low: number[], volume: number[], align = false) {
  const result = _converter('emv', [high, low, volume], [], align);
  return result[0];
}

export
function emv_start() {
  return tulind.indicators.emv.start([]);
}

export
function exp(real: number[], align = false) {
  const result = _converter('exp', [real], [], align);
  return result[0];
}

export
function exp_start() {
  return tulind.indicators.exp.start([]);
}

export
function fisher(high: number[], low: number[], options: { period: number }, align = false) {
  const result = _converter('fisher', [high, low], [options.period], align);
  return { fisher: result[0], fisher_signal: result[1] };
}

export
function fisher_start(options: { period: number }) {
  return tulind.indicators.fisher.start([options.period]);
}

export
function floor(real: number[], align = false) {
  const result = _converter('floor', [real], [], align);
  return result[0];
}

export
function floor_start() {
  return tulind.indicators.floor.start([]);
}

export
function fosc(real: number[], options: { period: number }, align = false) {
  const result = _converter('fosc', [real], [options.period], align);
  return result[0];
}

export
function fosc_start(options: { period: number }) {
  return tulind.indicators.fosc.start([options.period]);
}

export
function hma(real: number[], options: { period: number }, align = false) {
  const result = _converter('hma', [real], [options.period], align);
  return result[0];
}

export
function hma_start(options: { period: number }) {
  return tulind.indicators.hma.start([options.period]);
}

export
function kama(real: number[], options: { period: number }, align = false) {
  const result = _converter('kama', [real], [options.period], align);
  return result[0];
}

export
function kama_start(options: { period: number }) {
  return tulind.indicators.kama.start([options.period]);
}

export
function kvo(high: number[], low: number[], close: number[], volume: number[], options: { short_period: number; long_period: number }, align = false) {
  const result = _converter('kvo', [high, low, close, volume], [options.short_period, options.long_period], align);
  return result[0];
}

export
function kvo_start(options: { short_period: number; long_period: number }) {
  return tulind.indicators.kvo.start([options.short_period, options.long_period]);
}

export
function lag(real: number[], options: { period: number }, align = false) {
  const result = _converter('lag', [real], [options.period], align);
  return result[0];
}

export
function lag_start(options: { period: number }) {
  return tulind.indicators.lag.start([options.period]);
}

export
function linreg(real: number[], options: { period: number }, align = false) {
  const result = _converter('linreg', [real], [options.period], align);
  return result[0];
}

export
function linreg_start(options: { period: number }) {
  return tulind.indicators.linreg.start([options.period]);
}

export
function linregintercept(real: number[], options: { period: number }, align = false) {
  const result = _converter('linregintercept', [real], [options.period], align);
  return result[0];
}

export
function linregintercept_start(options: { period: number }) {
  return tulind.indicators.linregintercept.start([options.period]);
}

export
function linregslope(real: number[], options: { period: number }, align = false) {
  const result = _converter('linregslope', [real], [options.period], align);
  return result[0];
}

export
function linregslope_start(options: { period: number }) {
  return tulind.indicators.linregslope.start([options.period]);
}

export
function ln(real: number[], align = false) {
  const result = _converter('ln', [real], [], align);
  return result[0];
}

export
function ln_start() {
  return tulind.indicators.ln.start([]);
}

export
function log10(real: number[], align = false) {
  const result = _converter('log10', [real], [], align);
  return result[0];
}

export
function log10_start() {
  return tulind.indicators.log10.start([]);
}

export
function macd(real: number[], options: { short_period: number; long_period: number; signal_period: number }, align = false) {
  const result = _converter('macd', [real], [options.short_period, options.long_period, options.signal_period], align);
  return { macd: result[0], macd_signal: result[1], macd_histogram: result[2] };
}

export
function macd_start(options: { short_period: number; long_period: number; signal_period: number }) {
  return tulind.indicators.macd.start([options.short_period, options.long_period, options.signal_period]);
}

export
function marketfi(high: number[], low: number[], volume: number[], align = false) {
  const result = _converter('marketfi', [high, low, volume], [], align);
  return result[0];
}

export
function marketfi_start() {
  return tulind.indicators.marketfi.start([]);
}

export
function mass(high: number[], low: number[], options: { period: number }, align = false) {
  const result = _converter('mass', [high, low], [options.period], align);
  return result[0];
}

export
function mass_start(options: { period: number }) {
  return tulind.indicators.mass.start([options.period]);
}

export
function max(real: number[], options: { period: number }, align = false) {
  const result = _converter('max', [real], [options.period], align);
  return result[0];
}

export
function max_start(options: { period: number }) {
  return tulind.indicators.max.start([options.period]);
}

export
function md(real: number[], options: { period: number }, align = false) {
  const result = _converter('md', [real], [options.period], align);
  return result[0];
}

export
function md_start(options: { period: number }) {
  return tulind.indicators.md.start([options.period]);
}

export
function medprice(high: number[], low: number[], align = false) {
  const result = _converter('medprice', [high, low], [], align);
  return result[0];
}

export
function medprice_start() {
  return tulind.indicators.medprice.start([]);
}

export
function mfi(high: number[], low: number[], close: number[], volume: number[], options: { period: number }, align = false) {
  const result = _converter('mfi', [high, low, close, volume], [options.period], align);
  return result[0];
}

export
function mfi_start(options: { period: number }) {
  return tulind.indicators.mfi.start([options.period]);
}

export
function min(real: number[], options: { period: number }, align = false) {
  const result = _converter('min', [real], [options.period], align);
  return result[0];
}

export
function min_start(options: { period: number }) {
  return tulind.indicators.min.start([options.period]);
}

export
function mom(real: number[], options: { period: number }, align = false) {
  const result = _converter('mom', [real], [options.period], align);
  return result[0];
}

export
function mom_start(options: { period: number }) {
  return tulind.indicators.mom.start([options.period]);
}

export
function msw(real: number[], options: { period: number }, align = false) {
  const result = _converter('msw', [real], [options.period], align);
  return { msw_sine: result[0], msw_lead: result[1] };
}

export
function msw_start(options: { period: number }) {
  return tulind.indicators.msw.start([options.period]);
}

export
function mul(real1: number[], real2: number[], align = false) {
  const result = _converter('mul', [real1, real2], [], align);
  return result[0];
}

export
function mul_start() {
  return tulind.indicators.mul.start([]);
}

export
function natr(high: number[], low: number[], close: number[], options: { period: number }, align = false) {
  const result = _converter('natr', [high, low, close], [options.period], align);
  return result[0];
}

export
function natr_start(options: { period: number }) {
  return tulind.indicators.natr.start([options.period]);
}

export
function nvi(close: number[], volume: number[], align = false) {
  const result = _converter('nvi', [close, volume], [], align);
  return result[0];
}

export
function nvi_start() {
  return tulind.indicators.nvi.start([]);
}

export
function obv(close: number[], volume: number[], align = false) {
  const result = _converter('obv', [close, volume], [], align);
  return result[0];
}

export
function obv_start() {
  return tulind.indicators.obv.start([]);
}

export
function ppo(real: number[], options: { short_period: number; long_period: number }, align = false) {
  const result = _converter('ppo', [real], [options.short_period, options.long_period], align);
  return result[0];
}

export
function ppo_start(options: { short_period: number; long_period: number }) {
  return tulind.indicators.ppo.start([options.short_period, options.long_period]);
}

export
function psar(high: number[], low: number[], options: { acceleration_factor_step: number; acceleration_factor_maximum: number }, align = false) {
  const result = _converter('psar', [high, low], [options.acceleration_factor_step, options.acceleration_factor_maximum], align);
  return result[0];
}

export
function psar_start(options: { acceleration_factor_step: number; acceleration_factor_maximum: number }) {
  return tulind.indicators.psar.start([options.acceleration_factor_step, options.acceleration_factor_maximum]);
}

export
function pvi(close: number[], volume: number[], align = false) {
  const result = _converter('pvi', [close, volume], [], align);
  return result[0];
}

export
function pvi_start() {
  return tulind.indicators.pvi.start([]);
}

export
function qstick(open: number[], close: number[], options: { period: number }, align = false) {
  const result = _converter('qstick', [open, close], [options.period], align);
  return result[0];
}

export
function qstick_start(options: { period: number }) {
  return tulind.indicators.qstick.start([options.period]);
}

export
function roc(real: number[], options: { period: number }, align = false) {
  const result = _converter('roc', [real], [options.period], align);
  return result[0];
}

export
function roc_start(options: { period: number }) {
  return tulind.indicators.roc.start([options.period]);
}

export
function rocr(real: number[], options: { period: number }, align = false) {
  const result = _converter('rocr', [real], [options.period], align);
  return result[0];
}

export
function rocr_start(options: { period: number }) {
  return tulind.indicators.rocr.start([options.period]);
}

export
function round(real: number[], align = false) {
  const result = _converter('round', [real], [], align);
  return result[0];
}

export
function round_start() {
  return tulind.indicators.round.start([]);
}

export
function rsi(real: number[], options: { period: number }, align = false) {
  const result = _converter('rsi', [real], [options.period], align);
  return result[0];
}

export
function rsi_start(options: { period: number }) {
  return tulind.indicators.rsi.start([options.period]);
}

export
function sin(real: number[], align = false) {
  const result = _converter('sin', [real], [], align);
  return result[0];
}

export
function sin_start() {
  return tulind.indicators.sin.start([]);
}

export
function sinh(real: number[], align = false) {
  const result = _converter('sinh', [real], [], align);
  return result[0];
}

export
function sinh_start() {
  return tulind.indicators.sinh.start([]);
}

export
function sma(real: number[], options: { period: number }, align = false) {
  const result = _converter('sma', [real], [options.period], align);
  return result[0];
}

export
function sma_start(options: { period: number }) {
  return tulind.indicators.sma.start([options.period]);
}

export
function sqrt(real: number[], align = false) {
  const result = _converter('sqrt', [real], [], align);
  return result[0];
}

export
function sqrt_start() {
  return tulind.indicators.sqrt.start([]);
}

export
function stddev(real: number[], options: { period: number }, align = false) {
  const result = _converter('stddev', [real], [options.period], align);
  return result[0];
}

export
function stddev_start(options: { period: number }) {
  return tulind.indicators.stddev.start([options.period]);
}

export
function stderr(real: number[], options: { period: number }, align = false) {
  const result = _converter('stderr', [real], [options.period], align);
  return result[0];
}

export
function stderr_start(options: { period: number }) {
  return tulind.indicators.stderr.start([options.period]);
}

export
function stoch(high: number[], low: number[], close: number[], options: { k_period: number; k_slowing_period: number; d_period: number }, align = false) {
  const result = _converter('stoch', [high, low, close], [options.k_period, options.k_slowing_period, options.d_period], align);
  return { stoch_k: result[0], stoch_d: result[1] };
}

export
function stoch_start(options: { k_period: number; k_slowing_period: number; d_period: number }) {
  return tulind.indicators.stoch.start([options.k_period, options.k_slowing_period, options.d_period]);
}

export
function stochrsi(real: number[], options: { period: number }, align = false) {
  const result = _converter('stochrsi', [real], [options.period], align);
  return result[0];
}

export
function stochrsi_start(options: { period: number }) {
  return tulind.indicators.stochrsi.start([options.period]);
}

export
function sub(real1: number[], real2: number[], align = false) {
  const result = _converter('sub', [real1, real2], [], align);
  return result[0];
}

export
function sub_start() {
  return tulind.indicators.sub.start([]);
}

export
function sum(real: number[], options: { period: number }, align = false) {
  const result = _converter('sum', [real], [options.period], align);
  return result[0];
}

export
function sum_start(options: { period: number }) {
  return tulind.indicators.sum.start([options.period]);
}

export
function tan(real: number[], align = false) {
  const result = _converter('tan', [real], [], align);
  return result[0];
}

export
function tan_start() {
  return tulind.indicators.tan.start([]);
}

export
function tanh(real: number[], align = false) {
  const result = _converter('tanh', [real], [], align);
  return result[0];
}

export
function tanh_start() {
  return tulind.indicators.tanh.start([]);
}

export
function tema(real: number[], options: { period: number }, align = false) {
  const result = _converter('tema', [real], [options.period], align);
  return result[0];
}

export
function tema_start(options: { period: number }) {
  return tulind.indicators.tema.start([options.period]);
}

export
function todeg(real: number[], align = false) {
  const result = _converter('todeg', [real], [], align);
  return result[0];
}

export
function todeg_start() {
  return tulind.indicators.todeg.start([]);
}

export
function torad(real: number[], align = false) {
  const result = _converter('torad', [real], [], align);
  return result[0];
}

export
function torad_start() {
  return tulind.indicators.torad.start([]);
}

export
function tr(high: number[], low: number[], close: number[], align = false) {
  const result = _converter('tr', [high, low, close], [], align);
  return result[0];
}

export
function tr_start() {
  return tulind.indicators.tr.start([]);
}

export
function trima(real: number[], options: { period: number }, align = false) {
  const result = _converter('trima', [real], [options.period], align);
  return result[0];
}

export
function trima_start(options: { period: number }) {
  return tulind.indicators.trima.start([options.period]);
}

export
function trix(real: number[], options: { period: number }, align = false) {
  const result = _converter('trix', [real], [options.period], align);
  return result[0];
}

export
function trix_start(options: { period: number }) {
  return tulind.indicators.trix.start([options.period]);
}

export
function trunc(real: number[], align = false) {
  const result = _converter('trunc', [real], [], align);
  return result[0];
}

export
function trunc_start() {
  return tulind.indicators.trunc.start([]);
}

export
function tsf(real: number[], options: { period: number }, align = false) {
  const result = _converter('tsf', [real], [options.period], align);
  return result[0];
}

export
function tsf_start(options: { period: number }) {
  return tulind.indicators.tsf.start([options.period]);
}

export
function typprice(high: number[], low: number[], close: number[], align = false) {
  const result = _converter('typprice', [high, low, close], [], align);
  return result[0];
}

export
function typprice_start() {
  return tulind.indicators.typprice.start([]);
}

export
function ultosc(high: number[], low: number[], close: number[], options: { short_period: number; medium_period: number; long_period: number }, align = false) {
  const result = _converter('ultosc', [high, low, close], [options.short_period, options.medium_period, options.long_period], align);
  return result[0];
}

export
function ultosc_start(options: { short_period: number; medium_period: number; long_period: number }) {
  return tulind.indicators.ultosc.start([options.short_period, options.medium_period, options.long_period]);
}

export
function var_(real: number[], options: { period: number }, align = false) {
  const result = _converter('var', [real], [options.period], align);
  return result[0];
}

export
function var__start(options: { period: number }) {
  return tulind.indicators.var.start([options.period]);
}

export
function vhf(real: number[], options: { period: number }, align = false) {
  const result = _converter('vhf', [real], [options.period], align);
  return result[0];
}

export
function vhf_start(options: { period: number }) {
  return tulind.indicators.vhf.start([options.period]);
}

export
function vidya(real: number[], options: { short_period: number; long_period: number; alpha: number }, align = false) {
  const result = _converter('vidya', [real], [options.short_period, options.long_period, options.alpha], align);
  return result[0];
}

export
function vidya_start(options: { short_period: number; long_period: number; alpha: number }) {
  return tulind.indicators.vidya.start([options.short_period, options.long_period, options.alpha]);
}

export
function volatility(real: number[], options: { period: number }, align = false) {
  const result = _converter('volatility', [real], [options.period], align);
  return result[0];
}

export
function volatility_start(options: { period: number }) {
  return tulind.indicators.volatility.start([options.period]);
}

export
function vosc(volume: number[], options: { short_period: number; long_period: number }, align = false) {
  const result = _converter('vosc', [volume], [options.short_period, options.long_period], align);
  return result[0];
}

export
function vosc_start(options: { short_period: number; long_period: number }) {
  return tulind.indicators.vosc.start([options.short_period, options.long_period]);
}

export
function vwma(close: number[], volume: number[], options: { period: number }, align = false) {
  const result = _converter('vwma', [close, volume], [options.period], align);
  return result[0];
}

export
function vwma_start(options: { period: number }) {
  return tulind.indicators.vwma.start([options.period]);
}

export
function wad(high: number[], low: number[], close: number[], align = false) {
  const result = _converter('wad', [high, low, close], [], align);
  return result[0];
}

export
function wad_start() {
  return tulind.indicators.wad.start([]);
}

export
function wcprice(high: number[], low: number[], close: number[], align = false) {
  const result = _converter('wcprice', [high, low, close], [], align);
  return result[0];
}

export
function wcprice_start() {
  return tulind.indicators.wcprice.start([]);
}

export
function wilders(real: number[], options: { period: number }, align = false) {
  const result = _converter('wilders', [real], [options.period], align);
  return result[0];
}

export
function wilders_start(options: { period: number }) {
  return tulind.indicators.wilders.start([options.period]);
}

export
function willr(high: number[], low: number[], close: number[], options: { period: number }, align = false) {
  const result = _converter('willr', [high, low, close], [options.period], align);
  return result[0];
}

export
function willr_start(options: { period: number }) {
  return tulind.indicators.willr.start([options.period]);
}

export
function wma(real: number[], options: { period: number }, align = false) {
  const result = _converter('wma', [real], [options.period], align);
  return result[0];
}

export
function wma_start(options: { period: number }) {
  return tulind.indicators.wma.start([options.period]);
}

export
function zlema(real: number[], options: { period: number }, align = false) {
  const result = _converter('zlema', [real], [options.period], align);
  return result[0];
}

export
function zlema_start(options: { period: number }) {
  return tulind.indicators.zlema.start([options.period]);
}

