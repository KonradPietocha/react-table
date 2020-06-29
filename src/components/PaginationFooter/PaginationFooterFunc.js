export const pagingTable = (state, paging, setState) => {
    let pageEnd = state.pageEnd;
    let pageStart = pageEnd - 10;
    let newStart = 0;
    let newEnd = 0;
    let slicedArr = [];
    switch (paging) {
        case "prev":
            newStart = pageStart - 10;
            newStart = newStart < 0 ? 0 : newStart;
            newEnd = newStart + 10;
            slicedArr = state.data.slice(newStart, newEnd);
            setState(state => ({ ...state, page: slicedArr, pageEnd: newEnd }));
            break;
        case "next":
            newStart = pageStart + 10;
            let maxStart = state.data.length - 10;
            newStart = newStart > maxStart ? maxStart : newStart;
            newEnd = newStart + 10;
            slicedArr = state.data.slice(newStart, newEnd);
            setState(state => ({ ...state, page: slicedArr, pageEnd: newEnd }));
            break;
        default:
            slicedArr = state.data.slice(pageStart, pageEnd);
            setState(state => ({ ...state, page: slicedArr }));
            break;
    }
};

export default {
    pagingTable
};