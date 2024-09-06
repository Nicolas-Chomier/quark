import React from 'react';
export type TableDummyProps = {
    message?: string;
    width?: '3xs' | '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl';
    spinner?: boolean;
};
export declare const TableDummy: React.FC<TableDummyProps>;
