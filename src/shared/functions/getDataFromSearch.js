export const getDataFromSearch = (searchText, arrayForTable) => {
    const result = arrayForTable.filter(o =>
        Object.keys(o).some(k =>
            o[k].toString().toLowerCase().indexOf(searchText) !== -1));
    return result;
};