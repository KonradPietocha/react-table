import React, { useState, useEffect, useLayoutEffect } from 'react';
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
        backgroundImage: `url(${gold})`,
        minHeight: "100vh",
        fontFamily: '"Parisienne", cursive',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "#282c34"
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
        sorting: "none",
        mobileMode: true
    });
    //functions**************************************************************
    useEffect(() => {
        if (!sessionStorage.getItem("data")) {
            fetchData(urlCurrencyLatest, getDataForTable, setState);
        };
        return;
    }, []);
    useLayoutEffect(() => {
        const updateSize = () => {
            if (window.innerWidth < 600) {
                return setState(state => ({ ...state, mobileMode: true }))
            };
            if (window.innerWidth > 600) {
                return setState(state => ({ ...state, mobileMode: false }))
            };
        };
        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
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
