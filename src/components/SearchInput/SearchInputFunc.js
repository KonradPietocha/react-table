export const searchTable = (state, searchValue, setState) => {
    const stateArr = state.data;
    let newArr = [];
    let slicedArr = [];
    let object;
    for (let i = 0, arrLen = stateArr.length; i < arrLen; i++) {
        object = stateArr[i];
        for (let key in object) {
            let index = `${object[key]}`.toLowerCase().indexOf(searchValue.toLowerCase());
            if (index !== -1) {
                newArr.push(object);
            }
        }
    }
    let uniq = [...new Set(newArr)];
    slicedArr = uniq.slice(0, 10);
    setState(state => ({ ...state, page: slicedArr }));
};

export default {
    searchTable
};