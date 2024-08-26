import React, { ReactNode } from 'react';
import { DisplayIcon } from '../icon/DisplayIcon';
import { DisplayText } from '../text/DisplayText';
import { DisplayUnit } from '../unit/DisplayUnit';
import { DisplayStatistic } from '../stat/DisplayStatistic';
import { DisplayTrend } from '../trend/DisplayTrend';
type DisplayContentProps = {
    children: ReactNode;
    className?: string;
    padding?: 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl';
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
};
export type DisplayContentComponent = React.FC<DisplayContentProps> & {
    Icon: typeof DisplayIcon;
    Text: typeof DisplayText;
    Unit: typeof DisplayUnit;
    Statistic: typeof DisplayStatistic;
    Trend: typeof DisplayTrend;
};
export declare const DisplayContent: DisplayContentComponent;
export declare const useDisplayContentContext: () => DisplayContentProps;
export {};
