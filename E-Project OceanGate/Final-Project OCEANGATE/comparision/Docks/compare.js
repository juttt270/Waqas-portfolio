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
		document.getElementById('img1').src = "images/sandisk docs1.jpg";
		document.getElementById('pn1').value = "PRO-BLADE TRANSPORT";
		document.getElementById('pp1').value = "$-54.99";
		document.getElementById('desc1').value = "Capacity: 1TB-8TB \n Ultimate performance for gamers, creative professionals.";
	}
	else if (a == 2) {
		document.getElementById('img1').src = "images/sandisk docs2.jpg";
		document.getElementById('pn1').value = "PRO-BLADE STATION";
		document.getElementById('pp1').value = "$-439.99";
		document.getElementById('desc1').value = "Capacity: 1Tb-8TB \n Reliable performance for everyday computing tasks with 3D NAND.";
	}

	else if (a == 3) {
		document.getElementById('img1').src = "images/sandisk docs3.jpg";
		document.getElementById('pn1').value = "WD_BLACK D50 Game Dock";
		document.getElementById('pp1').value = "$-179.99";
		document.getElementById('desc1').value = "Capacity: 240GB \n Affordable SSD with great speed for everyday computing.";
	}

	else if (a == 4) {
		document.getElementById('img1').src = "images/sandisk docs4.jpg";
		document.getElementById('pn1').value = "PRO-DOCK 4";
		document.getElementById('pp1').value = "$-339.99";
		document.getElementById('desc1').value = "Capacity: 1TB \n 3D NAND for better performance, endurance, and power efficiency.";
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
		document.getElementById('img2').src = "images/sandisk docs1.jpg";
		document.getElementById('pn2').value = "PRO-BLADE TRANSPORT";
		document.getElementById('pp2').value = "$-54.99";
		document.getElementById('desc2').value = "Capacity: 1TB-8TB \n Ultimate performance for gamers, creative professionals.";
	}
	else if (b == 2) {
		document.getElementById('img2').src = "images/sandisk docs2.jpg";
		document.getElementById('pn2').value = "PRO-BLADE STATION";
		document.getElementById('pp2').value = "$-439.99";
		document.getElementById('desc2').value = "Capacity: 1Tb-8TB \n Reliable performance for everyday computing tasks with 3D NAND.";
	}

	else if (b == 3) {
		document.getElementById('img2').src = "images/sandisk docs3.jpg";
		document.getElementById('pn2').value = "WD_BLACK D50 Game Dock";
		document.getElementById('pp2').value = "$-179.99";
		document.getElementById('desc2').value = "Capacity: 240GB \n Affordable SSD with great speed for everyday computing.";
	}

	else if (b == 4) {
		document.getElementById('img2').src = "images/sandisk docs4.jpg";
		document.getElementById('pn2').value = "PRO-DOCK 4";
		document.getElementById('pp2').value = "$-339.99";
		document.getElementById('desc2').value = "Capacity: 1TB \n 3D NAND for better performance, endurance, and power efficiency.";
	}
}