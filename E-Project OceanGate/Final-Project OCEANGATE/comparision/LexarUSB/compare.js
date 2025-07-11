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
		document.getElementById('img1').src="images/first pic of card.jpg";
		document.getElementById('pn1').value="Lexar® Professional Workflow SD/microSD UHS-II Card Reader";
		document.getElementById('pp1').value="$-89.99";
		document.getElementById('desc1').value="Capacity: 1TB-8TB \n Ultimate performance for gamers, creative professionals.";
	}
	else if(a==2)
	{
		document.getElementById('img1').src="images/2nd pic of card.jpg";
		document.getElementById('pn1').value="Lexar® JumpDrive® P30 USB 3.2 Gen 1 Flash Drive";
		document.getElementById('pp1').value="$-119.99";
		document.getElementById('desc1').value="Capacity: 1Tb-8TB \n Reliable performance for everyday computing tasks with 3D NAND.";
	}	
	
	else if(a==3)
	{
		document.getElementById('img1').src="images/3rd pic of .jpg";
		document.getElementById('pn1').value="Lexar® JumpDrive® Dual Drive E32c USB 3.2 Gen 1 Type-C™";
		document.getElementById('pp1').value="$-44.99";
		document.getElementById('desc1').value="Capacity: 240GB \n Affordable SSD with great speed for everyday computing.";
	}

	else if(a==4)
	{
		document.getElementById('img1').src="images/4THPIC OF card.jpg";
		document.getElementById('pn1').value="Lexar® JumpDrive® M900 USB 3.2 Gen 1 Flash Drive";
		document.getElementById('pp1').value="$-49.99";
		document.getElementById('desc1').value="Capacity: 1TB \n 3D NAND for better performance, endurance, and power efficiency.";
	}	
	else if(a==5)
	{
		document.getElementById('img1').src="images/5th pic of card .jpg";
		document.getElementById('pn1').value="Lexar® JumpDrive® Fingerprint F35 PRO USB 3.2 Gen 1 Flash Drive &nbsp; &nbsp; GB";
		document.getElementById('pp1').value="$-84.99";
		document.getElementById('desc1').value="Capacity: 2Tb \n High-speed storage for gaming, video editing, and other demanding task.";
	}	
	else if(a==6)
	{
		document.getElementById('img1').src="images/6th pic of card .jpg";
		document.getElementById('pn1').value="Lexar® JumpDrive® S47 USB 3.2 Gen 1 Flash Drive";
		document.getElementById('pp1').value="$-32.99";
		document.getElementById('desc1').value="Capacity: 2TB \n Enhanced performance and reliability with 3D NAND technology.";
	}	
	else if(a==7)
	{
		document.getElementById('img1').src="images/7th pic of card.jpg";
		document.getElementById('pn1').value="Lexar® JumpDrive® Dual Drive D400 USB 3.2 Gen 1 Type-C™";
		document.getElementById('pp1').value="$-52.99";
		document.getElementById('desc1').value="Capacity: 1TB \nAffordable and reliable storage for every day.";
	}	
	else if(a==8)
	{
		document.getElementById('img1').src="images/8th pic of card .jpg";
		document.getElementById('pn1').value="Lexar® JumpDrive® M400 USB 3.2 Gen 1 Flash Drive";
		document.getElementById('pp1').value="$-49.99";
		document.getElementById('desc1').value="Capacity: 2TB \n >Premium performance with NVMe for high-end tasks.";
	}	
	else if(a==9)
	{
		document.getElementById('img1').src="images/9th pic of card.jpg";
		document.getElementById('pn1').value="Lexar® JumpDrive® S80 USB 3.2 Gen 1 Flash Drive";
		document.getElementById('pp1').value="$-149.99";
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
		document.getElementById('img2').src="images/first pic of card.jpg";
		document.getElementById('pn2').value="Lexar® Professional Workflow SD/microSD UHS-II Card Reader";
		document.getElementById('pp2').value="$-89.99";
		document.getElementById('desc2').value="Capacity: 1TB-8TB \n Ultimate performance for gamers, creative professionals.";
	}
	else if(b==2)
	{
		document.getElementById('img2').src="images/2nd pic of card.jpg";
		document.getElementById('pn2').value="Lexar® JumpDrive® P30 USB 3.2 Gen 1 Flash Drive";
		document.getElementById('pp2').value="$-119.99";
		document.getElementById('desc2').value="Capacity: 1Tb-8TB \n Reliable performance for everyday computing tasks with 3D NAND.";
	}	
	
	else if(b==3)
	{
		document.getElementById('img2').src="images/3rd pic of .jpg";
		document.getElementById('pn2').value="Lexar® JumpDrive® Dual Drive E32c USB 3.2 Gen 1 Type-C™";
		document.getElementById('pp2').value="$-44.99";
		document.getElementById('desc2').value="Capacity: 240GB \n Affordable SSD with great speed for everyday computing.";
	}

	else if(b==4)
	{
		document.getElementById('img2').src="images/4THPIC OF card.jpg";
		document.getElementById('pn2').value="Lexar® JumpDrive® M900 USB 3.2 Gen 1 Flash Drive";
		document.getElementById('pp2').value="$-49.99";
		document.getElementById('desc2').value="Capacity: 1TB \n 3D NAND for better performance, endurance, and power efficiency.";
	}	
	else if(b==5)
	{
		document.getElementById('img2').src="images/5th pic of card .jpg";
		document.getElementById('pn2').value="Lexar® JumpDrive® Fingerprint F35 PRO USB 3.2 Gen 1 Flash Drive &nbsp; &nbsp; GB";
		document.getElementById('pp2').value="$-84.99";
		document.getElementById('desc2').value="Capacity: 2Tb \n High-speed storage for gaming, video editing, and other demanding task.";
	}	
	else if(b==6)
	{
		document.getElementById('img2').src="images/6th pic of card .jpg";
		document.getElementById('pn2').value="Lexar® JumpDrive® S47 USB 3.2 Gen 1 Flash Drive";
		document.getElementById('pp2').value="$-32.99";
		document.getElementById('desc2').value="Capacity: 2TB \n Enhanced performance and reliability with 3D NAND technology.";
	}	
	else if(b==7)
	{
		document.getElementById('img2').src="images/7th pic of card.jpg";
		document.getElementById('pn2').value="Lexar® JumpDrive® Dual Drive D400 USB 3.2 Gen 1 Type-C™";
		document.getElementById('pp2').value="$-52.99";
		document.getElementById('desc2').value=`Capacity: 1TB \n Affordable and reliable storage for every day.`;
	}	
	else if(b==8)
	{
		document.getElementById('img2').src="images/8th pic of card .jpg";
		document.getElementById('pn2').value="Lexar® JumpDrive® M400 USB 3.2 Gen 1 Flash Drive";
		document.getElementById('pp2').value="$-49.99";
		document.getElementById('desc2').value="Capacity: 2TB \n >Premium performance with NVMe for high-end tasks.";
	}	
	else if(b==9)
	{
		document.getElementById('img2').src="images/9th pic of card.jpg";
		document.getElementById('pn2').value="Lexar® JumpDrive® S80 USB 3.2 Gen 1 Flash Drive";
		document.getElementById('pp2').value="$-149.99";
		document.getElementById('desc2').value="Capacity: 500GB \n >M.2 SSD with fast speeds for optimal."
	}	
	
	
}

