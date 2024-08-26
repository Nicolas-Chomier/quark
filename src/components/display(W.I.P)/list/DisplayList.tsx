import React, { createContext, ReactNode, useContext } from 'react';
import { DisplayIcon } from '../icon/DisplayIcon';
import { useDisplayRootContext } from '../root/DisplayRoot';
import styles from './DisplayList.module.css';

type DisplayListProps = {
	data?: Record<string, string | number | boolean>;
	children?: ReactNode;
	className?: string;
	fontSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
	direction?: 'column' | 'column-reverse';
};

export type DisplayListComponent = React.FC<DisplayListProps> & {
	Icon: typeof DisplayIcon;
};

const DisplayListContext = createContext<DisplayListProps | undefined>(
	undefined,
);

// Composant principal
export const DisplayList: DisplayListComponent = ({
	data,
	children,
	direction = 'column',
	fontSize = 'xs',
	className,
}) => {
	const { style, disable, width, borderRadius } = useDisplayRootContext();

	// Pas de contexte pour le moment
	const contextValue = undefined;

	if (!data || Object.keys(data).length === 0) return null;
	return (
		<DisplayListContext.Provider value={contextValue}>
			<div
				className={`${className ?? styles.list}`}
				data-direction={direction}
				data-border-radius={borderRadius}
				data-disabled={disable}
				data-style={style}
				data-width={width}
				data-font-size={fontSize}
			>
				{Object.entries(data).map(([key, value]) => (
					<div key={`DisplayList-${key}`} className={styles.items}>
						<span>{children}</span>
						<span className={styles.key}>{key}:</span>
						<span className={styles.value}>{`${value}`}</span>
					</div>
				))}
			</div>
		</DisplayListContext.Provider>
	);
};

DisplayList.Icon = DisplayIcon;

// Hook de securité évitant l'utilisation des composants Display sans le contexte
export const useDisplayListContext = () => {
	const context = useContext(DisplayListContext);
	if (context === undefined) {
		throw new Error(
			'Bad context usage: useDisplayListContext must be used within a DisplayList',
		);
	}
	return context;
};
