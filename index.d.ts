export declare function _align(outputs: number[][], length: number): void;
export declare function _converter(name: string, inputs: number[][], options: number[], align?: boolean | number): number[][];
export declare function abs(real: number[], align?: boolean | number): number[];
export declare function abs_start(): number;
export declare function acos(real: number[], align?: boolean | number): number[];
export declare function acos_start(): number;
export declare function ad(high: number[], low: number[], close: number[], volume: number[], align?: boolean | number): number[];
export declare function ad_start(): number;
export declare function add(real1: number[], real2: number[], align?: boolean | number): number[];
export declare function add_start(): number;
export declare function adosc(high: number[], low: number[], close: number[], volume: number[], options: {
    short_period: number;
    long_period: number;
}, align?: boolean | number): number[];
export declare function adosc_start(options: {
    short_period: number;
    long_period: number;
}): number;
export declare function adx(high: number[], low: number[], close: number[], period: number, align?: boolean | number): number[];
export declare function adx_start(period: number): number;
export declare function adxr(high: number[], low: number[], close: number[], period: number, align?: boolean | number): number[];
export declare function adxr_start(period: number): number;
export declare function ao(high: number[], low: number[], align?: boolean | number): number[];
export declare function ao_start(): number;
export declare function apo(real: number[], options: {
    short_period: number;
    long_period: number;
}, align?: boolean | number): number[];
export declare function apo_start(options: {
    short_period: number;
    long_period: number;
}): number;
export declare function aroon(high: number[], low: number[], period: number, align?: boolean | number): {
    aroon_down: number[];
    aroon_up: number[];
};
export declare function aroon_start(period: number): number;
export declare function aroonosc(high: number[], low: number[], period: number, align?: boolean | number): number[];
export declare function aroonosc_start(period: number): number;
export declare function asin(real: number[], align?: boolean | number): number[];
export declare function asin_start(): number;
export declare function atan(real: number[], align?: boolean | number): number[];
export declare function atan_start(): number;
export declare function atr(high: number[], low: number[], close: number[], period: number, align?: boolean | number): number[];
export declare function atr_start(period: number): number;
export declare function avgprice(open: number[], high: number[], low: number[], close: number[], align?: boolean | number): number[];
export declare function avgprice_start(): number;
export declare function bbands(real: number[], options: {
    period: number;
    stddev: number;
}, align?: boolean | number): {
    bbands_lower: number[];
    bbands_middle: number[];
    bbands_upper: number[];
};
export declare function bbands_start(options: {
    period: number;
    stddev: number;
}): number;
export declare function bop(open: number[], high: number[], low: number[], close: number[], align?: boolean | number): number[];
export declare function bop_start(): number;
export declare function cci(high: number[], low: number[], close: number[], period: number, align?: boolean | number): number[];
export declare function cci_start(period: number): number;
export declare function ceil(real: number[], align?: boolean | number): number[];
export declare function ceil_start(): number;
export declare function cmo(real: number[], period: number, align?: boolean | number): number[];
export declare function cmo_start(period: number): number;
export declare function cos(real: number[], align?: boolean | number): number[];
export declare function cos_start(): number;
export declare function cosh(real: number[], align?: boolean | number): number[];
export declare function cosh_start(): number;
export declare function crossany(real1: number[], real2: number[], align?: boolean | number): number[];
export declare function crossany_start(): number;
export declare function crossover(real1: number[], real2: number[], align?: boolean | number): number[];
export declare function crossover_start(): number;
export declare function cvi(high: number[], low: number[], period: number, align?: boolean | number): number[];
export declare function cvi_start(period: number): number;
export declare function decay(real: number[], period: number, align?: boolean | number): number[];
export declare function decay_start(period: number): number;
export declare function dema(real: number[], period: number, align?: boolean | number): number[];
export declare function dema_start(period: number): number;
export declare function di(high: number[], low: number[], close: number[], period: number, align?: boolean | number): {
    plus_di: number[];
    minus_di: number[];
};
export declare function di_start(period: number): number;
export declare function div(real1: number[], real2: number[], align?: boolean | number): number[];
export declare function div_start(): number;
export declare function dm(high: number[], low: number[], period: number, align?: boolean | number): {
    plus_dm: number[];
    minus_dm: number[];
};
export declare function dm_start(period: number): number;
export declare function dpo(real: number[], period: number, align?: boolean | number): number[];
export declare function dpo_start(period: number): number;
export declare function dx(high: number[], low: number[], close: number[], period: number, align?: boolean | number): number[];
export declare function dx_start(period: number): number;
export declare function edecay(real: number[], period: number, align?: boolean | number): number[];
export declare function edecay_start(period: number): number;
export declare function ema(real: number[], period: number, align?: boolean | number): number[];
export declare function ema_start(period: number): number;
export declare function emv(high: number[], low: number[], volume: number[], align?: boolean | number): number[];
export declare function emv_start(): number;
export declare function exp(real: number[], align?: boolean | number): number[];
export declare function exp_start(): number;
export declare function fisher(high: number[], low: number[], period: number, align?: boolean | number): {
    fisher: number[];
    fisher_signal: number[];
};
export declare function fisher_start(period: number): number;
export declare function floor(real: number[], align?: boolean | number): number[];
export declare function floor_start(): number;
export declare function fosc(real: number[], period: number, align?: boolean | number): number[];
export declare function fosc_start(period: number): number;
export declare function hma(real: number[], period: number, align?: boolean | number): number[];
export declare function hma_start(period: number): number;
export declare function kama(real: number[], period: number, align?: boolean | number): number[];
export declare function kama_start(period: number): number;
export declare function kvo(high: number[], low: number[], close: number[], volume: number[], options: {
    short_period: number;
    long_period: number;
}, align?: boolean | number): number[];
export declare function kvo_start(options: {
    short_period: number;
    long_period: number;
}): number;
export declare function lag(real: number[], period: number, align?: boolean | number): number[];
export declare function lag_start(period: number): number;
export declare function linreg(real: number[], period: number, align?: boolean | number): number[];
export declare function linreg_start(period: number): number;
export declare function linregintercept(real: number[], period: number, align?: boolean | number): number[];
export declare function linregintercept_start(period: number): number;
export declare function linregslope(real: number[], period: number, align?: boolean | number): number[];
export declare function linregslope_start(period: number): number;
export declare function ln(real: number[], align?: boolean | number): number[];
export declare function ln_start(): number;
export declare function log10(real: number[], align?: boolean | number): number[];
export declare function log10_start(): number;
export declare function macd(real: number[], options: {
    short_period: number;
    long_period: number;
    signal_period: number;
}, align?: boolean | number): {
    macd: number[];
    macd_signal: number[];
    macd_histogram: number[];
};
export declare function macd_start(options: {
    short_period: number;
    long_period: number;
    signal_period: number;
}): number;
export declare function marketfi(high: number[], low: number[], volume: number[], align?: boolean | number): number[];
export declare function marketfi_start(): number;
export declare function mass(high: number[], low: number[], period: number, align?: boolean | number): number[];
export declare function mass_start(period: number): number;
export declare function max(real: number[], period: number, align?: boolean | number): number[];
export declare function max_start(period: number): number;
export declare function md(real: number[], period: number, align?: boolean | number): number[];
export declare function md_start(period: number): number;
export declare function medprice(high: number[], low: number[], align?: boolean | number): number[];
export declare function medprice_start(): number;
export declare function mfi(high: number[], low: number[], close: number[], volume: number[], period: number, align?: boolean | number): number[];
export declare function mfi_start(period: number): number;
export declare function min(real: number[], period: number, align?: boolean | number): number[];
export declare function min_start(period: number): number;
export declare function mom(real: number[], period: number, align?: boolean | number): number[];
export declare function mom_start(period: number): number;
export declare function msw(real: number[], period: number, align?: boolean | number): {
    msw_sine: number[];
    msw_lead: number[];
};
export declare function msw_start(period: number): number;
export declare function mul(real1: number[], real2: number[], align?: boolean | number): number[];
export declare function mul_start(): number;
export declare function natr(high: number[], low: number[], close: number[], period: number, align?: boolean | number): number[];
export declare function natr_start(period: number): number;
export declare function nvi(close: number[], volume: number[], align?: boolean | number): number[];
export declare function nvi_start(): number;
export declare function obv(close: number[], volume: number[], align?: boolean | number): number[];
export declare function obv_start(): number;
export declare function ppo(real: number[], options: {
    short_period: number;
    long_period: number;
}, align?: boolean | number): number[];
export declare function ppo_start(options: {
    short_period: number;
    long_period: number;
}): number;
export declare function psar(high: number[], low: number[], options: {
    acceleration_factor_step: number;
    acceleration_factor_maximum: number;
}, align?: boolean | number): number[];
export declare function psar_start(options: {
    acceleration_factor_step: number;
    acceleration_factor_maximum: number;
}): number;
export declare function pvi(close: number[], volume: number[], align?: boolean | number): number[];
export declare function pvi_start(): number;
export declare function qstick(open: number[], close: number[], period: number, align?: boolean | number): number[];
export declare function qstick_start(period: number): number;
export declare function roc(real: number[], period: number, align?: boolean | number): number[];
export declare function roc_start(period: number): number;
export declare function rocr(real: number[], period: number, align?: boolean | number): number[];
export declare function rocr_start(period: number): number;
export declare function round(real: number[], align?: boolean | number): number[];
export declare function round_start(): number;
export declare function rsi(real: number[], period: number, align?: boolean | number): number[];
export declare function rsi_start(period: number): number;
export declare function sin(real: number[], align?: boolean | number): number[];
export declare function sin_start(): number;
export declare function sinh(real: number[], align?: boolean | number): number[];
export declare function sinh_start(): number;
export declare function sma(real: number[], period: number, align?: boolean | number): number[];
export declare function sma_start(period: number): number;
export declare function sqrt(real: number[], align?: boolean | number): number[];
export declare function sqrt_start(): number;
export declare function stddev(real: number[], period: number, align?: boolean | number): number[];
export declare function stddev_start(period: number): number;
export declare function stderr(real: number[], period: number, align?: boolean | number): number[];
export declare function stderr_start(period: number): number;
export declare function stoch(high: number[], low: number[], close: number[], options: {
    k_period: number;
    k_slowing_period: number;
    d_period: number;
}, align?: boolean | number): {
    stoch_k: number[];
    stoch_d: number[];
};
export declare function stoch_start(options: {
    k_period: number;
    k_slowing_period: number;
    d_period: number;
}): number;
export declare function stochrsi(real: number[], period: number, align?: boolean | number): number[];
export declare function stochrsi_start(period: number): number;
export declare function sub(real1: number[], real2: number[], align?: boolean | number): number[];
export declare function sub_start(): number;
export declare function sum(real: number[], period: number, align?: boolean | number): number[];
export declare function sum_start(period: number): number;
export declare function tan(real: number[], align?: boolean | number): number[];
export declare function tan_start(): number;
export declare function tanh(real: number[], align?: boolean | number): number[];
export declare function tanh_start(): number;
export declare function tema(real: number[], period: number, align?: boolean | number): number[];
export declare function tema_start(period: number): number;
export declare function todeg(real: number[], align?: boolean | number): number[];
export declare function todeg_start(): number;
export declare function torad(real: number[], align?: boolean | number): number[];
export declare function torad_start(): number;
export declare function tr(high: number[], low: number[], close: number[], align?: boolean | number): number[];
export declare function tr_start(): number;
export declare function trima(real: number[], period: number, align?: boolean | number): number[];
export declare function trima_start(period: number): number;
export declare function trix(real: number[], period: number, align?: boolean | number): number[];
export declare function trix_start(period: number): number;
export declare function trunc(real: number[], align?: boolean | number): number[];
export declare function trunc_start(): number;
export declare function tsf(real: number[], period: number, align?: boolean | number): number[];
export declare function tsf_start(period: number): number;
export declare function typprice(high: number[], low: number[], close: number[], align?: boolean | number): number[];
export declare function typprice_start(): number;
export declare function ultosc(high: number[], low: number[], close: number[], options: {
    short_period: number;
    medium_period: number;
    long_period: number;
}, align?: boolean | number): number[];
export declare function ultosc_start(options: {
    short_period: number;
    medium_period: number;
    long_period: number;
}): number;
export declare function var_(real: number[], period: number, align?: boolean | number): number[];
export declare function var__start(period: number): number;
export declare function vhf(real: number[], period: number, align?: boolean | number): number[];
export declare function vhf_start(period: number): number;
export declare function vidya(real: number[], options: {
    short_period: number;
    long_period: number;
    alpha: number;
}, align?: boolean | number): number[];
export declare function vidya_start(options: {
    short_period: number;
    long_period: number;
    alpha: number;
}): number;
export declare function volatility(real: number[], period: number, align?: boolean | number): number[];
export declare function volatility_start(period: number): number;
export declare function vosc(volume: number[], options: {
    short_period: number;
    long_period: number;
}, align?: boolean | number): number[];
export declare function vosc_start(options: {
    short_period: number;
    long_period: number;
}): number;
export declare function vwma(close: number[], volume: number[], period: number, align?: boolean | number): number[];
export declare function vwma_start(period: number): number;
export declare function wad(high: number[], low: number[], close: number[], align?: boolean | number): number[];
export declare function wad_start(): number;
export declare function wcprice(high: number[], low: number[], close: number[], align?: boolean | number): number[];
export declare function wcprice_start(): number;
export declare function wilders(real: number[], period: number, align?: boolean | number): number[];
export declare function wilders_start(period: number): number;
export declare function willr(high: number[], low: number[], close: number[], period: number, align?: boolean | number): number[];
export declare function willr_start(period: number): number;
export declare function wma(real: number[], period: number, align?: boolean | number): number[];
export declare function wma_start(period: number): number;
export declare function zlema(real: number[], period: number, align?: boolean | number): number[];
export declare function zlema_start(period: number): number;
//# sourceMappingURL=index.d.ts.map