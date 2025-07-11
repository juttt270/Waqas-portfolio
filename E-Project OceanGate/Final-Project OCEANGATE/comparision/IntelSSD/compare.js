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
		document.getElementById('img1').src="images/intel_hdd1st.jpg";
		document.getElementById('pn1').value="Intel 660p 512GB";
		document.getElementById('pp1').value="$-89.99";
		document.getElementById('desc1').value="Capacity: 1TB-8TB \n Ultimate performance for gamers, creative professionals.";
	}
	else if(a==2)
	{
		document.getElementById('img1').src="images/intel_hdd2nd.jpg";
		document.getElementById('pn1').value="Intel 670p 1TB";
		document.getElementById('pp1').value="$-119.99";
		document.getElementById('desc1').value="Capacity: 1Tb-8TB \n Reliable performance for everyday computing tasks with 3D NAND.";
	}	
	
	else if(a==3)
	{
		document.getElementById('img1').src="images/intel_hdd3rd.jpg";
		document.getElementById('pn1').value="Intel Optane 905P 480GB";
		document.getElementById('pp1').value="$-250.99";
		document.getElementById('desc1').value="Capacity: 240GB \n Affordable SSD with great speed for everyday computing.";
	}

	else if(a==4)
	{
		document.getElementById('img1').src="images/intel_hdd4th.jpg";
		document.getElementById('pn1').value="Intel Optane 800P 58GB";
		document.getElementById('pp1').value="$-120.99";
		document.getElementById('desc1').value="Capacity: 1TB \n 3D NAND for better performance, endurance, and power efficiency.";
	}	
	else if(a==5)
	{
		document.getElementById('img1').src="images/intel_hdd5th.jpg";
		document.getElementById('pn1').value="Intel SSD DC P4510 2TB";
		document.getElementById('pp1').value="$-400.99";
		document.getElementById('desc1').value="Capacity: 2Tb \n High-speed storage for gaming, video editing, and other demanding task.";
	}	
	else if(a==6)
	{
		document.getElementById('img1').src="images/intel_hdd6th.jpg";
		document.getElementById('pn1').value="Intel SSD 750 Series 400GB";
		document.getElementById('pp1').value="$-100.99";
		document.getElementById('desc1').value="Capacity: 2TB \n Enhanced performance and reliability with 3D NAND technology.";
	}	
	else if(a==7)
	{
		document.getElementById('img1').src="images/intel_hdd7th.jpg";
		document.getElementById('pn1').value="Intel SSD Pro 7600p 512GB";
		document.getElementById('pp1').value="$-179.99";
		document.getElementById('desc1').value="Capacity: 1TB \nAffordable and reliable storage for every day.";
	}	
	else if(a==8)
	{
		document.getElementById('img1').src="images/intel_hdd8th.jpg";
		document.getElementById('pn1').value="Intel Optane H10 512GB";
		document.getElementById('pp1').value="$-199.99";
		document.getElementById('desc1').value="Capacity: 2TB \n >Premium performance with NVMe for high-end tasks.";
	}	
	else if(a==9)
	{
		document.getElementById('img1').src="images/intel_hdd9th.jpg";
		document.getElementById('pn1').value="Intel SSD D7-P5520 7.68TB";
		document.getElementById('pp1').value="$-1999.99";
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
		document.getElementById('img2').src="images/intel_hdd1st.jpg";
		document.getElementById('pn2').value="Intel 660p 512GB";
		document.getElementById('pp2').value="$-89.99";
		document.getElementById('desc2').value="Capacity: 1TB-8TB \n Ultimate performance for gamers, creative professionals.";
	}
	else if(b==2)
	{
		document.getElementById('img2').src="images/intel_hdd2nd.jpg";
		document.getElementById('pn2').value="Intel 670p 1TB";
		document.getElementById('pp2').value="$-119.99";
		document.getElementById('desc2').value="Capacity: 1Tb-8TB \n Reliable performance for everyday computing tasks with 3D NAND.";
	}	
	
	else if(b==3)
	{
		document.getElementById('img2').src="images/intel_hdd3rd.jpg";
		document.getElementById('pn2').value="Intel Optane 905P 480GB";
		document.getElementById('pp2').value="$-250.99";
		document.getElementById('desc2').value="Capacity: 240GB \n Affordable SSD with great speed for everyday computing.";
	}

	else if(b==4)
	{
		document.getElementById('img2').src="images/intel_hdd4th.jpg";
		document.getElementById('pn2').value="Intel Optane 800P 58GB";
		document.getElementById('pp2').value="$-120.99";
		document.getElementById('desc2').value="Capacity: 1TB \n 3D NAND for better performance, endurance, and power efficiency.";
	}	
	else if(b==5)
	{
		document.getElementById('img2').src="images/intel_hdd5th.jpg";
		document.getElementById('pn2').value="Intel SSD DC P4510 2TB";
		document.getElementById('pp2').value="$-400.99";
		document.getElementById('desc2').value="Capacity: 2Tb \n High-speed storage for gaming, video editing, and other demanding task.";
	}	
	else if(b==6)
	{
		document.getElementById('img2').src="images/intel_hdd6th.jpg";
		document.getElementById('pn2').value="Intel SSD 750 Series 400GB";
		document.getElementById('pp2').value="$-100.99";
		document.getElementById('desc2').value="Capacity: 2TB \n Enhanced performance and reliability with 3D NAND technology.";
	}	
	else if(b==7)
	{
		document.getElementById('img2').src="images/intel_hdd7th.jpg";
		document.getElementById('pn2').value="Intel SSD Pro 7600p 512GB";
		document.getElementById('pp2').value="$-179.99";
		document.getElementById('desc2').value=`Capacity: 1TB \n Affordable and reliable storage for every day.`;
	}	
	else if(b==8)
	{
		document.getElementById('img2').src="images/intel_hdd8th.jpg";
		document.getElementById('pn2').value="Intel Optane H10 512GB";
		document.getElementById('pp2').value="$-199.99";
		document.getElementById('desc2').value="Capacity: 2TB \n >Premium performance with NVMe for high-end tasks.";
	}	
	else if(b==9)
	{
		document.getElementById('img2').src="images/intel_hdd9th.jpg";
		document.getElementById('pn2').value="Intel SSD D7-P5520 7.68TB";
		document.getElementById('pp2').value="$-1999.99";
		document.getElementById('desc2').value="Capacity: 500GB \n >M.2 SSD with fast speeds for optimal."
	}	
	
	
}

