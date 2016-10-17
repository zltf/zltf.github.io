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

function newshujv()
{
	var GameScore = Bmob.Object.extend("homework_list");
    var gameScore = new GameScore();
    gameScore.set("Math", "hh");
    gameScore.save(null, {
      success: function(object) {
        alert("create object success, object id:"+object.id);
      },
      error: function(model, error) {
        alert("create object fail");
      }
    });
	
	alert("hh");
}
