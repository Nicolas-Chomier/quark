// pages/button-test.tsx
'use client';
import React from 'react';
import { Spinner } from '../../../src/components/spinner/Spinner';
import styles from './page.module.css';

export default function SpinnerTest() {
	return (
		<div className={styles.container}>
			<div>
				<div>
					<h1>Basic</h1>
					<Spinner size={'s'} />
					<Spinner size={'m'} />
					<Spinner size={'l'} />
				</div>
				<div>
					<h1>Theme</h1>
					<Spinner size={'s'} color='theme' />
					<Spinner size={'m'} color='theme' />
					<Spinner size={'l'} color='theme' />
				</div>
				<div>
					<h1>Accent</h1>
					<Spinner size={'s'} color='accent' />
					<Spinner size={'m'} color='accent' />
					<Spinner size={'l'} color='accent' />
				</div>
			</div>
		</div>
	);
}
