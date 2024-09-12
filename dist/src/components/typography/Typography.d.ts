import React from 'react';
type TypographyElement = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span';
type TypographySize = 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
type TypographyVariant = 'body1' | 'body2' | 'subtitle1' | 'subtitle2';
export interface TypographyProps {
    element: TypographyElement;
    variant?: TypographyVariant;
    size?: TypographySize;
    blink?: boolean;
    fontWeight?: 'lighter' | 'normal' | 'medium' | 'semibold' | 'bold';
    truncate?: boolean;
    gutter?: boolean;
    capitalyse?: boolean;
    uppercase?: boolean;
    spaceWord?: boolean;
    align?: 'left' | 'center' | 'right' | 'justify';
    color?: 'theme' | 'accent' | 'info' | 'success' | 'warning' | 'danger';
    space?: 'tight' | 'wide';
    underline?: boolean;
    className?: string;
    children: React.ReactNode;
}
export declare const Typography: React.ForwardRefExoticComponent<TypographyProps & React.RefAttributes<HTMLElement>>;
export {};
