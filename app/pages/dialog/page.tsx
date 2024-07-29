// pages/button-test.tsx
'use client';
import React, { useState } from 'react';
import styles from '../page.module.css';
import { Dialog } from '@/lib/src/components/dialog/Dialog';
import { IconButton } from '@/lib/src/components/iconButton/IconButton';
import { Button } from '@/lib/src/components/button/Button';

export default function DialogTest() {
	const [open, setOpen] = useState(false);

	const handleOpenDialog = (): void => {
		console.log('open dialog');
		setOpen(true);
	};

	const handleCloseDialog = (): void => {
		console.log('open dialog');
		setOpen(false);
	};

	return (
		<div className={styles.container}>
			<div>
				<IconButton onClick={handleOpenDialog}>TEST</IconButton>
				<Dialog isOpen={open} id={'test'}>
					<Button onClick={handleCloseDialog}>CLOSE</Button>
				</Dialog>
			</div>
		</div>
	);
}
