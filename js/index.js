let db = [];

function onFormSubmit() {
  var formData = readFormData();
  const newdb = db.filter((data) => data.emCode != formData.emCode);
  newdb.push(formData);
  db = newdb;
  insertNewRecord();
  resetForm();
}

function readFormData() {
  return {
    emProduct: document.getElementById("emProduct").value,
    emCode: document.getElementById("emCode").value
      ? document.getElementById("emCode").value
      : Math.floor(Math.random() * 1000),
    emEmpresa: document.getElementById("emEmpresa").value,
    emPrice: document.getElementById("emPrice").value,
  };
}

function insertNewRecord() {
  var table = document.querySelector("tbody");
  table.innerHTML = "";
  db.forEach((data) => {
    table.innerHTML += `
		<td>${data.emProduct}</td>
		<td>${data.emCode}</td>
		<td>${data.emEmpresa}</td>
		<td>${data.emPrice}</td>
		<td><a onClick="onEdit(event)">Edit</a>
		<a onClick="onDelete(event)">Delete</a></td>
		
	`;
  });
}

function resetForm(emProduct = "", emEmpresa = "", emPrice = "", emCode = "") {
  document.getElementById("emProduct").value = emProduct;
  document.getElementById("emCode").value = emCode;
  document.getElementById("emEmpresa").value = emEmpresa;
  document.getElementById("emPrice").value = emPrice;
}

const onEdit = function (event) {
  const rowTag = event.target.parentElement.parentElement;
  const id = rowTag.children[1].innerText;
  const finded = db.find((data) => data.emCode == id);
  if (finded) {
    const { emProduct, emEmpresa, emPrice, emCode } = finded;
    resetForm(emProduct, emEmpresa, emPrice, emCode);
    console.log(finded);
  }
};

const onDelete = function (event) {
  const rowTag = event.target.parentElement.parentElement;
  const id = rowTag.children[1].innerText;

  const newDB = db.filter((data) => data.emCode != id);

  db = newDB;
  insertNewRecord();
};
