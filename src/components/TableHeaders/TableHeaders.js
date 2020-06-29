import React from 'react';
//components
import Arrow from '../Arrow/Arrow';

const style = {
    header: {
        cursor: "pointer",
        backgroundColor: "black"
    }
};
let mobileColumnTitle = "City";

export default function TableHeader(props) {
    const { state, handleSorting } = props;
    
    if (state.isMobile) {
        switch (state.mobileColumn) {
            case "city":
                mobileColumnTitle = "City";
                break;
            case "parameter":
                mobileColumnTitle = "Parameter";
                break;
            case "value":
                mobileColumnTitle = "Value";
                break;
            case "unit":
                mobileColumnTitle = "Unit";
                break;
            default:
                mobileColumnTitle = "City";
                break;
        };
    };

    return (
        state.isMobile ?
            <>
                <th
                    style={style.header}
                    onClick={() => handleSorting("code")}
                >
                    Country code
                {state.sortingKey === "code" ?
                        <Arrow sorting={state.sorting} />
                        : null
                    }
                </th>
                <th
                    style={style.header}
                    onClick={() => handleSorting("name")}
                >
                    Name
                {state.sortingKey === "name" ?
                        <Arrow sorting={state.sorting} />
                        : null
                    }
                </th>
                <th
                    style={style.header}
                    onClick={() => handleSorting(state.mobileColumn)}
                >
                    {mobileColumnTitle}
                    {state.sortingKey === state.mobileColumn ?
                        <Arrow sorting={state.sorting} />
                        : null
                    }
                </th>
            </>
            :
            <>
                <th
                    style={style.header}
                    onClick={() => handleSorting("code")}
                >
                    Country Code
                {state.sortingKey === "code" ?
                        <Arrow sorting={state.sorting} />
                        : null
                    }
                </th>
                <th
                    style={style.header}
                    onClick={() => handleSorting("name")}
                >
                    Name
                {state.sortingKey === "name" ?
                        <Arrow sorting={state.sorting} />
                        : null
                    }
                </th>
                <th
                    style={style.header}
                    onClick={() => handleSorting("city")}
                >
                    City
                {state.sortingKey === "city" ?
                        <Arrow sorting={state.sorting} />
                        : null
                    }
                </th>
                <th
                    style={style.header}
                    onClick={() => handleSorting("parameter")}
                >
                    Parameter
                {state.sortingKey === "parameter" ?
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
                <th
                    style={style.header}
                    onClick={() => handleSorting("unit")}
                >
                    Unit
                {state.sortingKey === "unit" ?
                        <Arrow sorting={state.sorting} />
                        : null
                    }
                </th>
            </>
    );
}