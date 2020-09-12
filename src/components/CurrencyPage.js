import React from 'react';
//components
import Table from './Table/Table';
//variables
const dataForTable = [];

function CurrencyPage(props) {
    const {
        state,
        handleSorting,
        handlePagination,
        handleSearch
    } = props;

    for (const [key, value] of Object.entries(state.data.rates)) {
        dataForTable.push({currencyCode: key, value: value});
    }

    return (
        <>
            <h1>Currency table</h1>
            <p>With a growing number of options for your needs</p>
            <Table
                arrayForTable={dataForTable}
                state={state}
                handleSorting={handleSorting}
                handlePagination={handlePagination}
                handleSearch={handleSearch}
            />
        </>
    );
}

export default CurrencyPage;
