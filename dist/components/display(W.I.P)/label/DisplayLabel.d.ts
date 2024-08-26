import React from 'react';
type Offset = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20';
export type DisplayLabelProps = {
    children: React.ReactNode;
    className?: string;
    align?: 'left' | 'center' | 'right';
    fontSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
    fontWeight?: 'normal' | 'medium' | 'semibold' | 'bold';
    offsetLeft?: Offset;
    offsetRight?: Offset;
    color?: 'theme' | 'accent' | 'success' | 'warning' | 'danger' | 'info' | 'transparent';
};
export declare const DisplayLabel: React.FC<DisplayLabelProps>;
export {};
