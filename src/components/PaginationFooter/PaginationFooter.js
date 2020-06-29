import React from 'react';

const style = {
    footerBtns: {
        textAlign: "center",
        cursor: "pointer",
        backgroundColor: "black"
    },
    footerPage: {
        textAlign: "center",
        backgroundColor: "black"
    }
};

export default function PaginationFooter(props) {
    const { handlePagination, state } = props;

    return (
        <>
            <tfoot>
                <tr>
                    <td
                        style={style.footerBtns}
                        onClick={() => handlePagination("prev")}
                        colSpan={
                            state.isMobile ? "1" : "2"
                        }
                    >
                        Previous
                    </td>
                    <td
                        style={style.footerPage}
                        colSpan={
                            state.isMobile ? "1" : "2"
                        }
                    >
                        Page: {state.pageEnd / 10}
                    </td>
                    <td
                        style={style.footerBtns}
                        onClick={() => handlePagination("next")}
                        colSpan={
                            state.isMobile ? "1" : "2"
                        }
                    >
                        Next
                    </td>
                </tr>
            </tfoot>
        </>
    );
}
