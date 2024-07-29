import React, { ReactNode } from 'react';
type Offset = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20';
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    htmlFor: string;
    text: string;
    textAlign?: 'left' | 'center' | 'right';
    fontSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
    fontWeight?: 'normal' | 'medium' | 'semibold' | 'bold';
    offsetLeft?: Offset;
    offsetRight?: Offset;
    className?: string;
    children: ReactNode;
}
export declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;
export {};
