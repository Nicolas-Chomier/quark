import React from 'react';
export type DisplayUnitProps = {
    children: string;
    className?: string;
    variant?: 'theme' | 'accent' | 'infos' | 'warning' | 'danger' | 'bold' | 'italic';
    fontSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
};
export declare const DisplayUnit: React.FC<DisplayUnitProps>;
