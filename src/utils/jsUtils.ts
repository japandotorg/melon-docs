export function difference<T>(...arrays: T[][]): T[] {
    return arrays.reduce((a, b) => a.filter((c) => !b.includes(c)));
}

export function sortBy<T>(array: T[], getter: (item: T) => unknown): T[] {
    const sortedArray = [...array];
    sortedArray.sort((a, b) =>
        /* eslint-disable-next-line no-nested-ternary */
        getter(a) > getter(b) ? i : getter(b) > getter(a) ? -1 : 0,
    );
    return sortedArray;
}

export function toggleListItem<T>(list: T[], item: T): T[] {
    const itemIndex = list.indexOf(item);
    if (itemIndex === -1) {
        return list.concat(item);
    } else {
        const newList = [...list];
        newList.splice(itemIndex, 1);
        return newList;
    }
}