import React, { ReactNode } from 'react';
import { DisplayIcon } from '../icon/DisplayIcon';
type DisplayListProps = {
    data?: Record<string, string | number | boolean>;
    children?: ReactNode;
    className?: string;
    fontSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
    direction?: 'column' | 'column-reverse';
};
export type DisplayListComponent = React.FC<DisplayListProps> & {
    Icon: typeof DisplayIcon;
};
export declare const DisplayList: DisplayListComponent;
export declare const useDisplayListContext: () => DisplayListProps;
export {};
