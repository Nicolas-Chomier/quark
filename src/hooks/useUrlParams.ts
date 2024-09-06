import { useState, useEffect } from 'react';

export function useUrlParams(
	searchParams: { [key: string]: string | string[] | undefined },
	key: string = 'data',
) {
	const [urlData, setUrlData] = useState<string | string[] | null>(null);

	useEffect(() => {
		const encodedData = searchParams[key];
		if (encodedData && typeof encodedData === 'string') {
			try {
				const decodedData = JSON.parse(decodeURIComponent(encodedData));
				setUrlData(decodedData);
			} catch (error) {
				console.error('Error parsing URL data:', error);
				setUrlData(null);
			}
		} else {
			setUrlData(null);
		}
	}, [searchParams, key]);

	return urlData;
}
