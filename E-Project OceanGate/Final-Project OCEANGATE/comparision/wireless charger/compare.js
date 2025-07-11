// JavaScript Document
function item1() {
	var a = document.getElementById('it1').selectedIndex;
	var b = document.getElementById('it2').selectedIndex;
	if (a == b) {
		alert("you cannot compare same products");
		document.getElementById('it1').value = "select";
		document.getElementById('img1').src = "images/que.png";
		document.getElementById('pn1').value = "";
		document.getElementById('pp1').value = "";
		document.getElementById('desc1').value = "";
	}
	else if (a == 1) {
		document.getElementById('img1').src = "images/1stcahrger.jpg";
		document.getElementById('pn1').value = "SanDisk Ixpand Wireless Charger 15W";
		document.getElementById('pp1').value = "$-49.99";
		document.getElementById('desc1').value = "Capacity: 1TB-8TB \n Ultimate performance for gamers, creative professionals.";
	}
	else if (a == 2) {
		document.getElementById('img1').src = "images/2ndcahrger.jpg";
		document.getElementById('pn1').value = "SanDisk Ixpand Wireless Charger Pad 15W (No AC Adaptor)";
		document.getElementById('pp1').value = "$-39.99";
		document.getElementById('desc1').value = "Capacity: 1Tb-8TB \n Reliable performance for everyday computing tasks with 3D NAND.";
	}
}

function item2() {
	var a = document.getElementById('it1').selectedIndex;
	var b = document.getElementById('it2').selectedIndex;

	if (a == b) {
		alert("you cannot compare same products");
		document.getElementById('it2').value = "select";
		document.getElementById('img2').src = "images/que.png";
		document.getElementById('pn2').value = "";
		document.getElementById('pp2').value = "";
		document.getElementById('desc2').value = "";
	}
	else if (b == 1) {
		document.getElementById('img2').src = "images/1stcahrger.jpg";
		document.getElementById('pn2').value = "SanDisk Ixpand Wireless Charger 15W";
		document.getElementById('pp2').value = "$-49.99";
		document.getElementById('desc2').value = "Capacity: 1TB-8TB \n Ultimate performance for gamers, creative professionals.";
	}
	else if (b == 2) {
		document.getElementById('img2').src = "images/2ndcahrger.jpg";
		document.getElementById('pn2').value = "SanDisk Ixpand Wireless Charger Pad 15W (No AC Adaptor)";
		document.getElementById('pp2').value = "$-39.99";
		document.getElementById('desc2').value = "Capacity: 1Tb-8TB \n Reliable performance for everyday computing tasks with 3D NAND.";
	}
}