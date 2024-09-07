import React from 'react';
export type SelectProps = {
    onFieldChange: (value: string | undefined) => void;
    value?: string;
    data?: string[];
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
export declare const Select: React.FC<SelectProps>;
