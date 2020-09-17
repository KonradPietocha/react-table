import React, { useState, useEffect } from 'react';
//components
import CurrencyPage from './components/CurrencyPage';
//url
import { urlCurrencyLatest } from './shared/urls';
//functions
import { getDataForTable } from './shared/functions/getDataForTable';
import { fetchData } from './shared/functions/fetchData';
import { flipPage } from './shared/functions/flipPage';
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
        sortingKey: null,
        sorting: null
    });
    //functions**************************************************************
    useEffect(() => {
        if (!sessionStorage.getItem("data")) {
            fetchData(urlCurrencyLatest, getDataForTable, setState);
        };
        return;
    }, []);

    const handleSorting = rowKey => {
        console.log(rowKey);
    };
    const handlePagination = (paging, arrayLength) => {
        flipPage(paging, setState, arrayLength);
    };
    const handleSearch = event => {
        const eventText = event.target.value;
        setState(state => ({ ...state, page: 1, searchText: eventText }));
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
