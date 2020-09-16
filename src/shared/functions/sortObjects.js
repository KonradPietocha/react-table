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
    
};
