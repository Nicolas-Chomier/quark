// pages/button-test.tsx
'use client';
import React from 'react';
import styles from '../page.module.css';
import { Tooltip } from '@/lib/src/components/tooltip/Tooltip';

export default function TooltipTest() {
	return (
		<div className={styles.container}>
			<div>
				<div style={{ width: '450px' }}>
					<h1>Tooltip</h1>
					<Tooltip
						content={'myContent'}
						side={'top'}
						delayDuration={0}
					>
						<span
							style={{
								height: '60px',
								width: '60px',
								backgroundColor: 'red',
							}}
						></span>
					</Tooltip>
				</div>
			</div>
		</div>
	);
}
