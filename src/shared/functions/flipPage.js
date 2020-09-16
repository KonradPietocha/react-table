export const flipPage = (paging, setState) => {
    switch (paging) {
        case "prev":
            return setState(state => ({ ...state, page: state.page - 1 }));
        case "next":
            return setState(state => ({ ...state, page: state.page + 1 }));
        default:
            return setState(state => ({ ...state, page: state.page }));
    };
};