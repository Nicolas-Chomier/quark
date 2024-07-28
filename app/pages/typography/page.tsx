// pages/button-test.tsx
'use client';
import React from 'react';
import styles from '../page.module.css';
import { Typography } from '@/lib/src/components/typography/Typography';

export default function ButtonTest() {
	return (
		<div className={styles.container}>
			<div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
						maxWidth: '350px',
					}}
				>
					<Typography element='h1' variant='body1' truncate underline>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Ducimus, ab impedit. Odio saepe, quasi ex culpa
					</Typography>
					<Typography element='h2' variant='body1' truncate>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Ducimus, ab impedit. Odio saepe, quasi ex culpa
					</Typography>
					<Typography element='h3' variant='body1' truncate>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Ducimus, ab impedit. Odio saepe, quasi ex culpa
					</Typography>
					<Typography element='h4' variant='body1' truncate>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Ducimus, ab impedit. Odio saepe, quasi ex culpa
					</Typography>
					<Typography element='p' variant='body1'>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Ducimus, ab impedit. Odio saepe, quasi ex culpa
					</Typography>
					<Typography element='span' variant='body2'>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Ducimus, ab impedit. Odio saepe, quasi ex culpa
					</Typography>
					<Typography element='p' variant='subtitle1'>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Ducimus, ab impedit. Odio saepe, quasi ex culpa
					</Typography>
					<Typography element='span' variant='subtitle2'>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Ducimus, ab impedit. Odio saepe, quasi ex culpa
					</Typography>
					<Typography
						element='span'
						color='warning'
						fontWeight='bold'
					>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Ducimus, ab impedit. Odio saepe,
					</Typography>
					<Typography
						element='span'
						color='danger'
						fontWeight='lighter'
					>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Ducimus, ab impedit. Odio saepe,
					</Typography>
					<Typography
						element='span'
						color='info'
						fontWeight='normal'
						space='wide'
					>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Ducimus, ab impedit. Odio saepe,
					</Typography>
					<Typography
						element='span'
						fontWeight='normal'
						space='tight'
						align='justify'
					>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Ducimus, ab impedit. Odio saepe,
					</Typography>
				</div>
				<div>
					<div>
						<Typography
							element='h1'
							align='center'
							color='theme'
							fontWeight='bold'
							variant={'body1'}
						>
							This is a headline
						</Typography>

						<Typography
							element='p'
							variant='body1'
							align='justify'
							color='success'
						>
							This is a paragraph with justified text and
							secondary color.
						</Typography>

						<Typography
							element='span'
							variant='subtitle2'
							color='danger'
						>
							This is an inline text with error color.
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
}
