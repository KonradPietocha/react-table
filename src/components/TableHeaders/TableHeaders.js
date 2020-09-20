import React from 'react';
//components
import Arrow from '../Arrow/Arrow';

const style = {
    header: {
        paddingTop: "20px",
        cursor: "pointer",
        backgroundColor: "darkslategrey",
        color: "white"
    },
    headerChildren: {
        display: "flex",
        flexDirection: "column"
    },
    headerLeft: {
        borderTopLeftRadius: "25px"
    },
    headerRight: {
        borderTopRightRadius: "25px"
    },
    filler: {
        height: "27px"
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
                <div style={style.headerChildren}>
                    Stock exchange date
                    {state.sortingKey === "date" ?
                        <Arrow sorting={state.sorting} />
                        : <span style={style.filler}></span>
                    }
                </div>
            </th>
            <th
                style={style.header}
                onClick={() => handleSorting("base")}
            >
                <div style={style.headerChildren}>
                    Base currency
                    {state.sortingKey === "base" ?
                        <Arrow sorting={state.sorting} />
                        : <span style={style.filler}></span>
                    }
                </div>
            </th>
            <th
                style={style.header}
                onClick={() => handleSorting("currencyCode")}
            >
                <div style={style.headerChildren}>
                    Currency
                    {state.sortingKey === "currencyCode" ?
                        <Arrow sorting={state.sorting} />
                        : <span style={style.filler}></span>
                    }
                </div>
            </th>
            <th
                style={{ ...style.header, ...style.headerRight }}
                onClick={() => handleSorting("value")}
            >
                <div style={style.headerChildren}>
                    Value
                    {state.sortingKey === "value" ?
                        <Arrow sorting={state.sorting} />
                        : <span style={style.filler}></span>
                    }
                </div>
            </th>
        </>
    );
}