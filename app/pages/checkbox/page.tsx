// pages/button-test.tsx
'use client';
import React from 'react';
import styles from '../page.module.css';
import { Check } from 'lucide-react';
import { Checkbox } from '@/lib/src/components/checkbox/Checkbox';

export default function CheckboxTest() {
	return (
		<div className={styles.container}>
			<div>
				<div>
					<h1>outline S</h1>
					<Checkbox
						name='checkbox1'
						defaultChecked={true}
						size='s'
						color='theme'
						borderRadius='s'
						variant='outline'
					>
						<Check size={18} />
					</Checkbox>
					<br />
					<Checkbox
						name='checkbox2'
						defaultChecked={true}
						size='s'
						color='accent'
						borderRadius='m'
						variant='outline'
					>
						<Check size={18} />
					</Checkbox>
					<br />
					<Checkbox
						name='checkbox3'
						defaultChecked={true}
						size='s'
						color='standard'
						borderRadius='l'
						variant='outline'
					>
						<Check size={18} />
					</Checkbox>
					<br />
					<Checkbox
						name='checkbox3'
						defaultChecked={true}
						size='s'
						color='fade'
						borderRadius='l'
						variant='outline'
					>
						<Check size={18} />
					</Checkbox>
				</div>
				<div>
					<h1> outline M</h1>
					<Checkbox
						name='checkbox1'
						defaultChecked={true}
						size='m'
						color='theme'
						borderRadius='s'
						variant='outline'
					>
						<Check size={18} />
					</Checkbox>
					<br />
					<Checkbox
						name='checkbox2'
						defaultChecked={true}
						size='m'
						color='accent'
						borderRadius='m'
						variant='outline'
					>
						<Check size={18} />
					</Checkbox>
					<br />
					<Checkbox
						name='checkbox3'
						defaultChecked={true}
						size='m'
						color='standard'
						borderRadius='l'
						variant='outline'
					>
						<Check size={18} />
					</Checkbox>
					<br />
					<Checkbox
						name='checkbox3'
						defaultChecked={true}
						size='m'
						color='fade'
						borderRadius='l'
						variant='outline'
					>
						<Check size={18} />
					</Checkbox>
				</div>
				<div>
					<h1>outline L</h1>
					<Checkbox
						name='checkbox1'
						defaultChecked={true}
						size='l'
						color='theme'
						borderRadius='s'
						variant='outline'
					>
						<Check size={18} />
					</Checkbox>
					<br />
					<Checkbox
						name='checkbox2'
						defaultChecked={true}
						size='l'
						color='accent'
						borderRadius='m'
						variant='outline'
					>
						<Check size={18} />
					</Checkbox>
					<br />
					<Checkbox
						name='checkbox3'
						defaultChecked={true}
						size='l'
						color='standard'
						borderRadius='l'
						variant='outline'
					>
						<Check size={18} />
					</Checkbox>
					<br />
					<Checkbox
						name='checkbox3'
						defaultChecked={true}
						size='l'
						color='fade'
						borderRadius='l'
						variant='outline'
					>
						<Check size={18} />
					</Checkbox>
				</div>
			</div>
			<div>
				<div>
					<h1>Solid S</h1>
					<Checkbox
						name='checkbox1'
						defaultChecked={true}
						size='s'
						color='theme'
						borderRadius='s'
						variant='solid'
					>
						<Check size={18} />
					</Checkbox>
					<br />
					<Checkbox
						name='checkbox2'
						defaultChecked={true}
						size='s'
						color='accent'
						borderRadius='m'
						variant='solid'
					>
						<Check size={18} />
					</Checkbox>
					<br />
					<Checkbox
						name='checkbox3'
						defaultChecked={true}
						size='s'
						color='standard'
						borderRadius='l'
						variant='solid'
					>
						<Check size={18} />
					</Checkbox>
					<br />
					<Checkbox
						name='checkbox3'
						defaultChecked={true}
						size='s'
						color='fade'
						borderRadius='l'
						variant='solid'
					>
						<Check size={18} />
					</Checkbox>
				</div>
				<div>
					<h1>Solid M</h1>
					<Checkbox
						name='checkbox1'
						defaultChecked={true}
						size='m'
						color='theme'
						borderRadius='s'
						variant='solid'
					>
						<Check size={18} />
					</Checkbox>
					<br />
					<Checkbox
						name='checkbox2'
						defaultChecked={true}
						size='m'
						color='accent'
						borderRadius='m'
						variant='solid'
					>
						<Check size={18} />
					</Checkbox>
					<br />
					<Checkbox
						name='checkbox3'
						defaultChecked={true}
						size='m'
						color='standard'
						borderRadius='l'
						variant='solid'
					>
						<Check size={18} />
					</Checkbox>
					<br />
					<Checkbox
						name='checkbox3'
						defaultChecked={true}
						size='m'
						color='fade'
						borderRadius='l'
						variant='solid'
					>
						<Check size={18} />
					</Checkbox>
				</div>
				<div>
					<h1>Solid L</h1>
					<Checkbox
						name='checkbox1'
						defaultChecked={true}
						size='l'
						color='theme'
						borderRadius='s'
						variant='solid'
					>
						<Check size={18} />
					</Checkbox>
					<br />
					<Checkbox
						name='checkbox2'
						defaultChecked={true}
						size='l'
						color='accent'
						borderRadius='m'
						variant='solid'
					>
						<Check size={18} />
					</Checkbox>
					<br />
					<Checkbox
						name='checkbox3'
						defaultChecked={true}
						size='l'
						color='standard'
						borderRadius='l'
						variant='solid'
					>
						<Check size={18} />
					</Checkbox>
					<br />
					<Checkbox
						name='checkbox3'
						defaultChecked={true}
						size='l'
						color='fade'
						borderRadius='l'
						variant='solid'
					>
						<Check size={18} />
					</Checkbox>
				</div>
			</div>
			<div>
				<div>
					<h1>Disabled</h1>
					<Checkbox
						name='checkbox1'
						defaultChecked={true}
						size='s'
						color='theme'
						borderRadius='s'
						variant='solid'
						disabled
					>
						<Check size={18} />
					</Checkbox>
					<br />
					<Checkbox
						name='checkbox1'
						defaultChecked={true}
						size='s'
						color='theme'
						borderRadius='s'
						variant='outline'
						disabled
					>
						<Check size={18} />
					</Checkbox>
				</div>
			</div>
		</div>
	);
}
