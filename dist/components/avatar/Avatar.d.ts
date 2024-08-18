import React from 'react';
type RankingTable = Record<string, string>;
export type AvatarProps = {
    name: string;
    rank?: string;
    avatarSize?: number;
    side?: 'left' | 'right';
    borderRadius?: 's' | 'm' | 'l';
    customRankingTable?: RankingTable;
    italic?: boolean;
    variant?: 'bots' | 'fun';
};
export declare const Avatar: React.FC<AvatarProps>;
export {};
