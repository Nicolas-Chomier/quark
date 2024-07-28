import React from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: 'text' | 'password' | 'email' | 'number';
    name: string;
    width?: 's' | 'm' | 'l' | 'full';
    border?: boolean;
    borderRadius?: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'full';
    className?: string;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
