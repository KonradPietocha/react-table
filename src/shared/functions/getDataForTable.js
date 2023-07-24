export const getDataForTable = (result, setState) => {
    sessionStorage.setItem("data", JSON.stringify(result));
    return setState(state => ({ ...state, data: result, isLoading: false }));
};
