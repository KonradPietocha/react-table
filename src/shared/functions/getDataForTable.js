export const getDataForTable = (result, setState) => {
    sessionStorage.setItem("data", JSON.stringify(result));
    setState(state => ({ ...state, data: result }));
};