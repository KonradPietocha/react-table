import React from 'react';
//components
import Arrow from '../Arrow/Arrow';

const style = {
    header: {
        cursor: "pointer",
        backgroundColor: "darkslategrey",
        color: "white"
    }
};

export default function TableHeader(props) {
    const { state, handleSorting } = props;

    return (
        <>
            <th
                style={style.header}
                onClick={() => handleSorting("code")}
            >
                Stock exchange data
                {state.sortingKey === "code" ?
                    <Arrow sorting={state.sorting} />
                    : null
                }
            </th>
            <th
                style={style.header}
                onClick={() => handleSorting("name")}
            >
                Base currency
                {state.sortingKey === "name" ?
                    <Arrow sorting={state.sorting} />
                    : null
                }
            </th>
            <th
                style={style.header}
                onClick={() => handleSorting("city")}
            >
                Currency
                {state.sortingKey === "city" ?
                    <Arrow sorting={state.sorting} />
                    : null
                }
            </th>
            <th
                style={style.header}
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