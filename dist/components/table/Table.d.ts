import React from 'react';
type TableData = {
    id: number;
    [key: string]: any;
};
export type TableProps = {
    data: TableData[];
    rowsPerPage?: number;
    allowSelection?: 'single' | 'multiple';
    width?: 'xs' | 's' | 'm' | 'l' | 'xl';
    isLoading?: boolean;
    error?: boolean;
    onRowsSelect: (selectedRows: TableData[]) => void;
};
export declare const Table: React.FC<TableProps>;
export {};
