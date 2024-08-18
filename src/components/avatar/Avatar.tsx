import React, { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { initials } from '@dicebear/collection';
import styles from './TAvatar2.module.css';

// Types pour les propriétés du composant
type RankingTable = Record<string, string>;

export type TAvatarProps = {
	name: string;
	rank?: string;
	avatarSize?: number;
	side?: 'left' | 'right';
	borderRadius?: 's' | 'm' | 'l';
	customRankingTable?: RankingTable;
	italic?: boolean;
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
const getAvatarRadius = (borderRadius?: 's' | 'm' | 'l'): number => {
	switch (borderRadius) {
		case 's':
			return 18;
		case 'm':
			return 22;
		case 'l':
			return 28;
		default:
			return 0;
	}
};

export const Avatar: React.FC<TAvatarProps> = ({
	name,
	rank = 'user',
	avatarSize = 44,
	side,
	borderRadius,
	customRankingTable,
	italic,
}) => {
	// Calcul de la couleur du rang
	const rankingColor = useMemo(() => {
		const rankingTable = { ...defaultRankingTable, ...customRankingTable };
		return rankingTable[rank].replace('#', '');
	}, [customRankingTable, rank]);

	// Génération de l'avatar SVG
	const avatarSvg = useMemo(() => {
		const seed = `${name}${rank}`;
		const avatarOptions = {
			seed,
			size: avatarSize,
			backgroundColor: [rankingColor],
			radius: getAvatarRadius(borderRadius),
		};

		return createAvatar(initials, avatarOptions).toString();
	}, [name, rank, avatarSize, rankingColor, borderRadius]);

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
