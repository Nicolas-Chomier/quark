// pages/button-test.tsx
'use client';
import React from 'react';
import styles from '../page.module.css';
import { Button } from '@/lib/src/components/button/Button';
import { Bird } from 'lucide-react';

export default function ButtonTest() {
	return (
		<div className={styles.container}>
			<div>
				<div>
					<h1>theme</h1>
					<Button
						variant='theme'
						width='s'
						borderRadius='m'
						text='NEXT'
					>
						<Bird />
					</Button>
					<Button
						variant='theme'
						width='m'
						borderRadius='m'
						text='COMMUNICATE'
					>
						<Bird />
					</Button>
					<Button
						variant='theme'
						width='l'
						borderRadius='m'
						text='FROM PARIS TO AAAA'
					>
						<Bird />
					</Button>
					<Button
						variant='theme'
						width='full'
						borderRadius='m'
						text='Test Button'
					>
						<Bird />
					</Button>
				</div>
				<div>
					<h1>Simple No icon</h1>
					<Button
						variant='accent'
						width='s'
						borderRadius='m'
						text='NEXT'
					></Button>
					<Button
						variant='accent'
						width='m'
						borderRadius='m'
						text='COMMUNICATE'
					></Button>
					<Button
						variant='accent'
						width='l'
						borderRadius='m'
						text='FROM PARIS TO AAAA'
					></Button>
					<Button
						variant='accent'
						width='full'
						borderRadius='m'
						text='Test Button'
					></Button>
				</div>
				<div>
					<h1>Simple loading</h1>
					<Button
						variant='simple'
						width='s'
						borderRadius='m'
						text='NEXT'
						loading
					>
						<Bird />
					</Button>
					<Button
						variant='simple'
						width='m'
						borderRadius='m'
						text='COMMUNICATE'
						loading
					>
						<Bird />
					</Button>
					<Button
						variant='simple'
						width='l'
						borderRadius='m'
						text='FROM PARIS TO AAAA'
						loading
					></Button>
					<Button
						variant='simple'
						width='full'
						borderRadius='m'
						text='Test Button'
						loading
					></Button>
				</div>
			</div>
			<div>
				<div>
					<h1>Different styles</h1>
					<Button
						variant='outline'
						width='s'
						borderRadius='s'
						text='Test Button'
					></Button>
					<Button
						variant='fade'
						width='s'
						borderRadius='s'
						text='Test Button'
					></Button>
					<Button
						variant='ghost'
						width='s'
						borderRadius='s'
						text='Test Button'
					></Button>
					<Button
						variant='info'
						width='s'
						borderRadius='s'
						text='Test Button'
					></Button>
					<Button
						variant='success'
						width='s'
						borderRadius='s'
						text='Test Button'
					></Button>
					<Button
						variant='warning'
						width='s'
						borderRadius='s'
						text='Test Button'
					></Button>
					<Button
						variant='danger'
						width='s'
						borderRadius='s'
						text='Test Button'
					></Button>
				</div>
				<div>
					<h1>No props & disabled</h1>
					<Button text='no props'>
						<Bird />
					</Button>
					<Button text='no props'></Button>
					<Button
						variant='simple'
						width='s'
						borderRadius='s'
						text='Test Button'
						disabled
					>
						<Bird />
					</Button>
					<Button
						variant='simple'
						width='s'
						borderRadius='s'
						text='Test Button'
						disabled
					></Button>
				</div>
				<div>
					<h1>Custom css</h1>
					<Button className={styles.customButton}>
						<Bird />
					</Button>
					<Button
						className={styles.customButton}
						text='Test Button'
					></Button>
				</div>
			</div>
		</div>
	);
}
