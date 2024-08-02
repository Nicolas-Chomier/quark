import React from 'react';
type FallBackProps = {
    loading?: boolean;
    message?: string;
    loadingMessage?: string;
    width?: 's' | 'm' | 'l' | 'full';
    borderRadius?: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'full';
};
export declare const FallBack: React.FC<FallBackProps>;
export {};
