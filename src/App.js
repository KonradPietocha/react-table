import React, { useState, useEffect } from 'react';
//components
import CurrencyPage from './components/CurrencyPage';
//url
import { urlCurrencyLatest } from './shared/urls';
//functions
import { getDataForTable } from './shared/functions/getDataForTable';
import { fetchData } from './shared/functions/fetchData';
// import { sortObjects } from './components/TableHeaders/TableHeadersFunc';
// import { pagingTable } from './components/PaginationFooter/PaginationFooterFunc';
// import { searchTable } from './components/SearchInput/SearchInputFunc';
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
        page: [],
        pageEnd: 10,
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
        //sortObjects(state, rowKey, setState);
    };
    const handlePagination = paging => {
        //pagingTable(state, paging, setState);
    };
    const handleSearch = event => {
        // let searchValue = event.target.value;
        // searchTable(state, searchValue, setState);
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
