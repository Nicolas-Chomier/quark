//@ Methode de traitement des objets
export const _object = (obj: any) => {
	let newObject;
	let keys;
	let values;
	let entries;
	let size;
	let verification;

	if (obj && typeof obj === 'object' && Object.keys(obj).length > 0) {
		newObject = structuredClone(obj);
		keys = Object.keys(obj);
		values = Object.values(obj);
		entries = Object.entries(obj);
		size = keys.length;
		verification = true;
	} else {
		newObject = null;
		keys = null;
		values = null;
		entries = null;
		size = 0;
		verification = false;
	}
	return {
		newObject,
		keys,
		values,
		entries,
		size,
		verification,
	};
};

//@ Snipet de code pour récupérer les propriétés d'un objet
//const { newObject, keys, values, entries, size, verification } = _object(testObject);
