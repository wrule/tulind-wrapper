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
function _converter(name: string, inputs: number[][], options: number[], align: boolean | number = false) {
  let result: number[][] = [];
  tulind.indicators[name].indicator(inputs, options, (error: any, data: number[][]) => {
    if (error) throw error;
    result = data;
  });
  align && _align(result, align === true ? inputs[0].length : align);
  return result;
}

export
function abs(real: number[], align: boolean | number = false) {
  const result = _converter('abs', [real], [], align);
  return result[0];
}

export
function abs_start() {
  return tulind.indicators.abs.start([]);
}

export
function acos(real: number[], align: boolean | number = false) {
  const result = _converter('acos', [real], [], align);
  return result[0];
}

export
function acos_start() {
  return tulind.indicators.acos.start([]);
}

export
function ad(high: number[], low: number[], close: number[], volume: number[], align: boolean | number = false) {
  const result = _converter('ad', [high, low, close, volume], [], align);
  return result[0];
}

export
function ad_start() {
  return tulind.indicators.ad.start([]);
}

export
function add(real1: number[], real2: number[], align: boolean | number = false) {
  const result = _converter('add', [real1, real2], [], align);
  return result[0];
}

export
function add_start() {
  return tulind.indicators.add.start([]);
}

export
function adosc(high: number[], low: number[], close: number[], volume: number[], options: { short_period: number; long_period: number }, align: boolean | number = false) {
  const result = _converter('adosc', [high, low, close, volume], [options.short_period, options.long_period], align);
  return result[0];
}

export
function adosc_start(options: { short_period: number; long_period: number }) {
  return tulind.indicators.adosc.start([options.short_period, options.long_period]);
}

export
function adx(high: number[], low: number[], close: number[], period: number, align: boolean | number = false) {
  const result = _converter('adx', [high, low, close], [period], align);
  return result[0];
}

export
function adx_start(period: number) {
  return tulind.indicators.adx.start([period]);
}

export
function adxr(high: number[], low: number[], close: number[], period: number, align: boolean | number = false) {
  const result = _converter('adxr', [high, low, close], [period], align);
  return result[0];
}

export
function adxr_start(period: number) {
  return tulind.indicators.adxr.start([period]);
}

export
function ao(high: number[], low: number[], align: boolean | number = false) {
  const result = _converter('ao', [high, low], [], align);
  return result[0];
}

export
function ao_start() {
  return tulind.indicators.ao.start([]);
}

export
function apo(real: number[], options: { short_period: number; long_period: number }, align: boolean | number = false) {
  const result = _converter('apo', [real], [options.short_period, options.long_period], align);
  return result[0];
}

export
function apo_start(options: { short_period: number; long_period: number }) {
  return tulind.indicators.apo.start([options.short_period, options.long_period]);
}

export
function aroon(high: number[], low: number[], period: number, align: boolean | number = false) {
  const result = _converter('aroon', [high, low], [period], align);
  return { aroon_down: result[0], aroon_up: result[1] };
}

export
function aroon_start(period: number) {
  return tulind.indicators.aroon.start([period]);
}

export
function aroonosc(high: number[], low: number[], period: number, align: boolean | number = false) {
  const result = _converter('aroonosc', [high, low], [period], align);
  return result[0];
}

export
function aroonosc_start(period: number) {
  return tulind.indicators.aroonosc.start([period]);
}

export
function asin(real: number[], align: boolean | number = false) {
  const result = _converter('asin', [real], [], align);
  return result[0];
}

export
function asin_start() {
  return tulind.indicators.asin.start([]);
}

export
function atan(real: number[], align: boolean | number = false) {
  const result = _converter('atan', [real], [], align);
  return result[0];
}

export
function atan_start() {
  return tulind.indicators.atan.start([]);
}

export
function atr(high: number[], low: number[], close: number[], period: number, align: boolean | number = false) {
  const result = _converter('atr', [high, low, close], [period], align);
  return result[0];
}

export
function atr_start(period: number) {
  return tulind.indicators.atr.start([period]);
}

export
function avgprice(open: number[], high: number[], low: number[], close: number[], align: boolean | number = false) {
  const result = _converter('avgprice', [open, high, low, close], [], align);
  return result[0];
}

