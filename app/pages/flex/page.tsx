'use client';
import { Flex } from '@/lib/src/components/flex/Flex';
import styles from './page.module.css';
import { Label } from '@/lib/src/components/label/Label';
import { Input } from '@/lib/src/components/input/Input';
import { IconButton } from '@/lib/src/components/iconButton/IconButton';
import { Bird } from 'lucide-react';

export default function FlexTest() {
	return (
		<div className={styles.container}>
			<div>
				<Label
					htmlFor={'Test2'}
					text={'MON LABEL'}
					textAlign='left'
					fontWeight='bold'
					offsetLeft='9'
				>
					<Flex
						background
						direction='row'
						justify='between'
						borderRadius='l'
						align='end'
						gap={'3xs'}
						pb='3'
						pt='3'
						pr='3'
						pl='3'
					>
						<Input
							type='text'
							name={'Test2'}
							border
							placeholder='Votre email...'
							borderRadius='m'
						/>
						<IconButton variant='outline' size='m' borderRadius='m'>
							<Bird />
						</IconButton>
					</Flex>
				</Label>
			</div>
		</div>
	);
}
