let productCode = document.getElementById("productCode");
let product = document.getElementById("product");
let qty = document.getElementById("qty");
let perPrice = document.getElementById("perPrice");

var selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow === null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

// Retrieve the Data
function readFormData() {
  var formData = {};
  formData["productCode"] = productCode.value;
  formData["product"] = product.value;
  formData["qty"] = qty.value;
  formData["perPrice"] = perPrice.value;
  return formData;
}

// Insert the data
function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.productCode;
  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.product;
  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.qty;
  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.perPrice;
  var cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
}

// edit data

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  productCode.value = selectedRow.cells[0].innerHTML;
  product.value = selectedRow.cells[1].innerHTML;
  qty.value = selectedRow.cells[2].innerHTML;
  perPrice.value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.productCode;
  selectedRow.cells[1].innerHTML = formData.product;
  selectedRow.cells[2].innerHTML = formData.qty;
  selectedRow.cells[3].innerHTML = formData.perPrice;
}

function onDelete(td) {
  row = td.parentElement.parentElement.remove();

  resetForm();
}

function resetForm() {
  productCode.value = "";
  product.value = "";
  qty.value = "";
  perPrice.value = "";
}