export
function avgprice_start() {
  return tulind.indicators.avgprice.start([]);
}

export
function bbands(real: number[], options: { period: number; stddev: number }, align: boolean | number = false) {
  const result = _converter('bbands', [real], [options.period, options.stddev], align);
  return { bbands_lower: result[0], bbands_middle: result[1], bbands_upper: result[2] };
}

export
function bbands_start(options: { period: number; stddev: number }) {
  return tulind.indicators.bbands.start([options.period, options.stddev]);
}

export
function bop(open: number[], high: number[], low: number[], close: number[], align: boolean | number = false) {
  const result = _converter('bop', [open, high, low, close], [], align);
  return result[0];
}

export
function bop_start() {
  return tulind.indicators.bop.start([]);
}

export
function cci(high: number[], low: number[], close: number[], period: number, align: boolean | number = false) {
  const result = _converter('cci', [high, low, close], [period], align);
  return result[0];
}

export
function cci_start(period: number) {
  return tulind.indicators.cci.start([period]);
}

export
function ceil(real: number[], align: boolean | number = false) {
  const result = _converter('ceil', [real], [], align);
  return result[0];
}

export
function ceil_start() {
  return tulind.indicators.ceil.start([]);
}

export
function cmo(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('cmo', [real], [period], align);
  return result[0];
}

export
function cmo_start(period: number) {
  return tulind.indicators.cmo.start([period]);
}

export
function cos(real: number[], align: boolean | number = false) {
  const result = _converter('cos', [real], [], align);
  return result[0];
}

export
function cos_start() {
  return tulind.indicators.cos.start([]);
}

export
function cosh(real: number[], align: boolean | number = false) {
  const result = _converter('cosh', [real], [], align);
  return result[0];
}

export
function cosh_start() {
  return tulind.indicators.cosh.start([]);
}

export
function crossany(real1: number[], real2: number[], align: boolean | number = false) {
  const result = _converter('crossany', [real1, real2], [], align);
  return result[0];
}

export
function crossany_start() {
  return tulind.indicators.crossany.start([]);
}

export
function crossover(real1: number[], real2: number[], align: boolean | number = false) {
  const result = _converter('crossover', [real1, real2], [], align);
  return result[0];
}

export
function crossover_start() {
  return tulind.indicators.crossover.start([]);
}

export
function cvi(high: number[], low: number[], period: number, align: boolean | number = false) {
  const result = _converter('cvi', [high, low], [period], align);
  return result[0];
}

export
function cvi_start(period: number) {
  return tulind.indicators.cvi.start([period]);
}

export
function decay(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('decay', [real], [period], align);
  return result[0];
}

export
function decay_start(period: number) {
  return tulind.indicators.decay.start([period]);
}

export
function dema(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('dema', [real], [period], align);
  return result[0];
}

export
function dema_start(period: number) {
  return tulind.indicators.dema.start([period]);
}

export
function di(high: number[], low: number[], close: number[], period: number, align: boolean | number = false) {
  const result = _converter('di', [high, low, close], [period], align);
  return { plus_di: result[0], minus_di: result[1] };
}

export
function di_start(period: number) {
  return tulind.indicators.di.start([period]);
}

export
function div(real1: number[], real2: number[], align: boolean | number = false) {
  const result = _converter('div', [real1, real2], [], align);
  return result[0];
}

export
function div_start() {
  return tulind.indicators.div.start([]);
}

export
function dm(high: number[], low: number[], period: number, align: boolean | number = false) {
  const result = _converter('dm', [high, low], [period], align);
  return { plus_dm: result[0], minus_dm: result[1] };
}

export
function dm_start(period: number) {
  return tulind.indicators.dm.start([period]);
}

export
function dpo(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('dpo', [real], [period], align);
  return result[0];
}

export
function dpo_start(period: number) {
  return tulind.indicators.dpo.start([period]);
}

export
function dx(high: number[], low: number[], close: number[], period: number, align: boolean | number = false) {
  const result = _converter('dx', [high, low, close], [period], align);
  return result[0];
}

