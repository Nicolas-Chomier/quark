import React from 'react';
export type DisplayTrendProps = {
    children: number;
    className?: string;
    align?: 'left' | 'center' | 'right';
    justify?: 'left' | 'right';
    trendStatus?: boolean;
    unit?: string;
};
export declare const DisplayTrend: React.FC<DisplayTrendProps>;
