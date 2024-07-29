import React, { ReactNode } from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import styles from './Tooltip.module.css';

export type TooltipProps = {
	children?: ReactNode;
	content: ReactNode;
	className?: string;
} & Omit<RadixTooltip.TooltipProps, 'children'> &
	Omit<RadixTooltip.TooltipContentProps, 'children'>;

export const Tooltip: React.FC<TooltipProps> = ({
	children,
	content,
	className,
	...props
}) => {
	return (
		<RadixTooltip.Provider>
			<RadixTooltip.Root {...props}>
				<RadixTooltip.Trigger className={`${styles.tooltipTrigger}`}>
					{children}
				</RadixTooltip.Trigger>
				<RadixTooltip.Portal>
					<RadixTooltip.Content
						className={`${styles.content} ${className ?? ''}`}
						{...props}
					>
						{content}
						<RadixTooltip.Arrow className={styles.tooltipArrow} />
					</RadixTooltip.Content>
				</RadixTooltip.Portal>
			</RadixTooltip.Root>
		</RadixTooltip.Provider>
	);
};
