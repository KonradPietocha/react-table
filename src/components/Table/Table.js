import React from 'react';
//components
import TableHeader from '../TableHeaders/TableHeaders';
import PaginationFooter from '../PaginationFooter/PaginationFooter';
import SearchInput from '../SearchInput/SearchInput';
//functions
import { getDataFromSearch } from '../../shared/functions/getDataFromSearch';
import { sortObjects } from '../../shared/functions/sortObjects';
//style
const style = {
    table: {
        width: "90vw"
    },
    tableCell: {
        border: "1px solid black",
        fontSize: "20px"
    },
    numCell: {
        textAlign: "end"
    }
};

export default function Table(props) {
    const { arrayForTable, state, handleSorting, handlePagination, handleSearch } = props;

    const rowsEnd = state.rowsPerPage * state.page;
    const rowsStart = rowsEnd - state.rowsPerPage;
    const processedArray = getDataFromSearch(state.searchText, arrayForTable);
    if (processedArray !== []) sortObjects(state, processedArray);

    return (
        <>
            <SearchInput
                handleSearch={handleSearch}
            />
            <table style={style.table}>
                <thead>
                    {state.mobileMode ?
                        <tr>
                            <th>Date: {state.data.date}</th>
                            <th>Base: {state.data.base}</th>
                        </tr> : null
                    }
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
                            {state.mobileMode ? null :
                                <td style={style.tableCell}>
                                    {state.data.date}
                                </td>
                            }
                            {state.mobileMode ? null :
                                <td style={style.tableCell}>
                                    {state.data.base}
                                </td>
                            }
                            <td style={style.tableCell}>
                                {value.currencyCode}
                            </td>
                            <td style={{ ...style.numCell, ...style.tableCell }}>
                                {value.value.toFixed(2)}
                            </td>
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
