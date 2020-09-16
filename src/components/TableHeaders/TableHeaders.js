import React from 'react';
//components
import Arrow from '../Arrow/Arrow';

const style = {
    header: {
        cursor: "pointer",
        backgroundColor: "darkslategrey",
        color: "white"
    },
    headerLeft: {
        borderTopLeftRadius: "25px"
    },
    headerRight: {
        borderTopRightRadius: "25px"
    }
};

export default function TableHeader(props) {
    const { state, handleSorting } = props;

    return (
        <>
            <th
                style={{ ...style.header, ...style.headerLeft }}
                onClick={() => handleSorting("date")}
            >
                Stock exchange date
                {state.sortingKey === "date" ?
                    <Arrow sorting={state.sorting} />
                    : null
                }
            </th>
            <th
                style={style.header}
                onClick={() => handleSorting("base")}
            >
                Base currency
                {state.sortingKey === "base" ?
                    <Arrow sorting={state.sorting} />
                    : null
                }
            </th>
            <th
                style={style.header}
                onClick={() => handleSorting("currencyCode")}
            >
                Currency
                {state.sortingKey === "currencyCode" ?
                    <Arrow sorting={state.sorting} />
                    : null
                }
            </th>
            <th
                style={{ ...style.header, ...style.headerRight }}
                onClick={() => handleSorting("value")}
            >
                Value
                {state.sortingKey === "value" ?
                    <Arrow sorting={state.sorting} />
                    : null
                }
            </th>
        </>
    );
}