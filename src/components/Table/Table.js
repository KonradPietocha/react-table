import React from 'react';
//components
import TableHeader from '../TableHeaders/TableHeaders';
import PaginationFooter from '../PaginationFooter/PaginationFooter';
import SearchInput from '../SearchInput/SearchInput';
import MobileButtons from '../MobileButtons/MobileButtons';

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
    const { state, handleSorting, handlePagination, handleSearch, handleMobileColumn } = props;

    return (
        <>
            {state.isMobile ?
                <MobileButtons
                    handleMobileColumn={handleMobileColumn}
                    state={state}
                />
                : null}
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
                    {state.page.map((value, key) => (
                        state.isMobile ?
                            <tr key={key}>
                                <td>{value.code}</td>
                                <td>{value.name}</td>
                                {state.mobileColumn === "value" ?
                                    <td><div style={style.numCell}>{value[state.mobileColumn]}</div></td>
                                    : <td>{value[state.mobileColumn]}</td>
                                }
                            </tr>
                            :
                            <tr key={key}>
                                <td>{value.code}</td>
                                <td>{value.name}</td>
                                <td>{value.city}</td>
                                <td>{value.parameter}</td>
                                <td><div style={style.numCell}>{value.value}</div></td>
                                <td>{value.unit}</td>
                            </tr>
                    ))}
                </tbody>
                <PaginationFooter
                    handlePagination={handlePagination}
                    state={state}
                />
            </table>
        </>
    );
}
