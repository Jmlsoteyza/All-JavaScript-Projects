const msg = document.getElementById("msg");
const posts = document.getElementById("post");
const form = document.getElementById("form");
const input = document.getElementById("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputValue();
});

const inputValue = () => {
  if (input.value === "") {
    msg.innerHTML = "Should contain the inputs";
    console.log("fail");
  } else {
    console.log("success");
    msg.innerHTML = "";

    acceptInputObject();
  }
};

const inputObject = {};

const acceptInputObject = () => {
  inputObject["text"] = input.value;

  addInputObject();
};

const addInputObject = () => {
  posts.innerHTML += `
    <div>
    <p>${inputObject.text}</p>
    <span class="options">
      <i onClick="editInputObject(this)" class="fas fa-edit"></i>
      <i onClick="deleteInputObject(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
    `;
  input.value = "";
};

const deleteInputObject = (e) => {
  e.parentElement.parentElement.remove();
};

const editInputObject = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
