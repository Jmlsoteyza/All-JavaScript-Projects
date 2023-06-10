const itemContainer = document.getElementById("item-list");
const searchInput = document.getElementById("search-box");

const items = [
  "Apple",
  "Orange",
  "Banana",
  "Cherry",
  "Milk",
  "Peanuts",
  "Oil",
  "Tomator",
];
// String to render HTML list item

// Trigger function every time search text is changed
searchInput.onkeyup = (event) => {
  filterBySearch(event.target.value);
};

// String to render HTML list item
const itemHTML = (item) => `<li>${item}</li>`;

// Function to render filtered list
const filterBySearch = (query = "") => {
  var renderHTML = ``;
  // Generate HTML for filtered List
  itemList.forEach((item) => {
    if (item.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
      renderHTML += itemHTML(item);
    }
  });
  // Display updated HTML on screen
  itemContainer.innerHTML = renderHTML;
};

// Load the list of items
filterBySearch();
