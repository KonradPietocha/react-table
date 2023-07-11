import React from 'react';
//style
const style = {
    input: {
        borderRadius: "25px",
        height: "23px",
        textAlign: "center"
    },
    form: {
        marginBottom: "15px"
    }
};

export default function SearchInput(props) {
    const { handleSearch } = props;

    return (
        <form
            style={style.form}
            onSubmit={event => event.preventDefault()}>
            <label>Search:
                <input 
                    style={style.input}
                    onKeyUp={event => handleSearch(event)}
                />
            </label>
        </form>
    );
}
