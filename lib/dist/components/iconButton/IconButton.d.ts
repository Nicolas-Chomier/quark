import React from 'react';
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    loading?: boolean;
    variant?: 'theme' | 'accent' | 'simple' | 'outline' | 'fade' | 'ghost' | 'info' | 'success' | 'warning' | 'danger';
    size?: 's' | 'm' | 'l';
    borderRadius?: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'full';
}
export declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
