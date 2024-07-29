import React, { ReactNode } from 'react';
export interface DialogProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
    id: string;
    isOpen?: boolean;
    children?: ReactNode;
    className?: string;
}
export declare const Dialog: React.ForwardRefExoticComponent<DialogProps & React.RefAttributes<HTMLDialogElement>>;
