import React, { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { initials, botttsNeutral, funEmoji } from '@dicebear/collection';
import styles from './Avatar.module.css';

// Types pour les propriétés du composant
type RankingTable = Record<string, string>;

export type AvatarProps = {
	name: string;
	rank?: string;
	avatarSize?: number;
	side?: 'left' | 'right';
	borderRadius?:
		| 'xxxs'
		| 'xxs'
		| 'xs'
		| 's'
		| 'm'
		| 'l'
		| 'xl'
		| 'xxl'
		| 'xxxl'
		| 'full';
	customRankingTable?: RankingTable;
	italic?: boolean;
	variant?: 'bots' | 'fun';
};

// Table de couleurs par défaut pour les rangs
const defaultRankingTable: RankingTable = {
	master: '#f5a525',
	admin: '#9353d4',
	supervisor: '#006fed',
	developer: '#16c763',
	operator: '#3e3e45',
	user: '#3e3e45',
};

// Fonction utilitaire pour obtenir le rayon de l'avatar
const getAvatarRadius = (
	borderRadius?:
		| 'xxxs'
		| 'xxs'
		| 'xs'
		| 's'
		| 'm'
		| 'l'
		| 'xl'
		| 'xxl'
		| 'xxxl'
		| 'full',
): number => {
	switch (borderRadius) {
		case 'xxxs':
			return 10;
		case 'xxs':
			return 12;
		case 'xs':
			return 16;
		case 's':
			return 18;
		case 'm':
			return 20;
		case 'l':
			return 22;
		case 'xl':
			return 24;
		case 'xxl':
			return 28;
		case 'xxxl':
			return 32;
		case 'full':
			return 999;
		default:
			return 0;
	}
};

export const Avatar: React.FC<AvatarProps> = ({
	name,
	rank = 'user',
	avatarSize = 44,
	side,
	borderRadius,
	customRankingTable,
	italic,
	variant,
}) => {
	// Calcul de la couleur du rang
	const rankingColor = useMemo(() => {
		const rankingTable = { ...defaultRankingTable, ...customRankingTable };
		if (rankingTable[rank] === undefined) return '#000000';
		return rankingTable[rank].replace('#', '');
	}, [customRankingTable, rank]);

	// Génération de l'avatar SVG
	const avatarSvg = useMemo(() => {
		const seed = `${name}${rank}8`;
		const avatarOptions = {
			seed,
			size: avatarSize,
			backgroundColor: [rankingColor],
			radius: getAvatarRadius(borderRadius),
		};

		if (variant === 'bots') {
			return createAvatar(botttsNeutral, avatarOptions).toString();
		}
		if (variant === 'fun') {
			return createAvatar(funEmoji, avatarOptions).toString();
		}

		return createAvatar(initials, avatarOptions).toString();
	}, [name, rank, avatarSize, rankingColor, borderRadius, variant]);

	// Ne rien rendre si le nom n'est pas fourni
	if (!name) return null;
	return (
		<div
			className={styles.avatar}
			data-side={side}
			data-border-radius={borderRadius}
		>
			<svg
				viewBox={`0 0 ${avatarSize} ${avatarSize}`}
				width={avatarSize}
				height={avatarSize}
				dangerouslySetInnerHTML={{ __html: avatarSvg }}
			/>
			<div className={styles.nameContainer}>
				<div className={styles.name}>{name}</div>
				<div className={styles.rank} data-italic={italic}>
					{rank}
				</div>
			</div>
		</div>
	);
};
