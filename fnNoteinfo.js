function myFunction() {
  var x = document.getElementById("myDIV").firstchild;
  var txt = "";

  txt += "The node name: " + x.nodeName + "<br>";
  txt += "The node value: " + x.nodeValue + "<br>";
  txt += "The node type: " + x.nodeType + "<br>";

  document.getElementById("demo").innerHTML = txt;
}