export
function dx_start(period: number) {
  return tulind.indicators.dx.start([period]);
}

export
function edecay(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('edecay', [real], [period], align);
  return result[0];
}

export
function edecay_start(period: number) {
  return tulind.indicators.edecay.start([period]);
}

export
function ema(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('ema', [real], [period], align);
  return result[0];
}

export
function ema_start(period: number) {
  return tulind.indicators.ema.start([period]);
}

export
function emv(high: number[], low: number[], volume: number[], align: boolean | number = false) {
  const result = _converter('emv', [high, low, volume], [], align);
  return result[0];
}

export
function emv_start() {
  return tulind.indicators.emv.start([]);
}

export
function exp(real: number[], align: boolean | number = false) {
  const result = _converter('exp', [real], [], align);
  return result[0];
}

export
function exp_start() {
  return tulind.indicators.exp.start([]);
}

export
function fisher(high: number[], low: number[], period: number, align: boolean | number = false) {
  const result = _converter('fisher', [high, low], [period], align);
  return { fisher: result[0], fisher_signal: result[1] };
}

export
function fisher_start(period: number) {
  return tulind.indicators.fisher.start([period]);
}

export
function floor(real: number[], align: boolean | number = false) {
  const result = _converter('floor', [real], [], align);
  return result[0];
}

export
function floor_start() {
  return tulind.indicators.floor.start([]);
}

export
function fosc(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('fosc', [real], [period], align);
  return result[0];
}

export
function fosc_start(period: number) {
  return tulind.indicators.fosc.start([period]);
}

export
function hma(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('hma', [real], [period], align);
  return result[0];
}

export
function hma_start(period: number) {
  return tulind.indicators.hma.start([period]);
}

export
function kama(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('kama', [real], [period], align);
  return result[0];
}

export
function kama_start(period: number) {
  return tulind.indicators.kama.start([period]);
}

export
function kvo(high: number[], low: number[], close: number[], volume: number[], options: { short_period: number; long_period: number }, align: boolean | number = false) {
  const result = _converter('kvo', [high, low, close, volume], [options.short_period, options.long_period], align);
  return result[0];
}

export
function kvo_start(options: { short_period: number; long_period: number }) {
  return tulind.indicators.kvo.start([options.short_period, options.long_period]);
}

export
function lag(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('lag', [real], [period], align);
  return result[0];
}

export
function lag_start(period: number) {
  return tulind.indicators.lag.start([period]);
}

export
function linreg(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('linreg', [real], [period], align);
  return result[0];
}

export
function linreg_start(period: number) {
  return tulind.indicators.linreg.start([period]);
}

export
function linregintercept(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('linregintercept', [real], [period], align);
  return result[0];
}

export
function linregintercept_start(period: number) {
  return tulind.indicators.linregintercept.start([period]);
}

export
function linregslope(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('linregslope', [real], [period], align);
  return result[0];
}

export
function linregslope_start(period: number) {
  return tulind.indicators.linregslope.start([period]);
}

export
function ln(real: number[], align: boolean | number = false) {
  const result = _converter('ln', [real], [], align);
  return result[0];
}

export
function ln_start() {
  return tulind.indicators.ln.start([]);
}

export
function log10(real: number[], align: boolean | number = false) {
  const result = _converter('log10', [real], [], align);
  return result[0];
}

export
function log10_start() {
  return tulind.indicators.log10.start([]);
}

export
function macd(real: number[], options: { short_period: number; long_period: number; signal_period: number }, align: boolean | number = false) {
  const result = _converter('macd', [real], [options.short_period, options.long_period, options.signal_period], align);
  return { macd: result[0], macd_signal: result[1], macd_histogram: result[2] };
}

export
function macd_start(options: { short_period: number; long_period: number; signal_period: number }) {
  return tulind.indicators.macd.start([options.short_period, options.long_period, options.signal_period]);
}

export
function marketfi(high: number[], low: number[], volume: number[], align: boolean | number = false) {
  const result = _converter('marketfi', [high, low, volume], [], align);
  return result[0];
}

export
function marketfi_start() {
  return tulind.indicators.marketfi.start([]);
}

