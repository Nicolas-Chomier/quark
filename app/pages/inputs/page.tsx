// pages/button-test.tsx
'use client';
import React from 'react';
import styles from './page.module.css';
import { Label } from '@/lib/src/components/label/Label';
import { Input } from '@/lib/src/components/input/Input';

export default function InputTest() {
	return (
		<div className={styles.container}>
			<div>
				<div>
					<h1>Input</h1>
					<Input
						type='text'
						name={'Test1'}
						border
						placeholder='test1'
						width={'s'}
					/>
					<Input
						type='password'
						name={'Test1'}
						placeholder='test1'
						width={'m'}
					/>
					<Input
						type='email'
						name={'Test1'}
						placeholder='test1'
						width={'l'}
					/>
					<Input
						type='text'
						name={'Test1'}
						placeholder='test1'
						width={'full'}
						border
					/>
				</div>

				<div>
					<h1>Special</h1>
					<Input type='text' name={'spe'} placeholder='spe' />
				</div>
			</div>
			<div>
				<div>
					<h1>Input with label</h1>
					<Label
						htmlFor={'Test1'}
						text={'MON LABEL LOL'}
						textAlign='left'
						fontWeight='bold'
						fontSize='xl'
					>
						<Input
							type='text'
							name={'Test1'}
							border
							placeholder='test1'
						/>
					</Label>
					<Label
						htmlFor={'Test2'}
						text={'MON LABEL LOL'}
						textAlign='center'
						fontWeight='bold'
					>
						<Input
							type='text'
							name={'Test2'}
							border
							placeholder='test1'
						/>
					</Label>
					<Label
						htmlFor={'Test4'}
						text={'MON LABEL LOL'}
						textAlign='right'
					>
						<Input
							type='text'
							name={'Test4'}
							border
							placeholder='test1'
						/>
					</Label>
					<div>
						<Label
							htmlFor={'Test5'}
							className={styles.labelCustom}
							text=''
						>
							Custom test
						</Label>
						<Input
							type='text'
							name={'Test5'}
							border
							placeholder='test1'
						/>
					</div>
					<Label
						htmlFor={'Test7'}
						text=''
						textAlign='center'
						fontWeight='bold'
						fontSize='xl'
					>
						ESSAIE
					</Label>
					<Input
						type='text'
						name={'Test7'}
						border
						placeholder='test1'
					/>
				</div>
			</div>
		</div>
	);
}
