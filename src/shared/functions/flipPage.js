const getProperValue = (value, currentState) => {
    if(isNaN(Number(value))) {
        return currentState;
    }
    return Number(value);
};

export const PAGING_TYPE = {
    PREV: "prev",
    NEXT: "next"
};

export const flipPage = (paging, setState, limit) => {
    switch (paging) {
        case PAGING_TYPE.PREV:
            return setState(state => ({
                ...state, page: state.page === 1 ? 1 : state.page - 1
            }));
        case PAGING_TYPE.NEXT:
            return setState(state => ({ 
                ...state, page: state.page === limit ? limit : state.page + 1 
            }));
        default:
            return setState(state => ({ ...state, page: getProperValue(paging, state.page) }));
    };
};
