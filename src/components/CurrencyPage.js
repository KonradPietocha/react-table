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
        handleSearch,
        handleSelect
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
                The latest data for the {state.data.base} currency.<br />
                More options and possibilities coming soon.
            </p>
            <Table
                arrayForTable={dataForTable}
                state={state}
                handleSorting={handleSorting}
                handlePagination={handlePagination}
                handleSearch={handleSearch}
                handleSelect={handleSelect}
            />
        </>
    );
}

export default CurrencyPage;