export
function mass(high: number[], low: number[], period: number, align: boolean | number = false) {
  const result = _converter('mass', [high, low], [period], align);
  return result[0];
}

export
function mass_start(period: number) {
  return tulind.indicators.mass.start([period]);
}

export
function max(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('max', [real], [period], align);
  return result[0];
}

export
function max_start(period: number) {
  return tulind.indicators.max.start([period]);
}

export
function md(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('md', [real], [period], align);
  return result[0];
}

export
function md_start(period: number) {
  return tulind.indicators.md.start([period]);
}

export
function medprice(high: number[], low: number[], align: boolean | number = false) {
  const result = _converter('medprice', [high, low], [], align);
  return result[0];
}

export
function medprice_start() {
  return tulind.indicators.medprice.start([]);
}

export
function mfi(high: number[], low: number[], close: number[], volume: number[], period: number, align: boolean | number = false) {
  const result = _converter('mfi', [high, low, close, volume], [period], align);
  return result[0];
}

export
function mfi_start(period: number) {
  return tulind.indicators.mfi.start([period]);
}

export
function min(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('min', [real], [period], align);
  return result[0];
}

export
function min_start(period: number) {
  return tulind.indicators.min.start([period]);
}

export
function mom(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('mom', [real], [period], align);
  return result[0];
}

export
function mom_start(period: number) {
  return tulind.indicators.mom.start([period]);
}

export
function msw(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('msw', [real], [period], align);
  return { msw_sine: result[0], msw_lead: result[1] };
}

export
function msw_start(period: number) {
  return tulind.indicators.msw.start([period]);
}

export
function mul(real1: number[], real2: number[], align: boolean | number = false) {
  const result = _converter('mul', [real1, real2], [], align);
  return result[0];
}

export
function mul_start() {
  return tulind.indicators.mul.start([]);
}

export
function natr(high: number[], low: number[], close: number[], period: number, align: boolean | number = false) {
  const result = _converter('natr', [high, low, close], [period], align);
  return result[0];
}

export
function natr_start(period: number) {
  return tulind.indicators.natr.start([period]);
}

export
function nvi(close: number[], volume: number[], align: boolean | number = false) {
  const result = _converter('nvi', [close, volume], [], align);
  return result[0];
}

export
function nvi_start() {
  return tulind.indicators.nvi.start([]);
}

export
function obv(close: number[], volume: number[], align: boolean | number = false) {
  const result = _converter('obv', [close, volume], [], align);
  return result[0];
}

export
function obv_start() {
  return tulind.indicators.obv.start([]);
}

export
function ppo(real: number[], options: { short_period: number; long_period: number }, align: boolean | number = false) {
  const result = _converter('ppo', [real], [options.short_period, options.long_period], align);
  return result[0];
}

export
function ppo_start(options: { short_period: number; long_period: number }) {
  return tulind.indicators.ppo.start([options.short_period, options.long_period]);
}

export
function psar(high: number[], low: number[], options: { acceleration_factor_step: number; acceleration_factor_maximum: number }, align: boolean | number = false) {
  const result = _converter('psar', [high, low], [options.acceleration_factor_step, options.acceleration_factor_maximum], align);
  return result[0];
}

export
function psar_start(options: { acceleration_factor_step: number; acceleration_factor_maximum: number }) {
  return tulind.indicators.psar.start([options.acceleration_factor_step, options.acceleration_factor_maximum]);
}

export
function pvi(close: number[], volume: number[], align: boolean | number = false) {
  const result = _converter('pvi', [close, volume], [], align);
  return result[0];
}

export
function pvi_start() {
  return tulind.indicators.pvi.start([]);
}

export
function qstick(open: number[], close: number[], period: number, align: boolean | number = false) {
  const result = _converter('qstick', [open, close], [period], align);
  return result[0];
}

export
function qstick_start(period: number) {
  return tulind.indicators.qstick.start([period]);
}

export
function roc(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('roc', [real], [period], align);
  return result[0];
}

export
function roc_start(period: number) {
  return tulind.indicators.roc.start([period]);
}

export
function rocr(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('rocr', [real], [period], align);
  return result[0];
}

