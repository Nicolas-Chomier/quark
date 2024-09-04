type DataObject = Record<string, any>;

type SelectKeyOptions<TData extends DataObject> = {
	data: TData[];
	keysToKeep: (keyof TData)[] | keyof TData;
};

export const keepSelectedKeys = <TData extends DataObject>({
	data,
	keysToKeep,
}: SelectKeyOptions<TData>): Partial<TData>[] => {
	const keys = Array.isArray(keysToKeep) ? keysToKeep : [keysToKeep];

	return data.map((item) =>
		keys.reduce((acc, key) => {
			if (key in item) {
				acc[key] = item[key];
			}
			return acc;
		}, {} as Partial<TData>),
	);
};
