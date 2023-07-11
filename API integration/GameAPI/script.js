// "https://fakestoreapi.com/products";

async function fetchText() {
  let response = await fetch("https://fakestoreapi.com/products");
  let data = await response.json();
  console.log(data);
}

fetchText();
