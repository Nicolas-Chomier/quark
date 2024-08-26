import React, { useCallback } from 'react';
import { useDisplayRootContext } from '../root/DisplayRoot';
import styles from './DisplayTrend.module.css';

export type DisplayTrendProps = {
	children: number;
	className?: string;
	align?: 'left' | 'center' | 'right';
	justify?: 'left' | 'right';
	trendStatus?: boolean;
	unit?: string;
};

export const DisplayTrend: React.FC<DisplayTrendProps> = ({
	children,
	className,
	justify,
	align,
	trendStatus,
	unit = '%',
}) => {
	const { disable } = useDisplayRootContext();

	const newTrend = useCallback(() => {
		if (trendStatus === true) {
			return (
				<span>
					{`${children}${unit}`}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
					>
						<g
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
						>
							<path d='m22 7l-8.5 8.5l-5-5L2 17' />
							<path d='M16 7h6v6' />
						</g>
					</svg>
				</span>
			);
		} else if (trendStatus === false) {
			return (
				<span>
					{`${children}${unit}`}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
					>
						<g
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='1.8'
						>
							<path d='m22 17l-8.5-8.5l-5 5L2 7' />
							<path d='M16 17h6v-6' />
						</g>
					</svg>
				</span>
			);
		} else {
			return (
				<span>
					{`${children}${unit}`}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
					>
						<path
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='1.8'
							d='M5 12h14'
						/>
					</svg>
				</span>
			);
		}
	}, [children, trendStatus, unit]);

	if (!children) return null;
	return (
		<div
			className={`${className ?? styles.trend}`}
			data-disabled={disable}
			data-justify={justify}
			data-align={align}
			data-trend-status={trendStatus}
		>
			{newTrend()}
		</div>
	);
};
