export const fetchData = (url, dealWithTheResult, setState) => {
    fetch(url, { method: "GET" })
        .then(data => {
            if (data.ok) {
                const response = data.json();
                response.then(result => {
                    dealWithTheResult(result, setState);
                });
            } else {
                alert("Wystąpił błąd. Przepraszamy");
            }
        })
        .catch(err => {
            console.error(err);
        });
};