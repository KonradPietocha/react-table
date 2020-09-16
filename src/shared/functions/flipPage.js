export const flipPage = (paging, setState, arrayLength) => {
    const elementsAmount = arrayLength - 1;
    const limit = Math.ceil(elementsAmount / 10);
    switch (paging) {
        case "prev":
            return setState(state => ({
                ...state, page: state.page === 1 ? 1 : state.page - 1
            }));
        case "next":
            return setState(state => ({ 
                ...state, page: state.page === limit ? limit : state.page + 1 
            }));
        default:
            return setState(state => ({ ...state, page: state.page }));
    };
};