export
function rocr_start(period: number) {
  return tulind.indicators.rocr.start([period]);
}

export
function round(real: number[], align: boolean | number = false) {
  const result = _converter('round', [real], [], align);
  return result[0];
}

export
function round_start() {
  return tulind.indicators.round.start([]);
}

export
function rsi(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('rsi', [real], [period], align);
  return result[0];
}

export
function rsi_start(period: number) {
  return tulind.indicators.rsi.start([period]);
}

export
function sin(real: number[], align: boolean | number = false) {
  const result = _converter('sin', [real], [], align);
  return result[0];
}

export
function sin_start() {
  return tulind.indicators.sin.start([]);
}

export
function sinh(real: number[], align: boolean | number = false) {
  const result = _converter('sinh', [real], [], align);
  return result[0];
}

export
function sinh_start() {
  return tulind.indicators.sinh.start([]);
}

export
function sma(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('sma', [real], [period], align);
  return result[0];
}

export
function sma_start(period: number) {
  return tulind.indicators.sma.start([period]);
}

export
function sqrt(real: number[], align: boolean | number = false) {
  const result = _converter('sqrt', [real], [], align);
  return result[0];
}

export
function sqrt_start() {
  return tulind.indicators.sqrt.start([]);
}

export
function stddev(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('stddev', [real], [period], align);
  return result[0];
}

export
function stddev_start(period: number) {
  return tulind.indicators.stddev.start([period]);
}

export
function stderr(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('stderr', [real], [period], align);
  return result[0];
}

export
function stderr_start(period: number) {
  return tulind.indicators.stderr.start([period]);
}

export
function stoch(high: number[], low: number[], close: number[], options: { k_period: number; k_slowing_period: number; d_period: number }, align: boolean | number = false) {
  const result = _converter('stoch', [high, low, close], [options.k_period, options.k_slowing_period, options.d_period], align);
  return { stoch_k: result[0], stoch_d: result[1] };
}

export
function stoch_start(options: { k_period: number; k_slowing_period: number; d_period: number }) {
  return tulind.indicators.stoch.start([options.k_period, options.k_slowing_period, options.d_period]);
}

export
function stochrsi(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('stochrsi', [real], [period], align);
  return result[0];
}

export
function stochrsi_start(period: number) {
  return tulind.indicators.stochrsi.start([period]);
}

export
function sub(real1: number[], real2: number[], align: boolean | number = false) {
  const result = _converter('sub', [real1, real2], [], align);
  return result[0];
}

export
function sub_start() {
  return tulind.indicators.sub.start([]);
}

export
function sum(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('sum', [real], [period], align);
  return result[0];
}

export
function sum_start(period: number) {
  return tulind.indicators.sum.start([period]);
}

export
function tan(real: number[], align: boolean | number = false) {
  const result = _converter('tan', [real], [], align);
  return result[0];
}

export
function tan_start() {
  return tulind.indicators.tan.start([]);
}

export
function tanh(real: number[], align: boolean | number = false) {
  const result = _converter('tanh', [real], [], align);
  return result[0];
}

export
function tanh_start() {
  return tulind.indicators.tanh.start([]);
}

export
function tema(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('tema', [real], [period], align);
  return result[0];
}

export
function tema_start(period: number) {
  return tulind.indicators.tema.start([period]);
}

export
function todeg(real: number[], align: boolean | number = false) {
  const result = _converter('todeg', [real], [], align);
  return result[0];
}

export
function todeg_start() {
  return tulind.indicators.todeg.start([]);
}

export
function torad(real: number[], align: boolean | number = false) {
  const result = _converter('torad', [real], [], align);
  return result[0];
}

export
function torad_start() {
  return tulind.indicators.torad.start([]);
}

export
function tr(high: number[], low: number[], close: number[], align: boolean | number = false) {
  const result = _converter('tr', [high, low, close], [], align);
  return result[0];
}

export
function tr_start() {
  return tulind.indicators.tr.start([]);
}

export
function trima(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('trima', [real], [period], align);
  return result[0];
}

export
function trima_start(period: number) {
  return tulind.indicators.trima.start([period]);
}

