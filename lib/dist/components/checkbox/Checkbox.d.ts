import React, { ReactNode } from 'react';
export type CheckboxProps = {
    handleChange?: (state: boolean | 'indeterminate') => void;
    name: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    size?: 's' | 'm' | 'l';
    borderRadius?: 's' | 'm' | 'l' | 'full';
    color?: 'theme' | 'accent' | 'standard' | 'fade';
    variant?: 'outline' | 'solid';
    className?: string;
    children?: ReactNode;
};
export declare const Checkbox: React.FC<CheckboxProps>;
