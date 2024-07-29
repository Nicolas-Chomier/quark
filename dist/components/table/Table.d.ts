import React from 'react';
type GenericObject<T> = {
    [key: string]: T;
};
export interface TableProps {
    data: any;
    allowSelection?: number;
    striped?: boolean;
    hoverable?: boolean;
    size?: string;
    responsive?: boolean;
    className?: string;
    children?: React.ReactNode;
}
export declare const Table: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>>;
export declare const objectHasAtLeastOneKey: (obj: GenericObject<unknown> | undefined | null) => boolean;
export declare const extractObjectKeys: (obj: GenericObject<unknown> | undefined | null) => string[] | undefined;
export declare const getSplitedTableContent: (data: GenericObject<string | number>[] | undefined, rowPerPage?: number) => any;
export declare const buildMultiSelectionResult: (data: GenericObject<string | number>[] | undefined, IDList: number[]) => GenericObject<string | number>[] | undefined;
export {};
