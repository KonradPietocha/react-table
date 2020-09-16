import React from 'react';
//style
const style = {
    input: {
        borderRadius: "25px",
        height: "23px"
    }
};

export default function SearchInput(props) {
    const { handleSearch, arrayForTable } = props;

    return (
        <>
            <form>
                <label>Search:
                    <input 
                        style={style.input}
                        onKeyUp={event => handleSearch(event, arrayForTable)}
                    />
                </label>
            </form>
        </>
    );
}
