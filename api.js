const baseURL = 'https://swapi.co/api';

let search = (queryScope, searchTerm) => {
  return new Promise((resolve, reject) => {
    const searchURL = `${baseURL}/${queryScope}/?search=${encodeURI(searchTerm)}`;

    fetch(searchURL)
      .then(response => response.json())
      .then(responseJson => {
        resolve(responseJson);
      })
      .catch(error => {
        reject(error);
      });
  });
};

let fetchFilms = () => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/films`)
      .then(response => response.json())
      .then(responseJson => {
        resolve(responseJson);
      })
      .catch(error => {
        reject(error);
      });
  });
};

let fetchPeople = () => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/people`)
      .then(response => response.json())
      .then(responseJson => {
        resolve(responseJson);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export {search, fetchFilms, fetchPeople};
