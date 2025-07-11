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
		document.getElementById('pn1').value = "Lexar® Professional SILVER SE CFexpress™ Type B Card";
		document.getElementById('pp1').value = "$-89.99";
		document.getElementById('desc1').value = "Capacity: 1TB-8TB \n Ultimate performance for gamers, creative professionals.";
	}
	else if (a == 2) {
		document.getElementById('img1').src = "images/cardimg2.png";
		document.getElementById('pn1').value = "Lexar® Professional GOLD microSDXC™ UHS-II Card";
		document.getElementById('pp1').value = "$-63.99";
		document.getElementById('desc1').value = "Capacity: 1Tb-8TB \n Reliable performance for everyday computing tasks with 3D NAND.";
	}

	else if (a == 3) {
		document.getElementById('img1').src = "images/cardimg3.png";
		document.getElementById('pn1').value = "Lexar® Professional CFexpress™ Type B Card DIAMOND Series";
		document.getElementById('pp1').value = "$-44.99";
		document.getElementById('desc1').value = "Capacity: 240GB \n Affordable SSD with great speed for everyday computing.";
	}

	else if (a == 4) {
		document.getElementById('img1').src = "images/cardimg4.png";
		document.getElementById('pn1').value = "Lexar® Professional SILVER PLUS microSDXC™ UHS-I Card";
		document.getElementById('pp1').value = "$-49.99";
		document.getElementById('desc1').value = "Capacity: 1TB \n 3D NAND for better performance, endurance, and power efficiency.";
	}
	else if (a == 5) {
		document.getElementById('img1').src = "images/cardimg5.png";
		document.getElementById('pn1').value = "Lexar® Professional 1066x microSDXC™ UHS-I Card SILVER Series";
		document.getElementById('pp1').value = "$-84.99";
		document.getElementById('desc1').value = "Capacity: 2Tb \n High-speed storage for gaming, video editing, and other demanding task.";
	}
	else if (a == 6) {
		document.getElementById('img1').src = "images/cardimg6.png";
		document.getElementById('pn1').value = "Lexar® Professional CFexpress™ Type B Card GOLD Series";
		document.getElementById('pp1').value = "$-32.99";
		document.getElementById('desc1').value = "Capacity: 2TB \n Enhanced performance and reliability with 3D NAND technology.";
	}
	else if (a == 7) {
		document.getElementById('img1').src = "images/cardimg7.png";
		document.getElementById('pn1').value = "Lexar® Professional CFexpress™ Type A Card GOLD Series";
		document.getElementById('pp1').value = "$-52.99";
		document.getElementById('desc1').value = "Capacity: 1TB \nAffordable and reliable storage for every day.";
	}
	else if (a == 8) {
		document.getElementById('img1').src = "images/cardimg8.png";
		document.getElementById('pn1').value = "Lexar® High-Performance 633x microSDHC™/ microSDXC™ UHS-I Card BLUE Series";
		document.getElementById('pp1').value = "$-49.99";
		document.getElementById('desc1').value = "Capacity: 2TB \n >Premium performance with NVMe for high-end tasks.";
	}
	else if (a == 9) {
		document.getElementById('img1').src = "images/cardimg1.png";
		document.getElementById('pn1').value = "Lexar® PLAY microSDXC™ UHS-I Card";
		document.getElementById('pp1').value = "$-149.99";
		document.getElementById('desc1').value = "Capacity: 500GB \n >M.2 SSD with fast speeds for optimal.";
	}
	else if (a == 10) {
		document.getElementById('img1').src = "images/cardimg10.png";
		document.getElementById('pn1').value = "Lexar® PLAY microSDXC™ UHS-I Card";
		document.getElementById('pp1').value = "$-139.99";
		document.getElementById('desc1').value = "Capacity: 1TBB \n >M.2 SSD with fast speeds for optimal.";
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
		document.getElementById('pn2').value = "Lexar® Professional SILVER SE CFexpress™ Type B Card";
		document.getElementById('pp2').value = "$-89.99";
		document.getElementById('desc2').value = "Capacity: 1TB-8TB \n Ultimate performance for gamers, creative professionals.";
	}
	else if (b == 2) {
		document.getElementById('img2').src = "images/cardimg2.png";
		document.getElementById('pn2').value = "Lexar® Professional GOLD microSDXC™ UHS-II Card";
		document.getElementById('pp2').value = "$-63.99";
		document.getElementById('desc2').value = "Capacity: 1Tb-8TB \n Reliable performance for everyday computing tasks with 3D NAND.";
	}

	else if (b == 3) {
		document.getElementById('img2').src = "images/cardimg3.png";
		document.getElementById('pn2').value = "Lexar® Professional CFexpress™ Type B Card DIAMOND Series";
		document.getElementById('pp2').value = "$-44.99";
		document.getElementById('desc2').value = "Capacity: 240GB \n Affordable SSD with great speed for everyday computing.";
	}

	else if (b == 4) {
		document.getElementById('img2').src = "images/cardimg4.png";
		document.getElementById('pn2').value = "Lexar® Professional SILVER PLUS microSDXC™ UHS-I Card";
		document.getElementById('pp2').value = "$-49.99";
		document.getElementById('desc2').value = "Capacity: 1TB \n 3D NAND for better performance, endurance, and power efficiency.";
	}
	else if (b == 5) {
		document.getElementById('img2').src = "images/cardimg5.png";
		document.getElementById('pn2').value = "Lexar® Professional 1066x microSDXC™ UHS-I Card SILVER Series";
		document.getElementById('pp2').value = "$-84.99";
		document.getElementById('desc2').value = "Capacity: 2Tb \n High-speed storage for gaming, video editing, and other demanding task.";
	}
	else if (b == 6) {
		document.getElementById('img2').src = "images/cardimg6.png";
		document.getElementById('pn2').value = "Lexar® Professional CFexpress™ Type B Card GOLD Series";
		document.getElementById('pp2').value = "$-32.99";
		document.getElementById('desc2').value = "Capacity: 2TB \n Enhanced performance and reliability with 3D NAND technology.";
	}
	else if (b == 7) {
		document.getElementById('img2').src = "images/cardimg7.png";
		document.getElementById('pn2').value = "Lexar® Professional CFexpress™ Type A Card GOLD Series";
		document.getElementById('pp2').value = "$-52.99";
		document.getElementById('desc2').value = `Capacity: 1TB \n Affordable and reliable storage for every day.`;
	}
	else if (b == 8) {
		document.getElementById('img2').src = "images/cardimg8.png";
		document.getElementById('pn2').value = "Lexar® High-Performance 633x microSDHC™/ microSDXC™ UHS-I Card BLUE Series";
		document.getElementById('pp2').value = "$-49.99";
		document.getElementById('desc2').value = "Capacity: 2TB \n >Premium performance with NVMe for high-end tasks.";
	}
	else if (b == 9) {
		document.getElementById('img2').src = "images/cardimg1.png";
		document.getElementById('pn2').value = "Lexar® PLAY microSDXC™ UHS-I Card";
		document.getElementById('pp2').value = "$-149.99";
		document.getElementById('desc2').value = "Capacity: 500GB \n >M.2 SSD with fast speeds for optimal."
	}
	else if (b == 10) {
		document.getElementById('img2').src = "images/cardimg10.png";
		document.getElementById('pn2').value = "Lexar® Professional CFexpress™ Type B Card SILVER Series";
		document.getElementById('pp2').value = "$-139.99";
		document.getElementById('desc2').value = "Capacity: 1TB \n >M.2 SSD with fast speeds for optimal."
	}
}