var cptRowFromCommande=1;

function prixTiket(id) {
	var tarif = document.getElementById('selectTarif'+id).value;
	var qte = document.getElementById('qte'+id).value;
	var total = document.getElementById('total'+id);
	total.value = tarif * qte;
	prixTiketAll();
}

function addLigneTicket(){
	var row=document.createElement("div");
	row.className="row commande";
	row.id="row"+cptRowFromCommande;
	document.getElementById("formCommande").appendChild(row);

	var col=document.createElement("div");
	col.className="col";
	col.id="col"+cptRowFromCommande;
	row.appendChild(col);

	var col1=document.createElement("div");
	col1.className="col";
	col1.id="col"+cptRowFromCommande;
	row.appendChild(col1);
	var col2=document.createElement("div");
	col2.className="col";
	col2.id="col"+cptRowFromCommande;
	row.appendChild(col2);

	var selct=document.createElement("select");
	selct.className="custom-select";
	selct.id="selectTarif"+cptRowFromCommande;
	selct.setAttribute('onchange', "prixTiket("+cptRowFromCommande+")");
	col.appendChild(selct);

	var op=document.createElement("option");
	op.innerText="Tarif..."
	selct.appendChild(op);

	var op1=document.createElement("option");
	op1.value=13;
	op1.innerText="Normal"
	selct.appendChild(op1);

	var op2=document.createElement("option");
	op2.value=10;
	op2.innerText="Etudiant"
	selct.appendChild(op2);

	var op3=document.createElement("option");
	op3.value=8;
	op3.innerText="Enfant"
	selct.appendChild(op3);

	var newInput = document.createElement('input');
	newInput.setAttribute('type', 'number');
	newInput.setAttribute('id', "qte"+cptRowFromCommande);
	newInput.setAttribute('name',"qte"+cptRowFromCommande);
	newInput.className="form-control";
	newInput.setAttribute('onchange', "prixTiket("+cptRowFromCommande+")");
	col1.appendChild(newInput);

	var newInput2 = document.createElement('input');
	newInput2.setAttribute('type', 'number');
	newInput2.setAttribute('id', "total"+cptRowFromCommande);
	newInput2.setAttribute('name', "total"+cptRowFromCommande);
	newInput2.className="form-control";
	newInput2.disabled="disabled";
	col2.appendChild(newInput2);

	document.getElementById("formCommande").appendChild(document.getElementById("addTicket"));
	document.getElementById("formCommande").appendChild(document.getElementById("labTotalAll"));
	document.getElementById("formCommande").appendChild(document.getElementById("totalAll"));

	cptRowFromCommande++;	
}

function prixTiketAll() {
	var somme=0;
	var allRow=document.getElementsByClassName("commande");
	console.log(allRow);
	for(let i=0;i<allRow.length;i++){
		somme+=parseFloat( document.getElementById("total"+i).value);
	}
	document.getElementById('totalAll').value = somme;
}

// document.getElementById("selectTarif0").addEventListener("change", prixTiket(0));
// document.getElementById("qte0").addEventListener("change", prixTiket(0));
document.getElementById("addTicket").addEventListener("click", addLigneTicket);
