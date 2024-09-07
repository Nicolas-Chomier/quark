import React, { ReactNode } from 'react';
export interface AlertProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClose?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    field?: string;
    message?: string;
    variant?: 'success' | 'warning' | 'danger' | 'info';
    shadow?: boolean;
    borderRadius?: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'full';
    children: ReactNode;
}
export declare const Alert: React.FC<AlertProps>;
