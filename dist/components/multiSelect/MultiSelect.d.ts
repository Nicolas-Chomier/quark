import React from 'react';
type MultiSelectProps = {
    onFieldChange: (result: string[] | undefined) => void;
    data: string[];
    placeholder: string;
    label: string;
    name: string;
    isValid?: boolean;
    isError?: boolean;
    isLoading?: boolean;
    isDisable?: boolean;
    variant?: 'theme' | 'accent' | 'simple' | 'outline' | 'fade' | 'ghost' | 'info' | 'success' | 'warning' | 'danger';
    scrollbar?: boolean;
};
export declare const MultiSelect: React.FC<MultiSelectProps>;
export {};
