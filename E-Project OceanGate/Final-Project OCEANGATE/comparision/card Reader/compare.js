// JavaScript Document
function item1()
{
	var a=document.getElementById('it1').selectedIndex;
	var b=document.getElementById('it2').selectedIndex;
	if(a==b)
	{
		alert("you cannot compare same products");
		document.getElementById('it1').value="select";
		document.getElementById('img1').src="images/que.png";
		document.getElementById('pn1').value="";
		document.getElementById('pp1').value="";
		document.getElementById('desc1').value="";
	}
	else if(a==1)
	{
		document.getElementById('img1').src="images/sandisk_card_reader_1.jpg";
		document.getElementById('pn1').value="Sandisk Ultra USB 3.0 Card Reader";
		document.getElementById('pp1').value="$-15.99";
		document.getElementById('desc1').value="Capacity: 1TB-8TB \n Ultimate performance for gamers, creative professionals.";
	}
	else if(a==2)
	{
		document.getElementById('img1').src="images/sandisk_card_reader_2.jpg";
		document.getElementById('pn1').value="Sandisk Extreme PRO USB-C Reader";
		document.getElementById('pp1').value="$-25.99";
		document.getElementById('desc1').value="Capacity: 1Tb-8TB \n Reliable performance for everyday computing tasks with 3D NAND.";
	}	
	
	else if(a==3)
	{
		document.getElementById('img1').src="images/sandisk_card_reader_3.jpg";
		document.getElementById('pn1').value="sandisk_card_reader_3.jpg";
		document.getElementById('pp1').value="$-40.99";
		document.getElementById('desc1').value="Capacity: 240GB \n Affordable SSD with great speed for everyday computing.";
	}

	else if(a==4)
	{
		document.getElementById('img1').src="images/sandisk_card_reader_4.jpg";
		document.getElementById('pn1').value="sandisk_card_reader_4.jpg";
		document.getElementById('pp1').value="$-12.99";
		document.getElementById('desc1').value="Capacity: 1TB \n 3D NAND for better performance, endurance, and power efficiency.";
	}	
	else if(a==5)
	{
		document.getElementById('img1').src="images/sandisk_card_reader_5.jpg";
		document.getElementById('pn1').value="Sandisk Dual Slot USB Card Reader";
		document.getElementById('pp1').value="$-20.99";
		document.getElementById('desc1').value="Capacity: 2Tb \n High-speed storage for gaming, video editing, and other demanding task.";
	}	
	else if(a==6)
	{
		document.getElementById('img1').src="images/sandisk_card_reader_6.jpg";
		document.getElementById('pn1').value="Sandisk Multi-card Reader";
		document.getElementById('pp1').value="$-18.99";
		document.getElementById('desc1').value="Capacity: 2TB \n Enhanced performance and reliability with 3D NAND technology.";
	}	
	else if(a==7)
	{
		document.getElementById('img1').src="images/sandisk_card_reader_7.jpg";
		document.getElementById('pn1').value="Sandisk Mobile Dual USB-C Reader";
		document.getElementById('pp1').value="$-22.99";
		document.getElementById('desc1').value="Capacity: 1TB \nAffordable and reliable storage for every day.";
	}	
	else if(a==8)
	{
		document.getElementById('img1').src="images/sandisk_card_reader_8.jpg";
		document.getElementById('pn1').value="Sandisk High-Speed USB Reader";
		document.getElementById('pp1').value="$-30.99";
		document.getElementById('desc1').value="Capacity: 2TB \n >Premium performance with NVMe for high-end tasks.";
	}	
	else if(a==9)
	{
		document.getElementById('img1').src="images/sandisk_card_reader_9.jpg";
		document.getElementById('pn1').value="Sandisk Compact Flash Reader";
		document.getElementById('pp1').value="$-35.99";
		document.getElementById('desc1').value="Capacity: 500GB \n >M.2 SSD with fast speeds for optimal.";
	}	
	
}

function item2()
{	var a=document.getElementById('it1').selectedIndex;
	var b=document.getElementById('it2').selectedIndex;

	if(a==b)
	{
		alert("you cannot compare same products");
		document.getElementById('it2').value="select";
		document.getElementById('img2').src="images/que.png";
		document.getElementById('pn2').value="";
		document.getElementById('pp2').value="";
		document.getElementById('desc2').value="";
	}
	else if(b==1)
	{
		document.getElementById('img2').src="images/sandisk_card_reader_1.jpg";
		document.getElementById('pn2').value="Sandisk Ultra USB 3.0 Card Reader";
		document.getElementById('pp2').value="$-15.99";
		document.getElementById('desc2').value="Capacity: 1TB-8TB \n Ultimate performance for gamers, creative professionals.";
	}
	else if(b==2)
	{
		document.getElementById('img2').src="images/sandisk_card_reader_2.jpg";
		document.getElementById('pn2').value="Sandisk Extreme PRO USB-C Reader";
		document.getElementById('pp2').value="$-25.99";
		document.getElementById('desc2').value="Capacity: 1Tb-8TB \n Reliable performance for everyday computing tasks with 3D NAND.";
	}	
	
	else if(b==3)
	{
		document.getElementById('img2').src="images/sandisk_card_reader_3.jpg";
		document.getElementById('pn2').value="sandisk_card_reader_3.jpg";
		document.getElementById('pp2').value="$-40.99";
		document.getElementById('desc2').value="Capacity: 240GB \n Affordable SSD with great speed for everyday computing.";
	}

	else if(b==4)
	{
		document.getElementById('img2').src="images/sandisk_card_reader_4.jpg";
		document.getElementById('pn2').value="sandisk_card_reader_4.jpg";
		document.getElementById('pp2').value="$-12.99";
		document.getElementById('desc2').value="Capacity: 1TB \n 3D NAND for better performance, endurance, and power efficiency.";
	}	
	else if(b==5)
	{
		document.getElementById('img2').src="images/sandisk_card_reader_5.jpg";
		document.getElementById('pn2').value="Sandisk Dual Slot USB Card Reader";
		document.getElementById('pp2').value="$-20.99";
		document.getElementById('desc2').value="Capacity: 2Tb \n High-speed storage for gaming, video editing, and other demanding task.";
	}	
	else if(b==6)
	{
		document.getElementById('img2').src="images/sandisk_card_reader_6.jpg";
		document.getElementById('pn2').value="Sandisk Multi-card Reader";
		document.getElementById('pp2').value="$-18.99";
		document.getElementById('desc2').value="Capacity: 2TB \n Enhanced performance and reliability with 3D NAND technology.";
	}	
	else if(b==7)
	{
		document.getElementById('img2').src="images/sandisk_card_reader_7.jpg";
		document.getElementById('pn2').value="Sandisk Mobile Dual USB-C Reader";
		document.getElementById('pp2').value="$-22.99";
		document.getElementById('desc2').value=`Capacity: 1TB \n Affordable and reliable storage for every day.`;
	}	
	else if(b==8)
	{
		document.getElementById('img2').src="images/sandisk_card_reader_8.jpg";
		document.getElementById('pn2').value="Sandisk High-Speed USB Reader";
		document.getElementById('pp2').value="$-30.99";
		document.getElementById('desc2').value="Capacity: 2TB \n >Premium performance with NVMe for high-end tasks.";
	}	
	else if(b==9)
	{
		document.getElementById('img2').src="images/sandisk_card_reader_9.jpg";
		document.getElementById('pn2').value="Sandisk Compact Flash Reader";
		document.getElementById('pp2').value="$-35.99";
		document.getElementById('desc2').value="Capacity: 500GB \n >M.2 SSD with fast speeds for optimal."
	}	
}

