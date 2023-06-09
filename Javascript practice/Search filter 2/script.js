const skills = ["BAI", "CSS", "Javascript", "NodeJs", "ReactJs", "Python"];
const searchInput = document.getElementById("filter-input");
const output = document.querySelector(".output");

window.addEventListener("DOMContentLoaded", loaded);
searchInput.addEventListener("input", searchFilter);

function loaded() {
  let listContainer = `<ul class="list-items">`;
  skills.forEach((items) => {
    listContainer += `<li class="list-item"> ${items} </li>`;
  });
  listContainer += `</ul>`;

  output.innerHTML = listContainer;
}

function searchFilter(e) {
  let empty = "";
  let result = skills.filter((items) =>
    items.toLowerCase().includes(e.target.value.toLowerCase())
  );

  if (result.length > 0) {
    empty = `<ul class="list-items">`;
    result.forEach((items) => {
      empty += `<li> ${items} </li>`;
    });
    empty += `</ul>`;
  } else {
    empty = `<div> walang nakalagay </div>`;
  }
  output.innerHTML = empty;
}
