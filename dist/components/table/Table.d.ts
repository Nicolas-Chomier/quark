import React from 'react';
interface TableData {
    id: number;
    [key: string]: any;
}
export interface TableProps {
    data: TableData[];
    rowsPerPage?: number;
    allowSelection?: 'single' | 'multiple' | 'none';
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
    isLoading?: boolean;
    error?: boolean;
    onRowsSelect: (selectedRows: TableData[]) => void;
}
export declare const Table: React.FC<TableProps>;
export {};
