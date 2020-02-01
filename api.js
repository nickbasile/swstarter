const baseURL = 'https://swapi.co/api/';

let search = (queryScope, searchTerm) => {
  return new Promise((resolve, reject) => {
    const searchURL = `${baseURL}${queryScope}/?search=${searchTerm}`;

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

export {search};
