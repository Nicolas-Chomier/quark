import React, { useState, useEffect, useMemo } from 'react';
import {
	Check,
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
	X,
} from 'lucide-react';
import { FallBack } from '../fallback/Fallback';
import { Spinner } from '../spinner/Spinner';
import styles from './Table.module.css';

interface TableData {
	id: number;
	[key: string]: any;
}

export interface TableProps {
	data: TableData[];
	rowsPerPage?: number;
	allowSelection?: 'single' | 'multiple' | 'none';
	size?: 'xs' | 's' | 'm' | 'l' | 'xl';
	isLoading?: boolean;
	error?: boolean;
	onRowsSelect: (selectedRows: TableData[]) => void;
}

export const Table: React.FC<TableProps> = ({
	data = [],
	rowsPerPage = 5,
	allowSelection,
	size,
	isLoading,
	error,
	onRowsSelect,
}) => {
	// State for selected rows and current page
	const [selectedRows, setSelectedRows] = useState<number[]>([]);
	const [currentPage, setCurrentPage] = useState(1);

	// State for checkbox
	const [allRowsSelected, setAllRowsSelected] = useState(false);

	// Calculate pagination details
	const totalPages = Math.ceil(data.length / rowsPerPage);
	const startIndex = (currentPage - 1) * rowsPerPage;
	const endIndex = startIndex + rowsPerPage;
	const currentData = data.slice(startIndex, endIndex);

	const columns = useMemo(() => {
		if (data.length === 0) return [];
		const columnKeys = Object.keys(data[0]);
		return columnKeys.map((key) => ({
			key,
			header: key.toUpperCase(),
		}));
	}, [data]);

	// Toggle selection of a single row
	const toggleRow = (id: number) => {
		if (allowSelection === 'single') {
			setSelectedRows([id]);
		} else {
			setSelectedRows((prev) =>
				prev.includes(id)
					? prev.filter((rowId) => rowId !== id)
					: [...prev, id],
			);
		}
	};

	// Toggle selection of all rows on the current page
	const toggleAll = () => {
		if (allowSelection === 'single') {
			setSelectedRows([]);
		} else {
			const currentIds = currentData.map((row) => row.id);
			setSelectedRows((prev) => {
				if (prev.length >= currentIds.length) {
					setAllRowsSelected(false);
					return prev.filter((id) => !currentIds.includes(id));
				} else {
					setAllRowsSelected(true);
					return [...new Set([...prev, ...currentIds])];
				}
			});
		}
	};

	// Change the current page
	const changePage = (page: number) => {
		setCurrentPage(page);
	};

	// Manage icon state when all rows are selected or not
	useEffect(() => {
		const currentIds = currentData.map((row) => row.id);
		if (selectedRows.length === currentIds.length) {
			setAllRowsSelected(true);
		} else {
			setAllRowsSelected(false);
		}
	}, [currentData, selectedRows]);

	// Effect to notify parent component of selected rows
	useEffect(() => {
		const selectedData = data.filter((row) =>
			selectedRows.includes(row.id),
		);
		onRowsSelect(selectedData);
	}, [selectedRows, data, onRowsSelect]);

	if (!isLoading && (data.length === 0 || error))
		return (
			<FallBack
				width='l'
				borderRadius='s'
				message='No rows to display.'
			/>
		);

	return (
		<div className={styles.container}>
			<table className={styles.table} data-width={size}>
				{isLoading ? (
					<thead>
						<tr>
							<th
								colSpan={
									columns.length + (allowSelection ? 1 : 0)
								}
							></th>
						</tr>
					</thead>
				) : (
					<thead>
						<tr>
							{allowSelection ? (
								<th>
									<button
										className={styles.checkbox}
										onClick={toggleAll}
									>
										{allRowsSelected ? (
											<X
												size={16}
												strokeWidth={3.6}
												color='var(--X-icon-color)'
											/>
										) : (
											<Check
												size={14}
												strokeWidth={3.6}
											/>
										)}
									</button>
								</th>
							) : null}

							{columns.map((column) => (
								<th key={column.key}>{column.header}</th>
							))}
						</tr>
					</thead>
				)}

				{isLoading ? (
					<tbody className={styles.loadingTBody}>
						<tr>
							<td
								colSpan={
									columns.length + (allowSelection ? 1 : 0)
								}
							>
								<Spinner size='xl' />
							</td>
						</tr>
					</tbody>
				) : (
					<tbody>
						{currentData.map((row) => (
							<tr
								key={row.id}
								data-allow-selection={allowSelection}
								data-selected={selectedRows.includes(row.id)}
								onClick={() => toggleRow(row.id)}
							>
								{allowSelection ? (
									<td className={styles.checkboxContainer}>
										<span className={styles.checkbox}>
											{selectedRows.includes(row.id) ? (
												<Check
													size={14}
													strokeWidth={3.6}
												/>
											) : null}
										</span>
									</td>
								) : null}

								{columns.map((column) => (
									<td key={column.key}>{row[column.key]}</td>
								))}
							</tr>
						))}
					</tbody>
				)}
			</table>
			<footer className={styles.pagination}>
				<button
					onClick={() => changePage(1)}
					disabled={currentPage === 1}
				>
					<ChevronsLeft />
				</button>
				<button
					onClick={() => changePage(currentPage - 1)}
					disabled={currentPage === 1}
				>
					<ChevronLeft />
				</button>
				<span className={styles.pageInfo}>
					{isLoading
						? 'Loading...'
						: `Page ${currentPage} / ${totalPages}`}
				</span>
				<button
					onClick={() => changePage(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					<ChevronRight />
				</button>
				<button
					onClick={() => changePage(totalPages)}
					disabled={currentPage === totalPages}
				>
					<ChevronsRight />
				</button>
			</footer>
		</div>
	);
};
