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

export default function SelectInput(props) {
    const { data, isLoading, handleSelect } = props;

    return (
        <form
            style={style.form}
            onSubmit={event => event.preventDefault()}>
            <label>Change base:&nbsp;
                {isLoading
                    ? <input
                        readOnly
                        style={style.input}
                        value={"Loading..."}/>
                    : <select
                        style={style.input}
                        value={data.base}
                        onChange={event => handleSelect(event)}>
                        {data.rates ? Object.keys(data.rates).map((value, key) =>
                            <option
                                key={key}
                                value={value}>
                                {value}
                            </option>
                        ) : null}
                    </select>
                }
            
            </label>
        </form>
    );
}
