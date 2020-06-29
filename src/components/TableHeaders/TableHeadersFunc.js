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
export const sortObjects = (state, rowKey, setState) => {
    let object = state.data;
    let sorting = state.sorting;
    let pageEnd = state.pageEnd;
    let pageStart = pageEnd - 10;
    let slicedArr = [];
    if (rowKey === state.sortingKey) {
        switch (sorting) {
            case null:
                let ascending = sortAscending(object, rowKey);
                slicedArr = ascending.slice(pageStart, pageEnd);
                setState(state => ({ ...state, data: ascending, page: slicedArr, sorting: "asc", sortingKey: rowKey }));
                break;
            case "asc":
                let descending = sortDescending(object, rowKey);
                slicedArr = descending.slice(pageStart, pageEnd);
                setState(state => ({ ...state, data: descending, page: slicedArr, sorting: "desc", sortingKey: rowKey }));
                break;
            default:
                ascending = sortAscending(object, rowKey);
                slicedArr = ascending.slice(pageStart, pageEnd);
                setState(state => ({ ...state, data: ascending, page: slicedArr, sorting: "asc", sortingKey: rowKey }));
                break;
        }
    } else {
        let ascending = sortAscending(object, rowKey);
        slicedArr = ascending.slice(pageStart, pageEnd);
        setState(state => ({ ...state, data: ascending, page: slicedArr, sorting: "asc", sortingKey: rowKey }));
    };
};

export default {
    sortObjects
};