export
function trix(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('trix', [real], [period], align);
  return result[0];
}

export
function trix_start(period: number) {
  return tulind.indicators.trix.start([period]);
}

export
function trunc(real: number[], align: boolean | number = false) {
  const result = _converter('trunc', [real], [], align);
  return result[0];
}

export
function trunc_start() {
  return tulind.indicators.trunc.start([]);
}

export
function tsf(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('tsf', [real], [period], align);
  return result[0];
}

export
function tsf_start(period: number) {
  return tulind.indicators.tsf.start([period]);
}

export
function typprice(high: number[], low: number[], close: number[], align: boolean | number = false) {
  const result = _converter('typprice', [high, low, close], [], align);
  return result[0];
}

export
function typprice_start() {
  return tulind.indicators.typprice.start([]);
}

export
function ultosc(high: number[], low: number[], close: number[], options: { short_period: number; medium_period: number; long_period: number }, align: boolean | number = false) {
  const result = _converter('ultosc', [high, low, close], [options.short_period, options.medium_period, options.long_period], align);
  return result[0];
}

export
function ultosc_start(options: { short_period: number; medium_period: number; long_period: number }) {
  return tulind.indicators.ultosc.start([options.short_period, options.medium_period, options.long_period]);
}

export
function var_(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('var', [real], [period], align);
  return result[0];
}

export
function var__start(period: number) {
  return tulind.indicators.var.start([period]);
}

export
function vhf(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('vhf', [real], [period], align);
  return result[0];
}

export
function vhf_start(period: number) {
  return tulind.indicators.vhf.start([period]);
}

export
function vidya(real: number[], options: { short_period: number; long_period: number; alpha: number }, align: boolean | number = false) {
  const result = _converter('vidya', [real], [options.short_period, options.long_period, options.alpha], align);
  return result[0];
}

export
function vidya_start(options: { short_period: number; long_period: number; alpha: number }) {
  return tulind.indicators.vidya.start([options.short_period, options.long_period, options.alpha]);
}

export
function volatility(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('volatility', [real], [period], align);
  return result[0];
}

export
function volatility_start(period: number) {
  return tulind.indicators.volatility.start([period]);
}

export
function vosc(volume: number[], options: { short_period: number; long_period: number }, align: boolean | number = false) {
  const result = _converter('vosc', [volume], [options.short_period, options.long_period], align);
  return result[0];
}

export
function vosc_start(options: { short_period: number; long_period: number }) {
  return tulind.indicators.vosc.start([options.short_period, options.long_period]);
}

export
function vwma(close: number[], volume: number[], period: number, align: boolean | number = false) {
  const result = _converter('vwma', [close, volume], [period], align);
  return result[0];
}

export
function vwma_start(period: number) {
  return tulind.indicators.vwma.start([period]);
}

export
function wad(high: number[], low: number[], close: number[], align: boolean | number = false) {
  const result = _converter('wad', [high, low, close], [], align);
  return result[0];
}

export
function wad_start() {
  return tulind.indicators.wad.start([]);
}

export
function wcprice(high: number[], low: number[], close: number[], align: boolean | number = false) {
  const result = _converter('wcprice', [high, low, close], [], align);
  return result[0];
}

export
function wcprice_start() {
  return tulind.indicators.wcprice.start([]);
}

export
function wilders(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('wilders', [real], [period], align);
  return result[0];
}

export
function wilders_start(period: number) {
  return tulind.indicators.wilders.start([period]);
}

export
function willr(high: number[], low: number[], close: number[], period: number, align: boolean | number = false) {
  const result = _converter('willr', [high, low, close], [period], align);
  return result[0];
}

export
function willr_start(period: number) {
  return tulind.indicators.willr.start([period]);
}

export
function wma(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('wma', [real], [period], align);
  return result[0];
}

export
function wma_start(period: number) {
  return tulind.indicators.wma.start([period]);
}

export
function zlema(real: number[], period: number, align: boolean | number = false) {
  const result = _converter('zlema', [real], [period], align);
  return result[0];
}

export
function zlema_start(period: number) {
  return tulind.indicators.zlema.start([period]);
}

