import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { TableDummy } from '../dummy/TableDummy';
import styles from './Table.module.css';

type TableData = {
	id: number;
	[key: string]: any;
};

type TableAction = {
	label: string;
	index: string;
	render: (row: any) => React.ReactNode;
};

export type TableProps = {
	onRowsSelect: (selectedRows: TableData[]) => void;
	data: TableData[];
	columns: string[];
	actions?: TableAction[];
	rowsPerPage?: number;
	allowSelection?: number;

	isLoading?: boolean;
	error?: boolean;
	hideColumns?: string[];

	width?: number;
	loadingMessage?: string;
	noRowsMessage?: string;
};

export const Table: React.FC<TableProps> = ({
	onRowsSelect,
	data = [],
	columns = [],
	actions = [],
	rowsPerPage = 5,
	allowSelection = 0,
	isLoading,
	error,
	hideColumns,
	width,
	loadingMessage = 'Loading...',
	noRowsMessage = 'No rows to display.',
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

	// Calculate new current data with empty rows
	const newCurrentData = useMemo(() => {
		if (data?.length === 0) return [];
		if (currentData.length >= rowsPerPage) return currentData;

		const emptyRows = Array(rowsPerPage - currentData.length)
			.fill(null)
			.map(() =>
				Object.fromEntries(
					Object.keys(currentData[0]).map((key) => [key, null]),
				),
			);

		return [...currentData, ...emptyRows];
	}, [currentData, data, rowsPerPage]);

	// Row selection handler
	const handleRowSelection = useCallback(
		(selectedIds: number[]) => {
			const selectedData = data.filter((row) =>
				selectedIds.includes(row.id),
			);
			onRowsSelect(selectedData);
		},
		[data, onRowsSelect],
	);

	// Toggle selection of a row
	const toggleRow = useCallback(
		(id: number | null) => {
			if (!allowSelection || !id) return;
			const newSelection =
				allowSelection === 1
					? selectedRows.includes(id)
						? []
						: [id]
					: selectedRows.includes(id)
					? selectedRows.filter((rowId) => rowId !== id)
					: [...selectedRows, id].slice(-allowSelection);

			setSelectedRows(newSelection);
			handleRowSelection(newSelection);
		},
		[allowSelection, handleRowSelection, selectedRows],
	);

	// Toggle selection of all rows
	const toggleAll = useCallback(() => {
		if (!allowSelection) return;

		const currentIds = currentData.map((row) => row.id);
		let newSelection: number[];

		if (allowSelection === 1) {
			newSelection = [];
		} else {
			const isAllSelected = selectedRows.length >= currentIds.length;
			newSelection = isAllSelected
				? selectedRows.filter((id) => !currentIds.includes(id))
				: [...new Set([...selectedRows, ...currentIds])].slice(
						-allowSelection,
				  );
		}
		setSelectedRows(newSelection);
		handleRowSelection(newSelection);
	}, [allowSelection, handleRowSelection, selectedRows, currentData]);

	// Change the current page
	const changePage = useCallback((page: number) => {
		setCurrentPage(page);
	}, []);

	// Manage icon state when all rows are selected or not
	useEffect(() => {
		const currentIds = currentData.map((row) => row.id);
		if (selectedRows.length === currentIds.length) {
			setAllRowsSelected(true);
		} else {
			setAllRowsSelected(false);
		}
	}, [currentData, selectedRows]);

	// Display fallback if needed
	if (isLoading) {
		return <TableDummy width={width} message={loadingMessage} spinner />;
	}
	if (data.length === 0 || error) {
		return <TableDummy width={width} message={noRowsMessage} />;
	}
	return (
		<div className={styles.container}>
			<table className={styles.table}>
				<thead className={styles.thead}>
					<tr>
						{allowSelection ? (
							<th>
								<button onClick={toggleAll}>
									{allRowsSelected ? (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='16'
											height='16'
											viewBox='0 0 24 24'
											color='var(--table-X-icon-color)'
										>
											<path
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='3.6'
												d='M18 6L6 18M6 6l12 12'
											/>
										</svg>
									) : (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='14'
											height='14'
											viewBox='0 0 24 24'
										>
											<path
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='3.6'
												d='M20 6L9 17l-5-5'
											/>
										</svg>
									)}
								</button>
							</th>
						) : null}

						{columns.map((column) => {
							if (hideColumns?.includes(column)) return null;
							return <th key={column}>{column}</th>;
						})}

						{actions?.map((action: any, index: number) => {
							return <th key={index}>{action.label}</th>;
						})}
					</tr>
				</thead>

				<tbody className={styles.body}>
					{newCurrentData.map((row, index) => {
						return row.id === null ? (
							<tr key={`${index}-null`}>{null}</tr>
						) : (
							<tr
								key={row.id}
								data-allow-selection={allowSelection}
								data-selected={selectedRows.includes(row.id)}
								onClick={() => toggleRow(row.id)}
							>
								{!!allowSelection && (
									<td>
										<span>
											{selectedRows.includes(row.id) ? (
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='14'
													height='14'
													viewBox='0 0 24 24'
												>
													<path
														fill='none'
														stroke='currentColor'
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth='3.6'
														d='M20 6L9 17l-5-5'
													/>
												</svg>
											) : null}
										</span>
									</td>
								)}

								{columns.map((column) => {
									if (hideColumns?.includes(column))
										return null;

									return <td key={column}>{row[column]}</td>;
								})}

								{actions?.map((action: any, index: number) => {
									return (
										<td key={index}>
											{action.render(row)}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>

			<footer>
				<button
					onClick={() => changePage(1)}
					disabled={currentPage === 1}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='22'
						height='22'
						viewBox='0 0 24 24'
					>
						<path
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='m11 17l-5-5l5-5m7 10l-5-5l5-5'
						/>
					</svg>
				</button>
				<button
					onClick={() => changePage(currentPage - 1)}
					disabled={currentPage === 1}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='22'
						height='22'
						viewBox='0 0 24 24'
					>
						<path
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='m15 18l-6-6l6-6'
						/>
					</svg>
				</button>
				<span>{`Page ${currentPage} / ${totalPages}`}</span>
				<button
					onClick={() => changePage(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='22'
						height='22'
						viewBox='0 0 24 24'
					>
						<path
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='m9 18l6-6l-6-6'
						/>
					</svg>
				</button>
				<button
					onClick={() => changePage(totalPages)}
					disabled={currentPage === totalPages}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='22'
						height='22'
						viewBox='0 0 24 24'
					>
						<path
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='m6 17l5-5l-5-5m7 10l5-5l-5-5'
						/>
					</svg>
				</button>
			</footer>
		</div>
	);
};
