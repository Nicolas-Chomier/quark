import React from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: 'text' | 'password' | 'email' | 'number';
    name: string;
    width?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'full';
    height?: 's' | 'm' | 'l';
    border?: boolean;
    borderRadius?: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'full';
    className?: string;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
