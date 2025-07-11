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
		document.getElementById('img1').src="images/mcard1.png";
		document.getElementById('pn1').value="SanDisk Extreme PRO SDHC™ And SDXC™ UHS-I Card-32GB";
		document.getElementById('pp1').value="$-11.99";
		document.getElementById('desc1').value="Capacity: 1TB-8TB \n Ultimate performance for gamers, creative professionals.";
	}
	else if(a==2)
	{
		document.getElementById('img1').src="images/mcard2.png";
		document.getElementById('pn1').value="Sabdisk Outdoor FHD UHS-I Card";
		document.getElementById('pp1').value="$-11.99";
		document.getElementById('desc1').value="Capacity: 1Tb-8TB \n Reliable performance for everyday computing tasks with 3D NAND.";
	}	
	
	else if(a==3)
	{
		document.getElementById('img1').src="images/mcard3.png";
		document.getElementById('pn1').value="SanDisk Extreme PRO SDXC™ UHS-II Card - 64GB";
		document.getElementById('pp1').value="$-44.99";
		document.getElementById('desc1').value="Capacity: 240GB \n Affordable SSD with great speed for everyday computing.";
	}

	else if(a==4)
	{
		document.getElementById('img1').src="images/mcard4.png";
		document.getElementById('pn1').value="SanDisk Outdoors 4K SD UHS-I Card";
		document.getElementById('pp1').value="$-14.99";
		document.getElementById('desc1').value="Capacity: 1TB \n 3D NAND for better performance, endurance, and power efficiency.";
	}	
	else if(a==5)
	{
		document.getElementById('img1').src="images/mcard5.png";
		document.getElementById('pn1').value="SanDisk Outdoors HD SDHC UHS-I Card";
		document.getElementById('pp1').value="$-18.99";
		document.getElementById('desc1').value="Capacity: 2Tb \n High-speed storage for gaming, video editing, and other demanding task.";
	}	
	else if(a==6)
	{
		document.getElementById('img1').src="images/mcard6.png";
		document.getElementById('pn1').value="SanDisk Extreme SD UHS-I Card";
		document.getElementById('pp1').value="$-32.99";
		document.getElementById('desc1').value="Capacity: 2TB \n Enhanced performance and reliability with 3D NAND technology.";
	}	
	else if(a==7)
	{
		document.getElementById('img1').src="images/mcard7.png";
		document.getElementById('pn1').value="SDHC/SDXC Memory card";
		document.getElementById('pp1').value="$-52.99";
		document.getElementById('desc1').value="Capacity: 1TB \nAffordable and reliable storage for every day.";
	}	
	else if(a==8)
	{
		document.getElementById('img1').src="images/mcard8.png";
		document.getElementById('pn1').value="SanDisk Extreme PRO® SDHC™ and SDXC™ UHS-II cards - 64GB, SDXC";
		document.getElementById('pp1').value="$-49.99";
		document.getElementById('desc1').value="Capacity: 2TB \n >Premium performance with NVMe for high-end tasks.";
	}	
	else if(a==9)
	{
		document.getElementById('img1').src="images/mcard9.png";
		document.getElementById('pn1').value="SanDisk Ultra® SDHC™ card and SDXC™ card - 256 GB";
		document.getElementById('pp1').value="$-49.99";
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
		document.getElementById('img2').src="images/mcard1.png";
		document.getElementById('pn2').value="SanDisk Extreme PRO SDHC™ And SDXC™ UHS-I Card-32GB";
		document.getElementById('pp2').value="$-11.99";
		document.getElementById('desc2').value="Capacity: 1TB-8TB \n Ultimate performance for gamers, creative professionals.";
	}
	else if(b==2)
	{
		document.getElementById('img2').src="images/mcard2.png";
		document.getElementById('pn2').value="Sabdisk Outdoor FHD UHS-I Card";
		document.getElementById('pp2').value="$-11.99";
		document.getElementById('desc2').value="Capacity: 1Tb-8TB \n Reliable performance for everyday computing tasks with 3D NAND.";
	}	
	
	else if(b==3)
	{
		document.getElementById('img2').src="images/mcard3.png";
		document.getElementById('pn2').value="SanDisk Extreme PRO SDXC™ UHS-II Card - 64GB";
		document.getElementById('pp2').value="$-44.99";
		document.getElementById('desc2').value="Capacity: 240GB \n Affordable SSD with great speed for everyday computing.";
	}

	else if(b==4)
	{
		document.getElementById('img2').src="images/mcard4.png";
		document.getElementById('pn2').value="SanDisk Outdoors 4K SD UHS-I Card";
		document.getElementById('pp2').value="$-15.99";
		document.getElementById('desc2').value="Capacity: 1TB \n 3D NAND for better performance, endurance, and power efficiency.";
	}	
	else if(b==5)
	{
		document.getElementById('img2').src="images/mcard5.png";
		document.getElementById('pn2').value="SanDisk Outdoors HD SDHC UHS-I Card";
		document.getElementById('pp2').value="$-18.99";
		document.getElementById('desc2').value="Capacity: 2Tb \n High-speed storage for gaming, video editing, and other demanding task.";
	}	
	else if(b==6)
	{
		document.getElementById('img2').src="images/mcard6.png";
		document.getElementById('pn2').value="SanDisk Extreme SD UHS-I Card";
		document.getElementById('pp2').value="$-32.99";
		document.getElementById('desc2').value="Capacity: 2TB \n Enhanced performance and reliability with 3D NAND technology.";
	}	
	else if(b==7)
	{
		document.getElementById('img2').src="images/mcard7.png";
		document.getElementById('pn2').value="SDHC/SDXC Memory card";
		document.getElementById('pp2').value="$-52.99";
		document.getElementById('desc2').value=`Capacity: 1TB \n Affordable and reliable storage for every day.`;
	}	
	else if(b==8)
	{
		document.getElementById('img2').src="images/mcard8.png";
		document.getElementById('pn2').value="SanDisk Extreme PRO® SDHC™ and SDXC™ UHS-II cards - 64GB, SDXC";
		document.getElementById('pp2').value="$-15.99";
		document.getElementById('desc2').value="Capacity: 2TB \n >Premium performance with NVMe for high-end tasks.";
	}	
	else if(b==9)
	{
		document.getElementById('img2').src="images/mcard9.png";
		document.getElementById('pn2').value="SanDisk Ultra® SDHC™ card and SDXC™ card - 256 GB";
		document.getElementById('pp2').value="$-49.99";
		document.getElementById('desc2').value="Capacity: 500GB \n >M.2 SSD with fast speeds for optimal."
	}	
	
	
}

