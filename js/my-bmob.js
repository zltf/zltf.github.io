//初始化应用
function initMyBmob()
{
	//Bmob.initialize("Application ID", "REST API Key");
    Bmob.initialize("e02ec797fcec34f9d2b2f701bf6486a9", "3243edf860b664b673220eb5720dfe59");
}

//添加数据
function addValue(list_name,item_name,item)
{
	var GameScore = Bmob.Object.extend(list_name);
    var gameScore = new GameScore();
    gameScore.set(item_name, item);
	gameScore.set("Date",new Date().toLocaleDateString());
    gameScore.save(null, {
      success: function(object) {
        test(object.id);
      },
      error: function(model, error) {
        alert("创建失败");
      }
    });
}

//获取数据
function getValue(list_name,id,itme_name)
{
	var GameScore = Bmob.Object.extend(list_name);
    var query = new Bmob.Query(GameScore);
    query.get(id, {
      success: function(object) {
        // The object was retrieved successfully.
        return object.get(itme_name);
      },
      error: function(object, error) {
        alert("查询失败");
      }
    });
}

//通过日期获取数据
function getValueByDate(list_name)
{
	var GameScore = Bmob.Object.extend(list_name);
	var query = new Bmob.Query(GameScore);
	query.equalTo("Date", new Date().toLocaleDateString()); 
	// 查询所有数据
	query.find({
    success: function(results) {
        showHomework(results[results.length-1]);
    },
    error: function(error) {
        alert("查询失败: " + error.code + " " + error.message);
    }
	});
}

//修改数据
function changeValue(list_name,id,item_name,item)
{
	var GameScore = Bmob.Object.extend(list_name);
    var query = new Bmob.Query(GameScore);
    query.get(id, {
      success: function(object) {
        // The object was retrieved successfully.
        object.set(item_name, item);
        object.save(null, {
          success: function(objectUpdate) {
            alert("创建成功:"+objectUpdate.get("score"));
          },
          error: function(model, error) {
            alert("创建失败");
          }
        });
      },
      error: function(object, error) {
        alert("查询失败");
      }
    });
}

//删除数据
function delValue(list_name,id)
{
	var GameScore = Bmob.Object.extend(list_name);
    var query = new Bmob.Query(GameScore);
    query.get(id, {
      success: function(object) {
        // The object was retrieved successfully.
        object.destroy({
          success: function(deleteObject) {
          alert("删除成功");
          },
          error: function(GameScoretest, error) {
          alert("删除失败");
          }
        });
      },
      error: function(object, error) {
        alert("查询失败");
      }
    });
}

function showHomework(result)
{
	document.getElementById("语文").innerHTML="<p>"+result.get("Chinese")+"</p>";
	document.getElementById("数学").innerHTML="<p>"+result.get("Math")+"</p>";
	document.getElementById("英语").innerHTML="<p>"+result.get("English")+"</p>";
	document.getElementById("物理").innerHTML="<p>"+result.get("Physics")+"</p>";
	document.getElementById("化学").innerHTML="<p>"+result.get("Chemistry")+"</p>";
	document.getElementById("生物").innerHTML="<p>"+result.get("Biology")+"</p>";
	document.getElementById("P.S").innerHTML="<p>"+result.get("PS")+"</p>";
}

//添加作业
function addHomework(subject,homework)
{
	return addValue("homework_list",subject,homework);
}

