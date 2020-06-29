//IMPORT ADDRESSES
import { urlCitiesWithParameter, urlCountries } from './urls';

export const fetchData = (url, dealWithResult, setState) => {
  fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(data => {
      if (data.ok) {
        let response = data.json();
        response.then(result => {
          dealWithResult(result.results, setState);
        });
      } else {
        alert("Wystąpił błąd. Przepraszamy");
      }
    })
    .catch(err => {
      console.error(err);
    });
};

export const getCitiesWithParameter = (result, setState) => {
  let resultArray = [];
  var promisesArray = [];
  for (let i in result) {
    promisesArray.push(
      fetch(urlCitiesWithParameter + result[i].code)
        .then(res => {
          return res.json();
        })
        .then(res => {
          resultArray.push(
            {
              ...result[i],
              ...res.results[0]
            }
          );
        })
        .catch(err => { return console.log(err); })
    );
  }
  Promise.all(promisesArray).then(function () {
    let slicedArr = resultArray.slice(0, 10);
    setState(state => ({ ...state, data: resultArray, page: slicedArr }));
  });
};
export const setCountriesWithCities = setState => {
  fetchData(urlCountries, getCitiesWithParameter, setState);
};
//exports********************************************************************************
export default {
  setCountriesWithCities,
  fetchData,
  getCitiesWithParameter
};