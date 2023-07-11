import React from 'react';

const style = {
    height: '25px'
};

export default function Arrow(props) {
    const { sorting } = props;

    switch (sorting) {
        case "desc":
            return <div style={style}>&uarr;</div>;
        case "asc":
            return <div style={style}>&darr;</div>;
        default:
            return <div style={style}></div>;
    }
}
