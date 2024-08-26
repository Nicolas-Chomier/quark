import React from 'react';
export type DisplayIconProps = {
    className?: string;
    children?: React.ReactNode;
    icon?: 'info' | 'warning' | 'danger';
    size?: number;
};
export declare const DisplayIcon: React.FC<DisplayIconProps>;
