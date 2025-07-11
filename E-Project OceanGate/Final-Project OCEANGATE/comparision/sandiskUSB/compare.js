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
		document.getElementById('img1').src = "images/cardimg1.png";
		document.getElementById('pn1').value = "SanDisk Ultra Dual Drive Go USB Type-C™ - 32GB (Black)";
		document.getElementById('pp1').value = "$-10.99";
		document.getElementById('desc1').value = "Capacity: 1TB-8TB \n Ultimate performance for gamers, creative professionals.";
	}
	else if (a == 2) {
		document.getElementById('img1').src = "images/cardimg2.png";
		document.getElementById('pn1').value = "SanDisk Ultra Dual Drive Luxe USB Type-C™ Flash Drive - 32GB (Silver)";
		document.getElementById('pp1').value = "$-13.99";
		document.getElementById('desc1').value = "Capacity: 1Tb-8TB \n Reliable performance for everyday computing tasks with 3D NAND.";
	}

	else if (a == 3) {
		document.getElementById('img1').src = "images/cardimg3.png";
		document.getElementById('pn1').value = "Ultra Dual Drive USB Type-C - 32GB";
		document.getElementById('pp1').value = "$-11.99";
		document.getElementById('desc1').value = "Capacity: 240GB \n Affordable SSD with great speed for everyday computing.";
	}

	else if (a == 4) {
		document.getElementById('img1').src = "images/cardimg4.png";
		document.getElementById('pn1').value = "SanDisk Ultra Shift USB 3.2 Gen 1 Flash Drive";
		document.getElementById('pp1').value = "$-13.99";
		document.getElementById('desc1').value = "Capacity: 1TB \n 3D NAND for better performance, endurance, and power efficiency.";
	}
	else if (a == 5) {
		document.getElementById('img1').src = "images/cardimg5.png";
		document.getElementById('pn1').value = "iXpand Flash Drive Go - 64GB";
		document.getElementById('pp1').value = "$-39.99";
		document.getElementById('desc1').value = "Capacity: 2Tb \n High-speed storage for gaming, video editing, and other demanding task.";
	}
	else if (a == 6) {
		document.getElementById('img1').src = "images/cardimg6.png";
		document.getElementById('pn1').value = "SanDisk Extreme PRO USB 3.2 Solid State Flash Drive - 128GB";
		document.getElementById('pp1').value = "$-32.99";
		document.getElementById('desc1').value = "Capacity: 2TB \n Enhanced performance and reliability with 3D NAND technology.";
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
		document.getElementById('img2').src = "images/cardimg1.png";
		document.getElementById('pn2').value = "SanDisk Ultra Dual Drive Go USB Type-C™ - 32GB (Black)";
		document.getElementById('pp2').value = "$-10.99";
		document.getElementById('desc2').value = "Capacity: 1TB-8TB \n Ultimate performance for gamers, creative professionals.";
	}
	else if (b == 2) {
		document.getElementById('img2').src = "images/cardimg2.png";
		document.getElementById('pn2').value = "SanDisk Ultra Dual Drive Luxe USB Type-C™ Flash Drive - 32GB (Silver)";
		document.getElementById('pp2').value = "$-13.99";
		document.getElementById('desc2').value = "Capacity: 1Tb-8TB \n Reliable performance for everyday computing tasks with 3D NAND.";
	}

	else if (b == 3) {
		document.getElementById('img2').src = "images/cardimg3.png";
		document.getElementById('pn2').value = "Ultra Dual Drive USB Type-C - 32GB";
		document.getElementById('pp2').value = "$-11.99";
		document.getElementById('desc2').value = "Capacity: 240GB \n Affordable SSD with great speed for everyday computing.";
	}

	else if (b == 4) {
		document.getElementById('img2').src = "images/cardimg4.png";
		document.getElementById('pn2').value = "SanDisk Ultra Shift USB 3.2 Gen 1 Flash Drive";
		document.getElementById('pp2').value = "$-13.99";
		document.getElementById('desc2').value = "Capacity: 1TB \n 3D NAND for better performance, endurance, and power efficiency.";
	}
	else if (b == 5) {
		document.getElementById('img2').src = "images/cardimg5.png";
		document.getElementById('pn2').value = "iXpand Flash Drive Go - 64GB";
		document.getElementById('pp2').value = "$-39.99";
		document.getElementById('desc2').value = "Capacity: 2Tb \n High-speed storage for gaming, video editing, and other demanding task.";
	}
	else if (b == 6) {
		document.getElementById('img2').src = "images/cardimg6.png";
		document.getElementById('pn2').value = "SanDisk Extreme PRO USB 3.2 Solid State Flash Drive - 128GB";
		document.getElementById('pp2').value = "$-32.99";
		document.getElementById('desc2').value = "Capacity: 2TB \n Enhanced performance and reliability with 3D NAND technology.";
	}
}