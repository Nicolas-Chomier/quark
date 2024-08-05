import React from 'react';

export const X = (props: JSX.IntrinsicAttributes) => (
	<svg
		height='22'
		width='22'
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M18 6L6 18M6 6l12 12'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
		/>
	</svg>
);
