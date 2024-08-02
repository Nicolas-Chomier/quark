import React, {
	useState,
	useEffect,
	useRef,
	useMemo,
	useCallback,
} from 'react';
import { Search, Trash2, X } from 'lucide-react';
import styles from './MultiSelect.module.css';
import { useClickOutside } from '../../hooks/useClickOutside';
import { Label } from '../label/Label';
import { Input } from '../input/Input';
import { IconButton } from '../iconButton/IconButton';
import { Flex } from '../flex/Flex';
import { Badge } from '../badge/Badge';

type MultiSelectProps = {
	onFieldChange: (result: string[] | undefined) => void;
	data: string[];
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

export const MultiSelect: React.FC<MultiSelectProps> = ({
	onFieldChange,
	data,
	label,
	placeholder,
	name,
	isError,
	isLoading,
	isValid,
	isDisable,
	variant,
	scrollbar,
}) => {
	const [newVariant, setNewVariant] = useState(variant);
	const [inputValue, setInputValue] = useState('');
	const [open, setOpen] = useState(false);
	const [itemList, setItemList] = useState<string[]>([]);
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

	// Dynamic placeholder based on itemList content
	const dynamicPlaceholder = useMemo(() => {
		if (itemList.length === 0) return undefined;
		if (itemList.length === 1) return `${itemList[0]}`;
		return `${itemList.length} éléments.`;
	}, [itemList]);

	// Handle input change
	const handleInputChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = e.target.value;
			setInputValue(newValue);
		},
		[],
	);

	// Clear input and selected items
	const handleDelete = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.stopPropagation();
			setInputValue('');
			setItemList([]);
			onFieldChange(undefined);
			setOpen(false);
		},
		[onFieldChange],
	);

	// Remove selected badge
	const removeBadge = useCallback(
		(e: React.MouseEvent<HTMLButtonElement>) => {
			console.log('click');
			e.stopPropagation();
			const target = e.target as HTMLButtonElement;
			const item = target.textContent;
			const newList = itemList.filter((value) => value !== item);
			setItemList(newList);
			onFieldChange(newList.length > 0 ? newList : undefined);
		},
		[itemList, onFieldChange],
	);

	// Select or deselect an item
	const handleSelect = useCallback(
		(e: React.MouseEvent<HTMLButtonElement>, item: string) => {
			e.stopPropagation();
			const newList = itemList.includes(item)
				? itemList.filter((value) => value !== item)
				: [...itemList, item];
			setItemList(newList);
			onFieldChange(newList.length > 0 ? newList : undefined);
		},
		[itemList, onFieldChange],
	);

	// Disable component and clear values
	useEffect(() => {
		if (isDisable) {
			setInputValue('');
			setItemList([]);
			onFieldChange(undefined);
			setOpen(false);
		}
	}, [isDisable, onFieldChange]);

	// Update variant based on component state
	useEffect(() => {
		setNewVariant(isError ? 'danger' : isValid ? 'success' : variant);
	}, [isError, isValid, variant]);

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
						placeholder={dynamicPlaceholder ?? placeholder}
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
				<div className={styles.panel}>
					<div className={styles.scrollablePanelItemList}>
						<Flex
							direction='row'
							align='center'
							justify='center'
							pt='3'
							pb='3'
							pl='5'
							pr='5'
							gap='2xs'
							wrap={'wrap'}
						>
							{itemList.map((str: string) => {
								return (
									<Badge
										key={`badge-${str}`}
										variant='solid'
										size='medium'
										borderRadius='full'
										clickable
										onClick={(e: any) => removeBadge(e)}
									>
										{str}
									</Badge>
								);
							})}
						</Flex>
					</div>
					<div
						data-scrollbar={scrollbar}
						className={`${styles.itemPanel} ${
							open ? styles.itemPanelOpen : ''
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
										onClick={(e) => handleSelect(e, str)}
										type={'button'}
										key={`multiselect-item-${str}`}
										className={styles.customButton}
									>
										{str.toLowerCase()}
									</button>
								);
							})}
						</Flex>
					</div>
				</div>
			)}
		</div>
	);
};
