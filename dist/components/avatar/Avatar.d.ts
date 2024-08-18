import React from 'react';
type RankingTable = Record<string, string>;
export type TAvatarProps = {
    name: string;
    rank?: string;
    avatarSize?: number;
    side?: 'left' | 'right';
    borderRadius?: 's' | 'm' | 'l';
    customRankingTable?: RankingTable;
    italic?: boolean;
};
export declare const Avatar: React.FC<TAvatarProps>;
export {};
