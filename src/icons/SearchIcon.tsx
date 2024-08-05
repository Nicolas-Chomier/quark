import React from 'react';

export const SearchIcon = (props: JSX.IntrinsicAttributes) => (
	<svg
		height='24'
		width='24'
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<g
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='1.8'
		>
			<circle cx='11' cy='11' r='8' />
			<path d='m21 21l-4.3-4.3' />
		</g>
	</svg>
);
