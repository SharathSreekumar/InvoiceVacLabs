function overrideLink(){
	if(document.getElementById("product").options[document.getElementById("product").selectedIndex].text != "Custom"){
		var index = document.getElementById("product").selectedIndex;
		document.getElementById("overLink").href = "/products/"+ index +"/edit";
		document.getElementById("overLink").style.display = "block";
		document.getElementById("invoice_rate").value = document.getElementById("product").value;
	}else{
		document.getElementById("overLink").href = "";
		document.getElementById("overLink").style.display = "none";
		document.getElementById("invoice_rate").value = 10;
	}
}

function amount(){
	var rate  = document.getElementById("invoice_rate").value;
	var quantity = document.getElementById("invoice_quantity").value;
	document.getElementById("invoice_amount").value = rate * quantity;
}