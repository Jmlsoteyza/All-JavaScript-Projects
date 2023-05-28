const testAPI = document.getElementById("test");
const imgtest = document.getElementById("imgtest");

fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    testAPI.textContent = data.value;
    imgtest.src = data.icon_url;
  })
  .catch((error) => {
    console.log(error);
  });
