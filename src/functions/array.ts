//@ Méthode de traitement des tableaux
export const _array = (arr: any[]) => {
	let newArray;
	let length;
	let firstElement;
	let lastElement;
	let uniqueElements;
	let verification;

	if (Array.isArray(arr) && arr.length > 0) {
		newArray = structuredClone(arr);
		length = arr.length;
		firstElement = arr[0];
		lastElement = arr[length - 1];
		uniqueElements = [...new Set(arr)];
		verification = true;
	} else {
		newArray = null;
		length = 0;
		firstElement = null;
		lastElement = null;
		uniqueElements = null;
		verification = false;
	}

	return {
		newArray,
		length,
		firstElement,
		lastElement,
		uniqueElements,
		verification,
	};
};

//@ Snippet de code pour récupérer les propriétés d'un tableau
//const { newArray, length, firstElement, lastElement, uniqueElements, verification } = _array(testArray);
