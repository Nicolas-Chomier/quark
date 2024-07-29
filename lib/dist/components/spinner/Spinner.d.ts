import React from 'react';
export interface SpinnerProps {
    size?: 's' | 'm' | 'l';
    color?: 'theme' | 'accent' | 'basic';
}
export declare const Spinner: React.FC<SpinnerProps>;
