import React from 'react';
type TableData = {
    id: number;
    [key: string]: any;
};
type TableAction = {
    label: string;
    index: string;
    render: (row: any) => React.ReactNode;
};
export type TableProps = {
    onRowsSelect: (selectedRows: TableData[]) => void;
    data: TableData[];
    columns: string[];
    actions?: TableAction[];
    rowsPerPage?: number;
    allowSelection?: number;
    isLoading?: boolean;
    error?: boolean;
    hideColumns?: string[];
    width?: number;
    loadingMessage?: string;
    noRowsMessage?: string;
};
export declare const Table: React.FC<TableProps>;
export {};
