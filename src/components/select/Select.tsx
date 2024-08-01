import React, {
	useState,
	useEffect,
	useRef,
	useMemo,
	useCallback,
} from 'react';
import { Search, Trash2, X } from 'lucide-react';
import { Label } from '../label/Label';
import { Input } from '../input/Input';
import { IconButton } from '../iconButton/IconButton';
import { Flex } from '../flex/Flex';
import { useClickOutside } from '../../hooks/useClickOutside';
import styles from './Select.module.css';

export type SelectProps = {
	onFieldChange: (value: string | undefined) => void;
	value?: string;
	data?: string[];
	placeholder: string;
	label: string;
	name: string;
	isValid?: boolean;
	isError?: boolean;
	isLoading?: boolean;
	isDisable?: boolean;
	variant?:
		| 'theme'
		| 'accent'
		| 'simple'
		| 'outline'
		| 'fade'
		| 'ghost'
		| 'info'
		| 'success'
		| 'warning'
		| 'danger';
	scrollbar?: boolean;
};

export const Select: React.FC<SelectProps> = ({
	onFieldChange,
	value,
	data,
	label,
	placeholder = 'My text here!',
	name,
	isError,
	isLoading,
	isValid,
	isDisable,
	variant,
	scrollbar,
}) => {
	const [inputValue, setInputValue] = useState('');
	const [open, setOpen] = useState(false);
	const [newVariant, setNewVariant] = useState(variant);
	const clickRef = useRef(null);

	// Render appropriate icon based on component state
	const renderContent = () => {
		if (isDisable) return null;
		if (isError) return <X />;
		if (inputValue && !isValid) return <Trash2 />;
		return <Search />;
	};

	// Close dropdown when clicking outside
	useClickOutside(clickRef, () => setOpen(false));

	// Remove duplicates from data
	const cleanData = useMemo(
		() => (data ? Array.from(new Set(data)) : []),
		[data],
	);

	// Filter data based on input value
	const filteredData = useMemo(
		() =>
			cleanData.filter((item) =>
				item.toLowerCase().includes(inputValue.toLowerCase()),
			),
		[inputValue, cleanData],
	);

	// Clear input and close dropdown
	const handleDelete = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.stopPropagation();
			if (inputValue) {
				setInputValue('');
				onFieldChange(undefined);
			}
			setOpen(false);
		},
		[inputValue, onFieldChange],
	);

	// Select item from dropdown
	const handleSelect = useCallback(
		(item: string) => {
			setInputValue(item);
			onFieldChange(item);
			setOpen(false);
		},
		[onFieldChange],
	);

	// Handle input change
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	// Update variant based on component state
	useEffect(() => {
		setNewVariant(isError ? 'danger' : isValid ? 'success' : variant);
	}, [isError, isValid, variant]);

	// Sync input value with external value prop
	useEffect(() => {
		setInputValue(value || '');
	}, [value]);

	// Disable component and clear values
	useEffect(() => {
		if (isDisable) {
			setInputValue('');
			onFieldChange('');
			setOpen(false);
		}
	}, [isDisable, onFieldChange]);
	return (
		<div className={styles.container} ref={clickRef}>
			<Label
				htmlFor={name}
				text={label}
				textAlign='left'
				offsetLeft='4'
				fontWeight='normal'
				fontSize='l'
			>
				<div className={styles.field}>
					<Input
						type={'text'}
						onChange={handleInputChange}
						onClick={() => setOpen(!open)}
						name={name}
						value={inputValue}
						placeholder={placeholder}
						disabled={isDisable}
						width='s'
						borderRadius='m'
					/>

					<IconButton
						onClick={(e) => handleDelete(e)}
						type={'button'}
						variant={newVariant}
						size='m'
						borderRadius='m'
						disabled={isDisable}
						loading={isLoading}
					>
						{renderContent()}
					</IconButton>
				</div>
			</Label>

			{data && (
				<div
					data-scrollbar={scrollbar}
					className={`${styles.panel} ${
						open ? styles.panelOpen : ''
					}`}
				>
					<Flex
						gap={'3xs'}
						direction='column'
						align='center'
						justify='center'
					>
						{filteredData.map((str: string) => {
							return (
								<button
									onClick={() => handleSelect(str)}
									type={'button'}
									key={`Item-${str}`}
									className={styles.customButton}
								>
									{str.toLocaleLowerCase()}
								</button>
							);
						})}
					</Flex>
				</div>
			)}
		</div>
	);
};
