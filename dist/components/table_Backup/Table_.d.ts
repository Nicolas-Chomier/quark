import React from 'react';
type TableData_ = {
    id: number;
    [key: string]: any;
};
export type TableProps_ = {
    data: TableData_[];
    loadingMessage?: string;
    noRowsMessage?: string;
    rowsPerPage?: number;
    allowSelection?: 'single' | 'multiple';
    actions?: any;
    actionLabel?: string;
    width?: '3xs' | '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl';
    isLoading?: boolean;
    error?: boolean;
    hideColumns?: string[];
    onRowsSelect: (selectedRows: TableData_[]) => void;
};
export declare const Table_: React.FC<TableProps_>;
export {};
