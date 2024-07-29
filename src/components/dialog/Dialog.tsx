import React, { useRef, useEffect, ReactNode } from 'react';
import styles from './Dialog.module.css';

export interface DialogProps
	extends React.DialogHTMLAttributes<HTMLDialogElement> {
	id: string;
	isOpen?: boolean;
	children?: ReactNode;
	className?: string;
}

export const Dialog = React.forwardRef<HTMLDialogElement, DialogProps>(
	({ id, isOpen, className, children, ...props }, ref) => {
		const dialogRef = useRef<HTMLDialogElement>(null);

		useEffect(() => {
			const dialogElement = ref
				? (ref as React.RefObject<HTMLDialogElement>).current
				: dialogRef.current;

			if (isOpen) {
				dialogElement?.showModal();
			} else {
				dialogElement?.close();
			}
		}, [isOpen, ref]);

		return (
			<dialog
				id={`u-dialog-${id}`}
				ref={ref || dialogRef}
				className={`${styles.dialog} ${className || ''}`}
				{...props}
			>
				{children}
			</dialog>
		);
	},
);

Dialog.displayName = 'Dialog';
