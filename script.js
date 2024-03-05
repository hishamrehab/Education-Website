function HoverButton() {
  document.getElementById("button").style.backgroundColor = "red";
}

function Hover() {
  document.getElementById("button").style.backgroundColor = "rgb(36, 114, 88)";
}

var btn2 = document.getElementById("button2");
var Json = document.getElementById("one");

btn2.onclick = function HandleClick() {
  Json.style.visibility = "visible";
};

btn2.addEventListener("dblclick", function () {
  Json.style.visibility = "hidden";
});

var img1 = document.getElementById("img1");
var n = 0;

function onMouseout() {
  n = n + 1;
  img1.innerHTML = n;
}

var img2 = document.getElementById("img2");
var l = 0;

function onMouseHover() {
  l = l + 1;
  img2.innerHTML = l;
}

var img3 = document.getElementById("img3");
var k = 0;

function onMouseMove() {
  k = k + 1;
  img3.innerHTML = k;
}

var img4 = document.getElementById("img4");
var z = 0;
function onMouseEnter() {
  z = z + 1;
  img4.innerHTML = z;
}

function clc() {
  document.getElementById("clicks").style.color = "#f50";
  document.getElementById("clicks").style.textDecoration = "underline";
}

function btn() {
  document.getElementById("button12").style.color = "#f50";
  document.getElementById("button12").style.textDecoration = "underline";
}

function div() {
  document.getElementById("div").style.color = "#f50";
  document.getElementById("div").style.textDecoration = "underline";
}

function flutter() {
  document.getElementById("flutter").style.color = "#f50";
  document.getElementById("flutter").style.textDecoration = "underline";
}

function python() {
  document.getElementById(" python").style.color = "#f50";
  document.getElementById(" python").style.textDecoration = "underline";
}

function valid() {
  var t = prompt("Name..");
  if (t == "hamza") {
    window.location = "index.html";
  } else {
    alert("error !!");
  }
}
