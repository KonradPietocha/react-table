import React from 'react';
import { SORTING_TYPE } from '../../shared/functions/sortObjects';

const style = {
    height: '25px'
};

export default function Arrow(props) {
    const { sorting } = props;

    switch (sorting) {
        case SORTING_TYPE.DESC:
            return <div style={style}>&uarr;</div>;
        case SORTING_TYPE.ASC:
            return <div style={style}>&darr;</div>;
        default:
            return <div style={style}></div>;
    }
}
