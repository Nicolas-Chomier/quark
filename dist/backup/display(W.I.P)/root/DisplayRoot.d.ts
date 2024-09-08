import React, { ReactNode } from 'react';
import { DisplayLabel } from '../label/DisplayLabel';
import { DisplayContent } from '../content/DisplayContent';
import { DisplayList } from '../list/DisplayList';
type DisplayProps = {
    width?: 's' | 'm' | 'l' | 'xl' | '25' | '50' | '75' | '100';
    borderRadius?: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'full';
    style?: 'success' | 'warning' | 'danger' | 'infos' | 'outline' | 'fade' | 'ghost';
    disable?: boolean;
    children: ReactNode;
    className?: string;
};
export type DisplayComponent = React.FC<DisplayProps> & {
    Label: typeof DisplayLabel;
    Content: typeof DisplayContent;
    List: typeof DisplayList;
};
export declare const DisplayRoot: DisplayComponent;
export declare const useDisplayRootContext: () => DisplayProps;
export {};
