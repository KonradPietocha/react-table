import React from 'react';
//components
import TableHeader from '../TableHeaders/TableHeaders';
import PaginationFooter from '../PaginationFooter/PaginationFooter';
import SearchInput from '../SearchInput/SearchInput';
//functions
import { getDataFromSearch } from '../../shared/functions/getDataFromSearch';

const style = {
    table: {
        width: "90vw"
    },
    numCell: {
        display: "flex",
        justifyContent: "flex-end"
    }
};

export default function Table(props) {
    const { arrayForTable, state, handleSorting, handlePagination, handleSearch } = props;

    const rowsEnd = state.rowsPerPage * state.page;
    const rowsStart = rowsEnd - state.rowsPerPage;
    const processedArray = getDataFromSearch(state.searchText, arrayForTable);

    return (
        <>
            <SearchInput
                handleSearch={handleSearch}
            />
            <table style={style.table}>
                <thead>
                    <tr>
                        <TableHeader
                            handleSorting={handleSorting}
                            state={state}
                        />
                    </tr>
                </thead>
                <tbody>
                    {processedArray.slice(rowsStart, rowsEnd).map((value, key) => (
                            <tr key={key}>
                                <td>{state.data.date}</td>
                                <td>{state.data.base}</td>
                                <td>{value.currencyCode}</td>
                                <td>{value.value}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <PaginationFooter
                handlePagination={handlePagination}
                state={state}
                arrayLength={processedArray.length}
            />
        </>
    );
}
