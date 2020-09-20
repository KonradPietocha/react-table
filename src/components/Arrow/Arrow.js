import React from 'react';

const style = {
    none: {
        display: "none"
    },
    up: {
        transform: "rotate(-90deg)",
    },
    down: {
        transform: "rotate(90deg)",
    }
};
let arrowStyle = style.none;

export default function Arrow(props) {
    const { sorting } = props;

    switch (sorting) {
        case "desc":
            arrowStyle = style.up;
            break;
        case "asc":
            arrowStyle = style.down;
            break;
        default:
            arrowStyle = style.none;
            break;
    }

    return (
        <>
            <span style={arrowStyle}>
                {">"}
            </span>
        </>
    );
}