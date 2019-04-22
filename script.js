function hideit() {
  document.getElementById("soccer").className = "hidden";
}

function changeText() {
  document.getElementById("p1").style.fontSize = "7em";
  document.getElementById("p1").style.fontStyle = "Italic";
  document.getElementById("p1").style.backgroundColor = "yellow";
  document.getElementById("p1").style.fontweight = "bold";
//this is for the 4.html file
document.getElementById("persons").style.fontSize = "7em";
document.getElementById("persons").style.fontStyle = "Italic";
document.getElementById("persons").style.backgroundColor = "yellow";
document.getElementById("persons").style.fontweight = "bold";
}

function refresh(){
  location.reload();
}

//this is for the 5.html file
function alterText(){
  document.getElementById("class").style.fontSize = "7em";
  document.getElementById("class").style.fontStyle = "Italic";
  document.getElementById("class").style.backgroundColor = "yellow";
  document.getElementById("class").style.fontweight = "bold";
}
