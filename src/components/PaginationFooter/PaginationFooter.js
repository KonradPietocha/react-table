import React from 'react';

const style = {
    footer: {
        display: "flex",
        width: "90vw"
    },
    footerBtns: {
        textAlign: "center",
        cursor: "pointer",
        backgroundColor: "darkslategrey",
        color: "white",
        border: "1px solid black",
        width: "40vw"
    },
    footerPage: {
        textAlign: "center",
        backgroundColor: "darkslategrey",
        color: "white",
        border: "1px solid black",
        width: "10vw"
    },
    footerRight: {
        borderBottomRightRadius: "25px"
    },
    footerLeft: {
        borderBottomLeftRadius: "25px"
    }
};

export default function PaginationFooter(props) {
    const { handlePagination, state, pageLimit } = props;

    const getPagesArray = (limit) => {
        const pages = [];
        for (let i = 1; i <= limit; i++) {
            pages.push(i)
        }
        return pages;
    };

    return (
        <>
            <div style={style.footer}>
                <div
                    style={{ ...style.footerBtns, ...style.footerLeft }}
                    onClick={() => handlePagination("prev", pageLimit)}
                >
                    Previous
                    </div>
                <div
                    style={style.footerPage}
                >
                    <form
                        onSubmit={event => event.preventDefault()}>
                        <label>Page:&nbsp;
                            <select
                                value={state.page}
                                onChange={event => handlePagination(event.target.value, pageLimit)}>
                                {pageLimit ? getPagesArray(pageLimit).map((value, key) =>
                                    <option
                                        key={key}
                                        value={value}>
                                        {value}
                                    </option>
                                ) : null}
                            </select>
                        </label>
                    </form>
                </div>
                <div
                    style={{ ...style.footerBtns, ...style.footerRight }}
                    onClick={() => handlePagination("next", pageLimit)}
                >
                    Next
                    </div>
            </div>
        </>
    );
}
