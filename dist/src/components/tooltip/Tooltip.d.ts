import React, { ReactNode } from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
export type TooltipProps = {
    children?: ReactNode;
    content: ReactNode;
    className?: string;
} & Omit<RadixTooltip.TooltipProps, 'children'> & Omit<RadixTooltip.TooltipContentProps, 'children'>;
export declare const Tooltip: React.FC<TooltipProps>;
