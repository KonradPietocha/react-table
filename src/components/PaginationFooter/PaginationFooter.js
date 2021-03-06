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
    const { handlePagination, state, arrayLength } = props;

    return (
        <>
            <div style={style.footer}>
                <div
                    style={{ ...style.footerBtns, ...style.footerLeft }}
                    onClick={() => handlePagination("prev", arrayLength)}
                >
                    Previous
                    </div>
                <div
                    style={style.footerPage}
                >
                    Page: {state.page}
                </div>
                <div
                    style={{ ...style.footerBtns, ...style.footerRight }}
                    onClick={() => handlePagination("next", arrayLength)}
                >
                    Next
                    </div>
            </div>
        </>
    );
}
