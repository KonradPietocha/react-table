export const switchSorting = (state, rowKey, setState) => {
    const sortDirection = state.sorting;
    switch (sortDirection) {
        case "none":
            return setState(state => ({ ...state, sortingKey: rowKey, sorting: "asc" }));
        case "asc":
            return setState(state => ({ ...state, sortingKey: rowKey, sorting: "desc" }));
        case "desc":
            return setState(state => ({ ...state, sortingKey: rowKey, sorting: "asc" }));
            default:
        return setState(state => ({ ...state, sortingKey: "none", sorting: "none" }));
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
        case "asc":
            return sortAscending(arrOfObj, key);
        case "desc":
            return sortDescending(arrOfObj, key);
        default:
            return arrOfObj;
    };
};
