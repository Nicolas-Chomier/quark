import React, { ReactNode } from 'react';
export type DisplayTextProps = {
    children: ReactNode;
    className?: string;
    fontSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
    align?: 'left' | 'center' | 'right';
    justify?: 'left' | 'right';
};
export declare const DisplayText: React.FC<DisplayTextProps>;
