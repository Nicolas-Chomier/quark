// pages/button-test.tsx
'use client';
import React from 'react';
import styles from '../page.module.css';
import { TextArea } from '@/lib/src/components/textarea/TextArea';

export default function TextAreaTest() {
	return (
		<div className={styles.container}>
			<div>
				<div style={{ width: '450px' }}>
					<h1>TextArea</h1>
					<TextArea
						name='textarea-name'
						width='s'
						placeholder='TextArea placeholder'
						rows={5}
						standardFontFamily
						borderRadius='xxl'
						fontSize='xs'
					/>
					<TextArea
						name='textarea-name'
						width='m'
						placeholder='TextArea placeholder'
						rows={5}
						standardFontFamily
						borderRadius='xxl'
						fontSize='xs'
					/>
					<TextArea
						name='textarea-name'
						width='l'
						placeholder='TextArea placeholder'
						rows={5}
						standardFontFamily
						borderRadius='xxl'
						fontSize='xs'
					/>
					<TextArea
						name='textarea-name'
						width='full'
						placeholder='TextArea placeholder'
						rows={5}
						standardFontFamily
						borderRadius='xxl'
						fontSize='xs'
						border
					/>
					<TextArea
						name='textarea-name'
						width='auto'
						placeholder='TextArea placeholder'
						rows={5}
						standardFontFamily
						borderRadius='xxl'
						fontSize='xs'
						border
					/>
				</div>
				<div style={{ width: '450px' }}>
					<h1>TextArea</h1>
					<TextArea
						name='textarea-name'
						width='s'
						placeholder='TextArea placeholder'
						rows={5}
						standardFontFamily
						borderRadius='xxl'
						fontSize='xs'
					/>
					<TextArea
						name='textarea-name'
						width='m'
						placeholder='TextArea placeholder'
						rows={5}
						standardFontFamily
						borderRadius='xxl'
						fontSize='s'
						disabled
					/>
					<TextArea
						name='textarea-name'
						width='l'
						placeholder='TextArea placeholder'
						rows={5}
						standardFontFamily
						borderRadius='xxl'
						fontSize='m'
						disabled
					/>
					<TextArea
						name='textarea-name'
						width='full'
						placeholder='TextArea placeholder'
						rows={5}
						standardFontFamily
						borderRadius='xxl'
						fontSize='l'
						border
					/>
					<TextArea
						name='textarea-name'
						width='auto'
						placeholder='TextArea placeholder'
						rows={5}
						standardFontFamily
						borderRadius='xxl'
						fontSize='xl'
						border
					/>
				</div>
			</div>
		</div>
	);
}
