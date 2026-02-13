import React from 'react';
//components
import Arrow from '../Arrow/Arrow';

const style = {
    header: {
        paddingTop: "20px",
        cursor: "pointer",
        backgroundColor: "darkslategrey",
        color: "white",
        border: "1px solid black",
        fontSize: "20px"
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
    valueStyle: {
        width: "200px"
    }
};

export default function TableHeader(props) {
    const { state, handleSorting } = props;

    return (
        <>
            {state.mobileMode ? null :
                <th
                    style={{ ...style.header, ...style.headerLeft }}
                    onClick={() => handleSorting("date")}
                >
                    <div style={style.headerChildren}>
                        Stock exchange date
                        <Arrow sorting={state.sortingKey === "date" ? state.sorting : null} />
                    </div>
                </th>
            }
            {state.mobileMode ? null :
                <th
                    style={style.header}
                    onClick={() => handleSorting("base")}
                >
                    <div style={style.headerChildren}>
                        Base currency
                        <Arrow sorting={state.sortingKey === "base" ? state.sorting : null} />
                    </div>
                </th>
            }
            <th
                style={
                    state.mobileMode ?
                        { ...style.header, ...style.headerLeft }
                        : style.header
                }
                onClick={() => handleSorting("currencyCode")}
            >
                <div style={style.headerChildren}>
                    Currency
                    <Arrow sorting={state.sortingKey === "currencyCode" ? state.sorting : null} />
                </div>
            </th>
            <th
                style={{ ...style.header, ...style.headerRight, ...style.valueStyle }}
                onClick={() => handleSorting("value")}
            >
                <div style={style.headerChildren}>
                    Value
                    <Arrow sorting={state.sortingKey === "value" ? state.sorting : null} />
                </div>
            </th>
        </>
    );
}