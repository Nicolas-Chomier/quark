import React, { createContext, ReactNode, useContext } from 'react';
import { DisplayIcon } from '../icon/DisplayIcon';
import { DisplayText } from '../text/DisplayText';
import { DisplayUnit } from '../unit/DisplayUnit';
import { DisplayStatistic } from '../stat/DisplayStatistic';
import { DisplayTrend } from '../trend/DisplayTrend';
import { useDisplayRootContext } from '../root/DisplayRoot';
import styles from './DisplayContent.module.css';

type DisplayContentProps = {
	children: ReactNode;
	className?: string;
	padding?: 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl';
	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
};

export type DisplayContentComponent = React.FC<DisplayContentProps> & {
	Icon: typeof DisplayIcon;
	Text: typeof DisplayText;
	Unit: typeof DisplayUnit;
	Statistic: typeof DisplayStatistic;
	Trend: typeof DisplayTrend;
};

const DisplayContentContext = createContext<DisplayContentProps | undefined>(
	undefined,
);

// Composant principal
export const DisplayContent: DisplayContentComponent = ({
	children,
	direction = 'row',
	padding,
	className,
}) => {
	const { style, disable, width, borderRadius } = useDisplayRootContext();

	// Pas de contexte pour le moment
	const contextValue = undefined;

	if (!children) return null;

	return (
		<DisplayContentContext.Provider value={contextValue}>
			<div
				className={`${className ?? styles.content}`}
				data-direction={direction}
				data-padding={padding}
				data-border-radius={borderRadius}
				data-disabled={disable}
				data-style={style}
				data-width={width}
			>
				{children}
			</div>
		</DisplayContentContext.Provider>
	);
};

DisplayContent.Icon = DisplayIcon;
DisplayContent.Text = DisplayText;
DisplayContent.Unit = DisplayUnit;
DisplayContent.Statistic = DisplayStatistic;
DisplayContent.Trend = DisplayTrend;

// Hook de securité évitant l'utilisation des composants Display sans le contexte
export const useDisplayContentContext = () => {
	const context = useContext(DisplayContentContext);
	if (context === undefined) {
		throw new Error(
			'Bad context usage: useDisplayContentContext must be used within a DisplayContent',
		);
	}
	return context;
};
