function ShowMenu()
{
	var menu = document.getElementById("menu");
	var btn_bg = document.getElementById("btn_bg");
	if(menu.style.display=="none")
	{
		menu.style.display = "block";
		btn_bg.setAttribute("src","image/up.png");
	}
	else
	{
		menu.style.display = "none";
		btn_bg.setAttribute("src","image/down.png");
	}
}
