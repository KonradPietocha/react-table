import React from 'react';

const style = {
    mobileBtns: {
        cursor: "pointer",
        backgroundColor: "#282c34",
        color: "white",
        width: "35vw",
        height: "50px",
        padding: "2px",
        fontSize: "20px"
    },
    btnSelected: {
        backgroundColor: "black",
        color: "white",
        width: "35vw",
        height: "50px",
        padding: "2px",
        fontSize: "20px"
    }
};

export default function MobileButtons(props) {
    const { handleMobileColumn, state } = props;

    return (
        <>
            <div>
                <button
                    style={state.mobileColumn === "city" ?
                        style.btnSelected
                        : style.mobileBtns}
                    onClick={() => handleMobileColumn("city")}
                >
                    City
                </button>
                <button
                    style={state.mobileColumn === "parameter" ?
                        style.btnSelected
                        : style.mobileBtns}
                    onClick={() => handleMobileColumn("parameter")}
                >
                    Parameter
                    </button>
            </div>
            <div>
                <button
                    style={state.mobileColumn === "value" ?
                        style.btnSelected
                        : style.mobileBtns}
                    onClick={() => handleMobileColumn("value")}
                >
                    Value
                    </button>
                <button
                    style={state.mobileColumn === "unit" ?
                        style.btnSelected
                        : style.mobileBtns}
                    onClick={() => handleMobileColumn("unit")}
                >
                    Unit
                    </button>
            </div>
        </>
    );
}
