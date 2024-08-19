import React from 'react';
type RankingTable = Record<string, string>;
export type AvatarProps = {
    name: string;
    rank?: string;
    avatarSize?: number;
    side?: 'left' | 'right';
    borderRadius?: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'full';
    customRankingTable?: RankingTable;
    italic?: boolean;
    variant?: 'bots' | 'fun';
};
export declare const Avatar: React.FC<AvatarProps>;
export {};
