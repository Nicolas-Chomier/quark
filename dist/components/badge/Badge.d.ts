import React from 'react';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement | HTMLButtonElement> {
    color?: 'theme' | 'accent' | 'info' | 'success' | 'warning' | 'danger';
    size?: 'small' | 'medium' | 'large';
    borderRadius?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full';
    clickable?: boolean;
    variant?: 'solid' | 'outline' | 'fade';
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLSpanElement | HTMLButtonElement>) => void;
}
export declare const Badge: React.FC<BadgeProps>;
