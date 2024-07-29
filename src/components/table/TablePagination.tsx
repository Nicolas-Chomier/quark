import React, { useCallback, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './TablePagination.module.css';

type PaginationProps = {
	size?: number;
	handleClick?: (id: number) => void;
};

export const TablePagination: React.FC<PaginationProps> = ({
	size,
	handleClick,
}) => {
	const [pageID, setPageID] = useState<number>(1);

	// Fonctions de navigation
	const handlePage = useCallback(
		(pNum: number) => {
			setPageID(pNum);
			if (handleClick) handleClick(pNum);
		},
		[handleClick],
	);

	const pageUp = useCallback(() => {
		if (size && pageID < size) {
			const newPageID = pageID + 1;
			setPageID(newPageID);
			if (handleClick) handleClick(newPageID);
		}
	}, [handleClick, pageID, size]);

	const pageDown = useCallback(() => {
		if (pageID > 1) {
			const newPageID = pageID - 1;
			setPageID(newPageID);
			if (handleClick) handleClick(newPageID);
		}
	}, [handleClick, pageID]);

	if (!size) return null;
	return (
		<div className={styles.pagination}>
			<button onClick={pageDown} type={'button'}>
				<ChevronLeft />
			</button>

			{Array.from({ length: size }, (_, id) => {
				const pageNumber = id + 1;
				return (
					<button
						onClick={() => handlePage(pageNumber)}
						type={'button'}
						key={`PageBtn-${id}`}
					>
						<span>{pageNumber}</span>
					</button>
				);
			})}
			<button onClick={pageUp} type={'button'}>
				<ChevronRight />
			</button>
		</div>
	);
};
