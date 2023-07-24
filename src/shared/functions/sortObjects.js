export const SORTING_TYPE = {
    ASC: "asc",
    DESC: "desc",
    NONE: "none"
};

export const switchSorting = (state, rowKey, setState) => {
    const sortDirection = state.sorting;
    switch (sortDirection) {
        case SORTING_TYPE.NONE:
            return setState(state => ({ ...state, sortingKey: rowKey, sorting: SORTING_TYPE.ASC }));
        case SORTING_TYPE.ASC:
            return setState(state => ({ ...state, sortingKey: rowKey, sorting: SORTING_TYPE.DESC }));
        case SORTING_TYPE.DESC:
            return setState(state => ({ ...state, sortingKey: rowKey, sorting: SORTING_TYPE.ASC }));
            default:
        return setState(state => ({ ...state, sortingKey: SORTING_TYPE.NONE, sorting: SORTING_TYPE.NONE }));
    };
};

const sortDescending = (arrOfObj, byKey) => {
    function compare(a, b) {
        const objA = a[byKey];
        const objB = b[byKey];
        let comparison = 0;
        if (objA > objB) {
            comparison = -1;
        } else if (objA < objB) {
            comparison = 1;
        }
        return comparison;
    }
    return arrOfObj.sort(compare);
};

const sortAscending = (arrOfObj, byKey) => {
    function compare(a, b) {
        const objA = a[byKey];
        const objB = b[byKey];
        let comparison = 0;
        if (objA > objB) {
            comparison = 1;
        } else if (objA < objB) {
            comparison = -1;
        }
        return comparison;
    }
    return arrOfObj.sort(compare);
};

export const sortObjects = (state, arrOfObj) => {
    const sortDirection = state.sorting;
    const key = state.sortingKey;
    switch(sortDirection) {
        case SORTING_TYPE.ASC:
            return sortAscending(arrOfObj, key);
        case SORTING_TYPE.DESC:
            return sortDescending(arrOfObj, key);
        default:
            return arrOfObj;
    };
};
