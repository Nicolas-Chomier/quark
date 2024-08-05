import React from 'react';
type TableData = {
    id: number;
    [key: string]: any;
};
export type NewTableProps = {
    data: TableData[];
    rowsPerPage?: number;
    allowSelection?: 'single' | 'multiple';
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
    isLoading?: boolean;
    error?: boolean;
    onRowsSelect: (selectedRows: TableData[]) => void;
};
export declare const NewTable: React.FC<NewTableProps>;
export {};
