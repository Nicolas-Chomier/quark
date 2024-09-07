import React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    text?: string;
    loading?: boolean;
    variant?: 'theme' | 'accent' | 'simple' | 'outline' | 'fade' | 'ghost' | 'info' | 'success' | 'warning' | 'danger';
    width?: 's' | 'm' | 'l' | 'full';
    size?: 's' | 'm' | 'l' | 'xl';
    borderRadius?: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'full';
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
