/// <reference types="react" />
import { NumberFormatter, TimeFormatter } from '@superset-ui/core';
declare type TimeSeriesDatum = {
    x: number;
    y: number | null;
};
export declare function renderTooltipFactory(formatDate?: TimeFormatter, formatValue?: NumberFormatter): ({ datum: { x, y } }: {
    datum: TimeSeriesDatum;
}) => JSX.Element;
declare type BigNumberVisProps = {
    className?: string;
    width: number;
    height: number;
    bigNumber?: number | null;
    bigNumberFallback?: TimeSeriesDatum;
    formatNumber: NumberFormatter;
    formatTime: TimeFormatter;
    fromDatetime?: number;
    toDatetime?: number;
    headerFontSize: number;
    subheader: string;
    subheaderFontSize: number;
    showTrendLine?: boolean;
    startYAxisAtZero?: boolean;
    timeRangeFixed?: boolean;
    trendLineData?: TimeSeriesDatum[];
    mainColor: string;
};
declare const _default: import("@emotion/styled-base").StyledComponent<Pick<BigNumberVisProps, "height" | "width" | "bigNumber" | "bigNumberFallback" | "fromDatetime" | "toDatetime" | "trendLineData"> & Partial<Pick<BigNumberVisProps, "className" | "headerFontSize" | "showTrendLine" | "startYAxisAtZero" | "subheader" | "subheaderFontSize" | "timeRangeFixed" | "formatNumber" | "formatTime" | "mainColor">> & Partial<Pick<{
    className: string;
    formatNumber: (num: number) => string;
    formatTime: import("@superset-ui/core").TimeFormatFunction;
    headerFontSize: number;
    mainColor: string;
    showTrendLine: boolean;
    startYAxisAtZero: boolean;
    subheader: string;
    subheaderFontSize: number;
    timeRangeFixed: boolean;
}, never>>, Pick<Pick<BigNumberVisProps, "height" | "width" | "bigNumber" | "bigNumberFallback" | "fromDatetime" | "toDatetime" | "trendLineData"> & Partial<Pick<BigNumberVisProps, "className" | "headerFontSize" | "showTrendLine" | "startYAxisAtZero" | "subheader" | "subheaderFontSize" | "timeRangeFixed" | "formatNumber" | "formatTime" | "mainColor">> & Partial<Pick<{
    className: string;
    formatNumber: (num: number) => string;
    formatTime: import("@superset-ui/core").TimeFormatFunction;
    headerFontSize: number;
    mainColor: string;
    showTrendLine: boolean;
    startYAxisAtZero: boolean;
    subheader: string;
    subheaderFontSize: number;
    timeRangeFixed: boolean;
}, never>>, "height" | "width" | "className" | "headerFontSize" | "showTrendLine" | "startYAxisAtZero" | "subheader" | "subheaderFontSize" | "timeRangeFixed" | "bigNumber" | "bigNumberFallback" | "formatNumber" | "formatTime" | "fromDatetime" | "toDatetime" | "trendLineData" | "mainColor">, {
    borderRadius: number;
    colors: {
        primary: {
            base: string;
            dark1: string;
            dark2: string;
            light1: string;
            light2: string;
            light3: string;
            light4: string;
            light5: string;
        };
        secondary: {
            base: string;
            dark1: string;
            dark2: string;
            dark3: string;
            light1: string;
            light2: string;
            light3: string;
            light4: string;
            light5: string;
        };
        grayscale: {
            base: string;
            dark1: string;
            dark2: string;
            light1: string;
            light2: string;
            light3: string;
            light4: string;
            light5: string;
        };
        error: {
            base: string;
            dark1: string;
            dark2: string;
            light1: string;
            light2: string;
        };
        warning: {
            base: string;
            dark1: string;
            dark2: string;
            light1: string;
            light2: string;
        };
        alert: {
            base: string;
            dark1: string;
            dark2: string;
            light1: string;
            light2: string;
        };
        success: {
            base: string;
            dark1: string;
            dark2: string;
            light1: string;
            light2: string;
        };
        info: {
            base: string;
            dark1: string;
            dark2: string;
            light1: string;
            light2: string;
        };
    };
    opacity: {
        light: string;
        mediumLight: string;
        mediumHeavy: string;
        heavy: string;
    };
    typography: {
        families: {
            sansSerif: string;
            serif: string;
            monospace: string;
        };
        weights: {
            light: number;
            normal: number;
            bold: number;
        };
        sizes: {
            xxs: number;
            xs: number;
            s: number;
            m: number;
            l: number;
            xl: number;
            xxl: number;
        };
    };
    zIndex: {
        aboveDashboardCharts: number;
        dropdown: number;
        max: number;
    };
    transitionTiming: number;
    gridUnit: number;
}>;
export default _default;
//# sourceMappingURL=BigNumber.d.ts.map