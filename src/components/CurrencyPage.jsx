import React from 'react';
//components
import Table from './Table/Table';
//style
const style = {
    paragraph: {
        textAlign: "center"
    }
};

const mapDataToCurrencyArray = (data) => {
    return data
        ? Object.entries(data).map(([key, value]) => ({ currencyCode: key, value: value }))
        : [];
}

function CurrencyPage(props) {
    const {
        state,
        handleSorting,
        handlePagination,
        handleSearch,
        handleSelect
    } = props;

    return (
        <>
            <h1>Currency table</h1>
            {state.data.isDemo
                ? <p style={style.paragraph}>
                    Oops, something went wrong with the download. The presented data is a demo.
                </p>
                : <p style={style.paragraph}>
                    The latest data for the {state.data.base} currency.
                </p>
            }
            <Table
                arrayForTable={mapDataToCurrencyArray(state.data.rates)}
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
