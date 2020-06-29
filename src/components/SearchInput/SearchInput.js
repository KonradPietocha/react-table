import React from 'react';

export default function SearchInput(props) {
    const { handleSearch } = props;

    return (
        <>
            <form>
                <label>Search:
                    <input 
                        onKeyUp={event => handleSearch(event)}
                    />
                </label>
            </form>
        </>
    );
}
