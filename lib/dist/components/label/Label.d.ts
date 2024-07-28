import React, { ReactNode } from 'react';
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    htmlFor: string;
    text: string;
    textAlign?: 'left' | 'center' | 'right';
    fontSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
    fontWeight?: 'normal' | 'medium' | 'semibold' | 'bold';
    className?: string;
    children: ReactNode;
}
export declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;
