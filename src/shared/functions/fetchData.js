import { demoData } from "../demo";
import { API_KEY } from '../urls';

export const fetchData = (url, dealWithTheResult, setState) => {
    fetch(url, {
        method: "GET",
        headers: {
            apikey: API_KEY
        }
    })
        .then(data => {
            if (data.ok) {
                const response = data.json();
                response.then(result => {
                    if (!result.success) {
                        dealWithTheResult(demoData, setState);
                    } else {
                        dealWithTheResult(result, setState);
                    }
                });
            } else {
                dealWithTheResult(demoData, setState);
            }
        })
        .catch(err => {
            console.error('TEST', err);
            dealWithTheResult(demoData, setState);
        });
};
