import React from 'react';
export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    width?: 's' | 'm' | 'l' | 'full' | 'auto';
    border?: boolean;
    borderRadius?: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'full';
    fontSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
    standardFontFamily?: boolean;
    className?: string;
}
export declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
