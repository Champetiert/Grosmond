function activeMenu(onglet) {
	var onglet1 = document.getElementById("onglet1");
	var onglet2 = document.getElementById("onglet2");
	var onglet3 = document.getElementById("onglet3");
	var onglet4 = document.getElementById("onglet4");
	var onglet5 = document.getElementById("onglet5");


	switch (onglet) {
		case "onglet1":
			onglet1.className = "ongletOn";
			onglet2.className = "ongletOff";
			onglet3.className = "ongletOff";
			onglet4.className = "ongletOff";
			onglet5.className = "ongletOff";
			break;

		case "onglet2":
			onglet1.className = "ongletOff";
			onglet2.className = "ongletOn";
			onglet3.className = "ongletOff";
			onglet4.className = "ongletOff";
			onglet5.className = "ongletOff";
			break;

		case "onglet3":
			onglet1.className = "ongletOff";
			onglet2.className = "ongletOff";
			onglet3.className = "ongletOn";
			onglet4.className = "ongletOff";
			onglet5.className = "ongletOff";
			break;


		case "onglet4":
			onglet1.className = "ongletOff";
			onglet2.className = "ongletOff";
			onglet3.className = "ongletOff";
			onglet4.className = "ongletOn";
			onglet5.className = "ongletOff";
			break;

		case "onglet5":
			onglet1.className = "ongletOff";
			onglet2.className = "ongletOff";
			onglet3.className = "ongletOff";
			onglet4.className = "ongletOff";
			onglet5.className = "ongletOn";
			break;

	}

}
function myFunction() {
	var onglet1 = document.getElementById("onglet1");
	var onglet2 = document.getElementById("onglet2");
	var onglet3 = document.getElementById("onglet3");
	var onglet4 = document.getElementById("onglet4");
	var onglet5 = document.getElementById("onglet5");
	
console.log(document.documentElement.scrollTop);
if (document.body.scrollTop > 4005 || document.documentElement.scrollTop > 4005) {
	var onglet = "onglet5";
} else {
	if (document.body.scrollTop > 3018 || document.documentElement.scrollTop > 3018) {
		var onglet = "onglet4";
	} else {
		if (document.body.scrollTop > 2343 || document.documentElement.scrollTop > 2343) {
			var onglet = "onglet3";
		} else {
			if (document.body.scrollTop > 1273 || document.documentElement.scrollTop > 1273) {
				var onglet = "onglet2";
			} else {
				var onglet = "onglet1";
			}
		}
	}
}	
	switch (onglet) {
		case "onglet1":
			onglet1.className = "ongletOn";
			onglet2.className = "ongletOff";
			onglet3.className = "ongletOff";
			onglet4.className = "ongletOff";
			onglet5.className = "ongletOff";
			break;

		case "onglet2":
			onglet1.className = "ongletOff";
			onglet2.className = "ongletOn";
			onglet3.className = "ongletOff";
			onglet4.className = "ongletOff";
			onglet5.className = "ongletOff";
			break;

		case "onglet3":
			onglet1.className = "ongletOff";
			onglet2.className = "ongletOff";
			onglet3.className = "ongletOn";
			onglet4.className = "ongletOff";
			onglet5.className = "ongletOff";
			break;


		case "onglet4":
			onglet1.className = "ongletOff";
			onglet2.className = "ongletOff";
			onglet3.className = "ongletOff";
			onglet4.className = "ongletOn";
			onglet5.className = "ongletOff";
			break;

		case "onglet5":
			onglet1.className = "ongletOff";
			onglet2.className = "ongletOff";
			onglet3.className = "ongletOff";
			onglet4.className = "ongletOff";
			onglet5.className = "ongletOn";
			break;

	}
}
