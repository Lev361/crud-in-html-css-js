function onFormSubmit(){
	var formData = readFormData();
	insertNewRecord(formData);
	resetForm();
}

function readFormData(){
	var formData = {}
	
	formData["emProduct"] = document.getElementById("emProduct").value;
	formData["emCode"]		=	document.getElementById("emCode").value = Math.floor(Math.random()* 1000);
	formData["emEmpresa"] = document.getElementById("emEmpresa").value;
	formData["emPrice"]    = document.getElementById("emPrice").value;
	return formData;
}

function insertNewRecord(data){
	var table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
	var newRow = table.insertRow(table.lenght);
	
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.emProduct;
	
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.emCode;
	
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.emEmpresa;
	
	cell4 = newRow.insertCell(3);
	cell4.innerHTML = data.emPrice;
	
	cell4 = newRow.insertCell(4);
	cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
										 <a>Delete</a>`;
}

function resetForm(){
	document.getElementById("emProduct").value = "";
	document.getElementById("emCode").value    = "";
  document.getElementById("emEmpresa").value = "";
  document.getElementById("emPrice").value = "";
}


function onEdit(td){
	//Edit
}