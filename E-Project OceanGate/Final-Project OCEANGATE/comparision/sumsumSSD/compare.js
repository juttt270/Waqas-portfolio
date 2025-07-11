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
		document.getElementById('img1').src="images/samsung_hdd1.jpg";
		document.getElementById('pn1').value="Samsung 860 EVO 1TB";
		document.getElementById('pp1').value="$-149.99";
		document.getElementById('desc1').value="Capacity: 1TB-8TB \n Ultimate performance for gamers, creative professionals.";
	}
	else if(a==2)
	{
		document.getElementById('img1').src="images/samsung_hdd2.jpg";
		document.getElementById('pn1').value="Samsung 970 PRO 512GB";
		document.getElementById('pp1').value="$-249.99";
		document.getElementById('desc1').value="Capacity: 1Tb-8TB \n Reliable performance for everyday computing tasks with 3D NAND.";
	}	
	
	else if(a==3)
	{
		document.getElementById('img1').src="images/samsung_hdd3.jpg";
		document.getElementById('pn1').value="Samsung 990 EVO Plus 1TB";
		document.getElementById('pp1').value="$-169.99";
		document.getElementById('desc1').value="Capacity: 240GB \n Affordable SSD with great speed for everyday computing.";
	}

	else if(a==4)
	{
		document.getElementById('img1').src="images/samsung_hdd4.jpg";
		document.getElementById('pn1').value="Samsung T7 Touch 500GB";
		document.getElementById('pp1').value="$-119.99";
		document.getElementById('desc1').value="Capacity: 1TB \n 3D NAND for better performance, endurance, and power efficiency.";
	}	
	else if(a==5)
	{
		document.getElementById('img1').src="images/samsung_hdd5.jpg";
		document.getElementById('pn1').value="Samsung 980 1TB";
		document.getElementById('pp1').value="$-109.99";
		document.getElementById('desc1').value="Capacity: 2Tb \n High-speed storage for gaming, video editing, and other demanding task.";
	}	
	else if(a==6)
	{
		document.getElementById('img1').src="images/samsung_hdd6.jpg";
		document.getElementById('pn1').value="Samsung 870 QVO 1TB SSD";
		document.getElementById('pp1').value="$-99.99";
		document.getElementById('desc1').value="Capacity: 2TB \n Enhanced performance and reliability with 3D NAND technology.";
	}	
	else if(a==7)
	{
		document.getElementById('img1').src="images/samsung_hdd7.jpg";
		document.getElementById('pn1').value="Samsung 860 QVO 2TB";
		document.getElementById('pp1').value="$-119.99";
		document.getElementById('desc1').value="Capacity: 1TB \nAffordable and reliable storage for every day.";
	}	
	else if(a==8)
	{
		document.getElementById('img1').src="images/samsung_hdd8.jpg";
		document.getElementById('pn1').value="Samsung 970 EVO 500GB";
		document.getElementById('pp1').value="$-129.99";
		document.getElementById('desc1').value="Capacity: 2TB \n >Premium performance with NVMe for high-end tasks.";
	}	
	else if(a==9)
	{
		document.getElementById('img1').src="images/samsung_hdd9.jpg";
		document.getElementById('pn1').value="Samsung T7 Portable SSD";
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
		document.getElementById('img2').src="images/samsung_hdd1.jpg";
		document.getElementById('pn2').value="Samsung 860 EVO 1TB";
		document.getElementById('pp2').value="$-149.99";
		document.getElementById('desc2').value="Capacity: 1TB-8TB \n Ultimate performance for gamers, creative professionals.";
	}
	else if(b==2)
	{
		document.getElementById('img2').src="images/samsung_hdd2.jpg";
		document.getElementById('pn2').value="Samsung 970 PRO 512GB";
		document.getElementById('pp2').value="$-249.99";
		document.getElementById('desc2').value="Capacity: 1Tb-8TB \n Reliable performance for everyday computing tasks with 3D NAND.";
	}	
	
	else if(b==3)
	{
		document.getElementById('img2').src="images/samsung_hdd3.jpg";
		document.getElementById('pn2').value="Samsung 990 EVO Plus 1TB";
		document.getElementById('pp2').value="$-169.99";
		document.getElementById('desc2').value="Capacity: 240GB \n Affordable SSD with great speed for everyday computing.";
	}

	else if(b==4)
	{
		document.getElementById('img2').src="images/samsung_hdd4.jpg";
		document.getElementById('pn2').value="Samsung T7 Touch 500GB";
		document.getElementById('pp2').value="$-129.99";
		document.getElementById('desc2').value="Capacity: 1TB \n 3D NAND for better performance, endurance, and power efficiency.";
	}	
	else if(b==5)
	{
		document.getElementById('img2').src="images/samsung_hdd5.jpg";
		document.getElementById('pn2').value="Samsung 980 1TB";
		document.getElementById('pp2').value="$-109.99";
		document.getElementById('desc2').value="Capacity: 2Tb \n High-speed storage for gaming, video editing, and other demanding task.";
	}	
	else if(b==6)
	{
		document.getElementById('img2').src="images/samsung_hdd6.jpg";
		document.getElementById('pn2').value="Samsung 870 QVO 1TB SSD";
		document.getElementById('pp2').value="$-99.99";
		document.getElementById('desc2').value="Capacity: 2TB \n Enhanced performance and reliability with 3D NAND technology.";
	}	
	else if(b==7)
	{
		document.getElementById('img2').src="images/samsung_hdd7.jpg";
		document.getElementById('pn2').value="Samsung 860 QVO 2TB";
		document.getElementById('pp2').value="$-119.99";
		document.getElementById('desc2').value=`Capacity: 1TB \n Affordable and reliable storage for every day.`;
	}	
	else if(b==8)
	{
		document.getElementById('img2').src="images/samsung_hdd8.jpg";
		document.getElementById('pn2').value="Samsung 970 EVO 500GB";
		document.getElementById('pp2').value="$129.99";
		document.getElementById('desc2').value="Capacity: 2TB \n >Premium performance with NVMe for high-end tasks.";
	}	
	else if(b==9)
	{
		document.getElementById('img2').src="images/samsung_hdd9.jpg";
		document.getElementById('pn2').value="Samsung T7 Portable SSD";
		document.getElementById('pp2').value="$-149.99";
		document.getElementById('desc2').value="Capacity: 500GB \n >M.2 SSD with fast speeds for optimal."
	}	
	
	
}

