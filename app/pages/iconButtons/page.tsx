// pages/button-test.tsx
'use client';
import React from 'react';
import { Bird } from 'lucide-react';
import styles from './page.module.css';
import { IconButton } from '@/lib/src/components/iconButton/IconButton';

export default function IconButtonTest() {
	return (
		<div className={styles.container}>
			<div>
				<div>
					<h1>Theme</h1>
					<IconButton variant='theme' size='s' borderRadius='m'>
						<Bird />
					</IconButton>
					<IconButton variant='theme' size='m' borderRadius='m'>
						<Bird />
					</IconButton>
					<IconButton variant='theme' size='l' borderRadius='m'>
						<Bird />
					</IconButton>
				</div>
				<div>
					<h1>Accent</h1>
					<IconButton variant='accent' size='s' borderRadius='m'>
						<Bird />
					</IconButton>
					<IconButton variant='accent' size='m' borderRadius='m'>
						<Bird />
					</IconButton>
					<IconButton variant='accent' size='l' borderRadius='m'>
						<Bird />
					</IconButton>
				</div>
				<div>
					<h1>Simple</h1>
					<IconButton variant='simple' size='s' borderRadius='m'>
						<Bird />
					</IconButton>
					<IconButton variant='simple' size='m' borderRadius='m'>
						<Bird />
					</IconButton>
					<IconButton variant='simple' size='l' borderRadius='m'>
						<Bird />
					</IconButton>
				</div>
				<div>
					<h1>outline</h1>
					<IconButton variant='outline' size='s' borderRadius='m'>
						<Bird />
					</IconButton>
					<IconButton variant='outline' size='m' borderRadius='m'>
						<Bird />
					</IconButton>
					<IconButton variant='outline' size='l' borderRadius='m'>
						<Bird />
					</IconButton>
				</div>
				<div>
					<h1>Fade</h1>
					<IconButton variant='fade' size='s' borderRadius='m'>
						<Bird />
					</IconButton>
					<IconButton variant='fade' size='m' borderRadius='m'>
						<Bird />
					</IconButton>
					<IconButton variant='fade' size='l' borderRadius='m'>
						<Bird />
					</IconButton>
				</div>
				<div>
					<h1>Ghost</h1>
					<IconButton variant='ghost' size='s' borderRadius='m'>
						<Bird />
					</IconButton>
					<IconButton variant='ghost' size='m' borderRadius='m'>
						<Bird />
					</IconButton>
					<IconButton variant='ghost' size='l' borderRadius='m'>
						<Bird />
					</IconButton>
				</div>
				<div>
					<h1>Other</h1>
					<IconButton variant='info' size='m' borderRadius='m'>
						<Bird />
					</IconButton>
					<IconButton variant='success' size='m' borderRadius='m'>
						<Bird />
					</IconButton>
					<IconButton variant='warning' size='m' borderRadius='m'>
						<Bird />
					</IconButton>
					<IconButton variant='danger' size='m' borderRadius='m'>
						<Bird />
					</IconButton>
				</div>
			</div>
			<div>
				<div>
					<h1>Custom & disables & loading</h1>

					<IconButton
						disabled
						variant='simple'
						size='m'
						borderRadius='m'
					>
						<Bird />
					</IconButton>
					<IconButton>
						<Bird />
					</IconButton>
					<IconButton className={styles.customButton}>
						<Bird />
					</IconButton>
				</div>
				<div>
					<h1>Loading</h1>
					<IconButton
						variant='simple'
						size='s'
						borderRadius='m'
						loading
					>
						<Bird />
					</IconButton>
					<IconButton
						variant='simple'
						size='m'
						borderRadius='m'
						loading
					>
						<Bird />
					</IconButton>
					<IconButton
						variant='simple'
						size='l'
						borderRadius='m'
						loading
					>
						<Bird />
					</IconButton>
				</div>
			</div>
		</div>
	);
}
