import React from 'react';
//components
import Table from './Table/Table';
//style
const style = {
    paragraph: {
        textAlign: "center"
    }
};

function CurrencyPage(props) {
    const {
        state,
        handleSorting,
        handlePagination,
        handleSearch
    } = props;

    const dataForTable = [];
    if (state.data.rates) {
        for (const [key, value] of Object.entries(state.data.rates)) {
            dataForTable.push({ currencyCode: key, value: value });
        }
    };

    return (
        <>
            <h1>Currency table</h1>
            <p style={style.paragraph}>
                With a growing number of options for your needs<br />
                Search what you want<br />
                Sort columns<br />
                Change page
            </p>
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
