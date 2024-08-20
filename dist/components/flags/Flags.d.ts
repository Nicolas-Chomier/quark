import React from 'react';
export type FlagsProps = {
    onClick?: (language: string) => void;
    languages?: string[];
    column?: boolean;
    variant?: 'theme' | 'accent' | 'simple' | 'outline' | 'fade' | 'ghost' | 'info' | 'success' | 'warning' | 'danger';
    size?: 's' | 'm' | 'l';
    borderRadius?: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'full';
};
export declare const Flags: React.FC<FlagsProps>;
