function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6KfRilWCwGq":
        Script1();
        break;
      case "69lZEY0iFoi":
        Script2();
        break;
  }
}

function Script1()
{
  var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear();
var player = GetPlayer();
var newName = day + "/" + month + "/" +year
player.SetVar("DateValue", newName);
}

function Script2()
{
  window.print();
}

