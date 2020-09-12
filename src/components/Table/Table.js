import React from 'react';
//components
import TableHeader from '../TableHeaders/TableHeaders';
import PaginationFooter from '../PaginationFooter/PaginationFooter';
import SearchInput from '../SearchInput/SearchInput';

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
                    {arrayForTable.map((value, key) => (
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
            />
        </>
    );
}
