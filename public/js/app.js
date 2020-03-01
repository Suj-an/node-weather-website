const getData = address => {
  return fetch(`/weather?address=${address}`)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch data");
      }
    })
    .then(data => data);
};

document.querySelector("#search-form").addEventListener("submit", e => {
  e.preventDefault();
  const address = e.target.location.value;
  getData(address)
    .then(data => {
      if (data.error) {
        return (document.querySelector(
          "#datas"
        ).innerHTML = `<h2>${data.error}</h2>`);
      }
      document.querySelector(
        "#datas"
      ).innerHTML = `<h2>${data.location}</h2><p>${data.forecast}</p>`;
    })
    .catch(error => {
      console.log(error);
    });
});
