export declare function _align(outputs: number[][], length: number): void;
export declare function _converter(name: string, inputs: number[][], options: number[], align?: boolean): number[][];
export declare function abs(real: number[], align?: boolean): number[];
export declare function abs_start(): number;
export declare function acos(real: number[], align?: boolean): number[];
export declare function acos_start(): number;
export declare function ad(high: number[], low: number[], close: number[], volume: number[], align?: boolean): number[];
export declare function ad_start(): number;
export declare function add(real1: number[], real2: number[], align?: boolean): number[];
export declare function add_start(): number;
export declare function adosc(high: number[], low: number[], close: number[], volume: number[], options: {
    short_period: number;
    long_period: number;
}, align?: boolean): number[];
export declare function adosc_start(options: {
    short_period: number;
    long_period: number;
}): number;
export declare function adx(high: number[], low: number[], close: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function adx_start(options: {
    period: number;
}): number;
export declare function adxr(high: number[], low: number[], close: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function adxr_start(options: {
    period: number;
}): number;
export declare function ao(high: number[], low: number[], align?: boolean): number[];
export declare function ao_start(): number;
export declare function apo(real: number[], options: {
    short_period: number;
    long_period: number;
}, align?: boolean): number[];
export declare function apo_start(options: {
    short_period: number;
    long_period: number;
}): number;
export declare function aroon(high: number[], low: number[], options: {
    period: number;
}, align?: boolean): {
    aroon_down: number[];
    aroon_up: number[];
};
export declare function aroon_start(options: {
    period: number;
}): number;
export declare function aroonosc(high: number[], low: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function aroonosc_start(options: {
    period: number;
}): number;
export declare function asin(real: number[], align?: boolean): number[];
export declare function asin_start(): number;
export declare function atan(real: number[], align?: boolean): number[];
export declare function atan_start(): number;
export declare function atr(high: number[], low: number[], close: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function atr_start(options: {
    period: number;
}): number;
export declare function avgprice(open: number[], high: number[], low: number[], close: number[], align?: boolean): number[];
export declare function avgprice_start(): number;
export declare function bbands(real: number[], options: {
    period: number;
    stddev: number;
}, align?: boolean): {
    bbands_lower: number[];
    bbands_middle: number[];
    bbands_upper: number[];
};
export declare function bbands_start(options: {
    period: number;
    stddev: number;
}): number;
export declare function bop(open: number[], high: number[], low: number[], close: number[], align?: boolean): number[];
export declare function bop_start(): number;
export declare function cci(high: number[], low: number[], close: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function cci_start(options: {
    period: number;
}): number;
export declare function ceil(real: number[], align?: boolean): number[];
export declare function ceil_start(): number;
export declare function cmo(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function cmo_start(options: {
    period: number;
}): number;
export declare function cos(real: number[], align?: boolean): number[];
export declare function cos_start(): number;
export declare function cosh(real: number[], align?: boolean): number[];
export declare function cosh_start(): number;
export declare function crossany(real1: number[], real2: number[], align?: boolean): number[];
export declare function crossany_start(): number;
export declare function crossover(real1: number[], real2: number[], align?: boolean): number[];
export declare function crossover_start(): number;
export declare function cvi(high: number[], low: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function cvi_start(options: {
    period: number;
}): number;
export declare function decay(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function decay_start(options: {
    period: number;
}): number;
export declare function dema(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function dema_start(options: {
    period: number;
}): number;
export declare function di(high: number[], low: number[], close: number[], options: {
    period: number;
}, align?: boolean): {
    plus_di: number[];
    minus_di: number[];
};
export declare function di_start(options: {
    period: number;
}): number;
export declare function div(real1: number[], real2: number[], align?: boolean): number[];
export declare function div_start(): number;
export declare function dm(high: number[], low: number[], options: {
    period: number;
}, align?: boolean): {
    plus_dm: number[];
    minus_dm: number[];
};
export declare function dm_start(options: {
    period: number;
}): number;
export declare function dpo(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function dpo_start(options: {
    period: number;
}): number;
export declare function dx(high: number[], low: number[], close: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function dx_start(options: {
    period: number;
}): number;
export declare function edecay(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function edecay_start(options: {
    period: number;
}): number;
export declare function ema(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function ema_start(options: {
    period: number;
}): number;
export declare function emv(high: number[], low: number[], volume: number[], align?: boolean): number[];
export declare function emv_start(): number;
export declare function exp(real: number[], align?: boolean): number[];
export declare function exp_start(): number;
export declare function fisher(high: number[], low: number[], options: {
    period: number;
}, align?: boolean): {
    fisher: number[];
    fisher_signal: number[];
};
export declare function fisher_start(options: {
    period: number;
}): number;
export declare function floor(real: number[], align?: boolean): number[];
export declare function floor_start(): number;
export declare function fosc(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function fosc_start(options: {
    period: number;
}): number;
export declare function hma(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function hma_start(options: {
    period: number;
}): number;
export declare function kama(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function kama_start(options: {
    period: number;
}): number;
export declare function kvo(high: number[], low: number[], close: number[], volume: number[], options: {
    short_period: number;
    long_period: number;
}, align?: boolean): number[];
export declare function kvo_start(options: {
    short_period: number;
    long_period: number;
}): number;
export declare function lag(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function lag_start(options: {
    period: number;
}): number;
export declare function linreg(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function linreg_start(options: {
    period: number;
}): number;
export declare function linregintercept(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function linregintercept_start(options: {
    period: number;
}): number;
export declare function linregslope(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function linregslope_start(options: {
    period: number;
}): number;
export declare function ln(real: number[], align?: boolean): number[];
export declare function ln_start(): number;
export declare function log10(real: number[], align?: boolean): number[];
export declare function log10_start(): number;
export declare function macd(real: number[], options: {
    short_period: number;
    long_period: number;
    signal_period: number;
}, align?: boolean): {
    macd: number[];
    macd_signal: number[];
    macd_histogram: number[];
};
export declare function macd_start(options: {
    short_period: number;
    long_period: number;
    signal_period: number;
}): number;
export declare function marketfi(high: number[], low: number[], volume: number[], align?: boolean): number[];
export declare function marketfi_start(): number;
export declare function mass(high: number[], low: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function mass_start(options: {
    period: number;
}): number;
export declare function max(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function max_start(options: {
    period: number;
}): number;
export declare function md(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function md_start(options: {
    period: number;
}): number;
export declare function medprice(high: number[], low: number[], align?: boolean): number[];
export declare function medprice_start(): number;
export declare function mfi(high: number[], low: number[], close: number[], volume: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function mfi_start(options: {
    period: number;
}): number;
export declare function min(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function min_start(options: {
    period: number;
}): number;
export declare function mom(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function mom_start(options: {
    period: number;
}): number;
export declare function msw(real: number[], options: {
    period: number;
}, align?: boolean): {
    msw_sine: number[];
    msw_lead: number[];
};
export declare function msw_start(options: {
    period: number;
}): number;
export declare function mul(real1: number[], real2: number[], align?: boolean): number[];
export declare function mul_start(): number;
export declare function natr(high: number[], low: number[], close: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function natr_start(options: {
    period: number;
}): number;
export declare function nvi(close: number[], volume: number[], align?: boolean): number[];
export declare function nvi_start(): number;
export declare function obv(close: number[], volume: number[], align?: boolean): number[];
export declare function obv_start(): number;
export declare function ppo(real: number[], options: {
    short_period: number;
    long_period: number;
}, align?: boolean): number[];
export declare function ppo_start(options: {
    short_period: number;
    long_period: number;
}): number;
export declare function psar(high: number[], low: number[], options: {
    acceleration_factor_step: number;
    acceleration_factor_maximum: number;
}, align?: boolean): number[];
export declare function psar_start(options: {
    acceleration_factor_step: number;
    acceleration_factor_maximum: number;
}): number;
export declare function pvi(close: number[], volume: number[], align?: boolean): number[];
export declare function pvi_start(): number;
export declare function qstick(open: number[], close: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function qstick_start(options: {
    period: number;
}): number;
export declare function roc(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function roc_start(options: {
    period: number;
}): number;
export declare function rocr(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function rocr_start(options: {
    period: number;
}): number;
export declare function round(real: number[], align?: boolean): number[];
export declare function round_start(): number;
export declare function rsi(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function rsi_start(options: {
    period: number;
}): number;
export declare function sin(real: number[], align?: boolean): number[];
export declare function sin_start(): number;
export declare function sinh(real: number[], align?: boolean): number[];
export declare function sinh_start(): number;
export declare function sma(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function sma_start(options: {
    period: number;
}): number;
export declare function sqrt(real: number[], align?: boolean): number[];
export declare function sqrt_start(): number;
export declare function stddev(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function stddev_start(options: {
    period: number;
}): number;
export declare function stderr(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function stderr_start(options: {
    period: number;
}): number;
export declare function stoch(high: number[], low: number[], close: number[], options: {
    k_period: number;
    k_slowing_period: number;
    d_period: number;
}, align?: boolean): {
    stoch_k: number[];
    stoch_d: number[];
};
export declare function stoch_start(options: {
    k_period: number;
    k_slowing_period: number;
    d_period: number;
}): number;
export declare function stochrsi(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function stochrsi_start(options: {
    period: number;
}): number;
export declare function sub(real1: number[], real2: number[], align?: boolean): number[];
export declare function sub_start(): number;
export declare function sum(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function sum_start(options: {
    period: number;
}): number;
export declare function tan(real: number[], align?: boolean): number[];
export declare function tan_start(): number;
export declare function tanh(real: number[], align?: boolean): number[];
export declare function tanh_start(): number;
export declare function tema(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function tema_start(options: {
    period: number;
}): number;
export declare function todeg(real: number[], align?: boolean): number[];
export declare function todeg_start(): number;
export declare function torad(real: number[], align?: boolean): number[];
export declare function torad_start(): number;
export declare function tr(high: number[], low: number[], close: number[], align?: boolean): number[];
export declare function tr_start(): number;
export declare function trima(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function trima_start(options: {
    period: number;
}): number;
export declare function trix(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function trix_start(options: {
    period: number;
}): number;
export declare function trunc(real: number[], align?: boolean): number[];
export declare function trunc_start(): number;
export declare function tsf(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function tsf_start(options: {
    period: number;
}): number;
export declare function typprice(high: number[], low: number[], close: number[], align?: boolean): number[];
export declare function typprice_start(): number;
export declare function ultosc(high: number[], low: number[], close: number[], options: {
    short_period: number;
    medium_period: number;
    long_period: number;
}, align?: boolean): number[];
export declare function ultosc_start(options: {
    short_period: number;
    medium_period: number;
    long_period: number;
}): number;
export declare function var_(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function var__start(options: {
    period: number;
}): number;
export declare function vhf(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function vhf_start(options: {
    period: number;
}): number;
export declare function vidya(real: number[], options: {
    short_period: number;
    long_period: number;
    alpha: number;
}, align?: boolean): number[];
export declare function vidya_start(options: {
    short_period: number;
    long_period: number;
    alpha: number;
}): number;
export declare function volatility(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function volatility_start(options: {
    period: number;
}): number;
export declare function vosc(volume: number[], options: {
    short_period: number;
    long_period: number;
}, align?: boolean): number[];
export declare function vosc_start(options: {
    short_period: number;
    long_period: number;
}): number;
export declare function vwma(close: number[], volume: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function vwma_start(options: {
    period: number;
}): number;
export declare function wad(high: number[], low: number[], close: number[], align?: boolean): number[];
export declare function wad_start(): number;
export declare function wcprice(high: number[], low: number[], close: number[], align?: boolean): number[];
export declare function wcprice_start(): number;
export declare function wilders(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function wilders_start(options: {
    period: number;
}): number;
export declare function willr(high: number[], low: number[], close: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function willr_start(options: {
    period: number;
}): number;
export declare function wma(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function wma_start(options: {
    period: number;
}): number;
export declare function zlema(real: number[], options: {
    period: number;
}, align?: boolean): number[];
export declare function zlema_start(options: {
    period: number;
}): number;
//# sourceMappingURL=index.d.ts.map