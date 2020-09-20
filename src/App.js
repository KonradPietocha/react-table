import React, { useState, useEffect } from 'react';
//components
import CurrencyPage from './components/CurrencyPage';
//url
import { urlCurrencyLatest } from './shared/urls';
//functions
import { getDataForTable } from './shared/functions/getDataForTable';
import { fetchData } from './shared/functions/fetchData';
import { flipPage } from './shared/functions/flipPage';
import { switchSorting } from './shared/functions/sortObjects';
//images
import gold from './images/gold-gradient-background.png';
//style
const style = {
    appStyle: {
        backgroundImage: `url(${gold})`
    }
}

function App() {
    //state*****************************************************************
    const [state, setState] = useState({
        data: sessionStorage.getItem("data") ? JSON.parse(sessionStorage.getItem("data")) : [],
        page: 1,
        rowsPerPage: 10,
        searchText: "",
        sortingKey: "none",
        sorting: "none"
    });
    //functions**************************************************************
    useEffect(() => {
        if (!sessionStorage.getItem("data")) {
            fetchData(urlCurrencyLatest, getDataForTable, setState);
        };
        return;
    }, []);

    const handleSorting = rowKey => {
        return switchSorting(state, rowKey, setState);
    };
    const handlePagination = (paging, arrayLength) => {
        return flipPage(paging, setState, arrayLength);
    };
    const handleSearch = event => {
        const eventText = event.target.value;
        return setState(state => ({ ...state, page: 1, searchText: eventText }));
    };
    //component********************************************************************
    return (
        <div
            className="App"
            style={style.appStyle}
        >
            <CurrencyPage
                state={state}
                handleSorting={handleSorting}
                handlePagination={handlePagination}
                handleSearch={handleSearch}
            />
        </div>
    );
}

export default App;
