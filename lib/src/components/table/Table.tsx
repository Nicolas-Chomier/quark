import React, { useState, useMemo } from 'react';
import styles from './Table.module.css';
import { TablePagination } from './TablePagination';

type GenericObject<T> = {
	[key: string]: T;
};

export interface TableProps {
	data: any;
	allowSelection?: number;
	striped?: boolean;
	hoverable?: boolean;
	size?: string;
	responsive?: boolean;
	className?: string;
	children?: React.ReactNode;
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
	(
		{
			data,
			allowSelection = 0,
			striped,
			hoverable,
			size,
			responsive,
			className,
			children,
		},
		ref,
	) => {
		const [selectedRows, setSelectedRows] = useState<number[]>([]);
		const [pageID, setPageID] = useState<number>(1);
		const [page, setPage] = useState(0);
		const { header, splitedRows } = useMemo(() => {
			if (!data) return { header: [], splitedRows: [] };
			return getSplitedTableContent(data, 5);
		}, [data]);

		const handleHeaderCheckbox = () => {
			console.log('header checkbox clicked');
		};

		const handleBodyCheckbox = (index: number) => {
			console.log('body checkbox clicked', index);
			setSelectedRows((prev) =>
				prev.includes(index)
					? prev.filter((i) => i !== index)
					: [...prev, index],
			);
		};
		const handlePage = (pageNbs: number) => {
			const pageNbs_ = pageNbs - 1;
			setPage(pageNbs_);
		};
		console.log(header);

		return (
			<div data-responsive={responsive}>
				<table
					ref={ref}
					className={`${styles.table} ${className || ''}`}
					data-striped={striped}
					data-hoverable={hoverable}
					data-size={size}
				>
					<thead>
						<tr>
							{allowSelection > 0 && (
								<th scope='col' onClick={handleHeaderCheckbox}>
									<span>selectbox</span>
								</th>
							)}
							{header.map((cell: string, index: number) => (
								<th scope='col' key={`table-header-${index}`}>
									{`${cell}`.toUpperCase()}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{splitedRows[page].map(
							(
								row:
									| { [s: string]: unknown }
									| ArrayLike<unknown>,
								index: number,
							) => {
								const isSelected = selectedRows.includes(index);

								return (
									<tr
										key={`body-row-${index}`}
										data-selected={isSelected}
										onClick={() =>
											handleBodyCheckbox(index)
										}
									>
										{allowSelection > 0 && (
											<th scope='row'>
												<span>tedqzdqzdst</span>
											</th>
										)}
										{Object.values(row).map(
											(cell: any, id: number) => (
												<td key={`td-${index}-${id}`}>
													{cell}
												</td>
											),
										)}
									</tr>
								);
							},
						)}
					</tbody>
				</table>
				<footer>
					<TablePagination
						size={splitedRows?.length}
						handleClick={handlePage}
					/>
				</footer>
			</div>
		);
	},
);

Table.displayName = 'Table';

export const objectHasAtLeastOneKey = (
	obj: GenericObject<unknown> | undefined | null,
): boolean => {
	return (
		obj !== null &&
		obj !== undefined &&
		typeof obj === 'object' &&
		Object.keys(obj).length > 0
	);
};

export const extractObjectKeys = (
	obj: GenericObject<unknown> | undefined | null,
): string[] | undefined => {
	const isObject = objectHasAtLeastOneKey(obj);

	if (obj && isObject) {
		return Object.keys(obj);
	}
	return undefined;
};

type TFormattedResult =
	| { header: string[]; splitedRows: GenericObject<string | number>[][] }
	| undefined;

export const getSplitedTableContent = (
	data: GenericObject<string | number>[] | undefined,
	rowPerPage = 5,
): any => {
	if (data && data.length > 0) {
		const firstItem = data?.[0];
		const header = extractObjectKeys(firstItem);

		if (header) {
			const splitedRows = [];
			for (let i = 0; i < data.length; i += rowPerPage) {
				splitedRows.push(data.slice(i, i + rowPerPage));
			}

			return { header: header, splitedRows: splitedRows };
		} else {
			return undefined;
		}
	}
	return undefined;
};
// Construit un tableau d'objet avec les index de la liste de données
export const buildMultiSelectionResult = (
	data: GenericObject<string | number>[] | undefined,
	IDList: number[],
) => {
	if (data && data.length > 0 && IDList && IDList.length > 0) {
		const result = [];
		for (const id of IDList) {
			result.push(data[id - 1]);
		}
		return result;
	}
	return undefined;
};
