import React, { useState, useEffect, useLayoutEffect } from 'react';
//general style
import './App.css';
//components
import Table from './components/Table/Table';
//functions
import { setCountriesWithCities } from './shared/sharedFunctions';
import { sortObjects } from './components/TableHeaders/TableHeadersFunc';
import { pagingTable } from './components/PaginationFooter/PaginationFooterFunc';
import { searchTable } from './components/SearchInput/SearchInputFunc';

function App() {
    //state*****************************************************************
    const [state, setState] = useState({
        data: [],
        page: [],
        pageEnd: 10,
        sortingKey: null,
        sorting: null,
        isMobile: false,
        mobileColumn: "city"
    });
    //functions**************************************************************
    useEffect(() => {
        setCountriesWithCities(setState);
    }, []);
    useLayoutEffect(() => {
        const checkSize = () => {
            if (window.innerWidth < 1000) {
                setState(state => ({ ...state, isMobile: true }));
            } else {
                setState(state => ({ ...state, isMobile: false }));
            }
        }
        window.addEventListener('resize', checkSize);
        checkSize();
        return () => window.removeEventListener('resize', checkSize);
    }, []);

    const handleSorting = rowKey => {
        sortObjects(state, rowKey, setState);
    };
    const handlePagination = paging => {
        pagingTable(state, paging, setState);
    };
    const handleSearch = event => {
        let searchValue = event.target.value;
        searchTable(state, searchValue, setState);
    };
    const handleMobileColumn = key => {
        setState(state => ({ ...state, mobileColumn: key }));
    };
    //component********************************************************************
    return (
        <div className="App">
            <Table
                state={state}
                handleSorting={handleSorting}
                handlePagination={handlePagination}
                handleSearch={handleSearch}
                handleMobileColumn={handleMobileColumn}
            />
        </div>
    );
}

export default App;
