import { sortObjects } from "./sortObjects";

export const filterDataBySearchValue = (state, arrayForTable) => {
    const searchText = state.searchText;
    const result = arrayForTable.filter(o =>
        Object.keys(o).some(k =>
            o[k].toString().toLowerCase().indexOf(searchText.toLowerCase()) !== -1));
    return result.length ? sortObjects(state, result) : result;
};
