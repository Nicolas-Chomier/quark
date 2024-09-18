import React from 'react';
export type SimpleSelectProps = {
    onFieldChange: (value: string | undefined) => void;
    value?: string;
    data?: string[];
    placeholder: string;
    name: string;
    height?: 's' | 'm' | 'l';
    isValid?: boolean;
    isError?: boolean;
    isLoading?: boolean;
    isDisable?: boolean;
    variant?: 'theme' | 'accent' | 'simple' | 'outline' | 'fade' | 'ghost' | 'info' | 'success' | 'warning' | 'danger';
    scrollbar?: boolean;
};
export declare const SimpleSelect: React.FC<SimpleSelectProps>;
