var a = document.getElementById("bats");
var b = document.getElementById("legoivy");
var c = document.getElementById("legojoker");
var d = document.getElementById("batgirl");
var e = document.getElementById("bane");
var f = document.getElementById("legoquinn");
var n = document.getElementById("night");
var o = document.getElementById("pen");
var g = document.getElementById("quinn");
var h = document.getElementById("logo");
var i = document.getElementById("logo2");
var j = document.getElementById("logo3");
var l = document.getElementById("harl");
var m = document.getElementById("batsh");
var p = document.getElementById("robinh");
var q = document.getElementById("croch");
var x = document.getElementById("lose");
var s = document.getElementById("star");
var w = 0
var y = 0
var hoverArea = document.getElementById("j");
var z = 0




function Timer(){
    document.getElementById('next').classList.remove("none"); 
}

setTimeout(Timer,29000);

window.onload = choosePic1;


var list = ["images/catwomen.png","images/batgirl.png","images/clayface.png","images/bats.png",
"images/scare.png", "images/legojoker.png", "images/robin.png","images/croc.png"];
console.log("List Length " + list.length);

function choosePic1() {
var randomNum = Math.floor(Math.random() * list.length);
console.log(randomNum);
     a.src = list[randomNum];
  list.splice(randomNum,1);
  console.log("List Length " + list.length);
  console.log(list);
var randomNum1 = Math.floor(Math.random() * list.length);
console.log(randomNum1);
b.src = list[randomNum1];
list.splice(randomNum1,1);
console.log("List Length " + list.length);
var randomNum2 = Math.floor(Math.random() * list.length);
console.log(randomNum2);
c.src = list[randomNum2];
list.splice(randomNum2,1);
console.log("List Length " + list.length);
var randomNum3 = Math.floor(Math.random() * list.length);
console.log(randomNum3);
n.src = list[randomNum3];
list.splice(randomNum3,1);
console.log("List Length " + list.length);
var randomNum4 = Math.floor(Math.random() * list.length);
console.log(randomNum4);
d.src = list[randomNum4];
list.splice(randomNum4,1);
console.log("List Length " + list.length);
var randomNum5 = Math.floor(Math.random() * list.length);
console.log(randomNum5);
e.src = list[randomNum5];
list.splice(randomNum5,1);
console.log("List Length " + list.length);
var randomNum6 = Math.floor(Math.random() * list.length);
console.log(randomNum6);
f.src = list[randomNum6];
list.splice(randomNum6,1);
console.log("List Length " + list.length);
console.log(list);
var randomNum7 = Math.floor(Math.random() * list.length);
console.log(randomNum7);
o.src = list[randomNum7];
list.splice(randomNum7,1);
checkBats();
checkRob();
checkCroc();
checkWrong();
Timer();
}

function checkBats(){
	if (a.getAttribute("src") == "images/bats.png")
	{a.addEventListener("click", function() {
		a.classList.remove("pulse");
	h.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000);
	
}); }
	else if (b.getAttribute("src") == "images/bats.png")
	{b.addEventListener("click", function() {
	b.classList.remove("pulse");
	h.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000); 
	
}); }
	else if (c.getAttribute("src") == "images/bats.png")
	{c.addEventListener("click", function() {
	c.classList.remove("pulse");
	h.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000);
	
}); }
	else if (d.getAttribute("src") == "images/bats.png")
	{d.addEventListener("click", function() {
	d.classList.remove("pulse");
	h.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000); 
}); }
	else if (e.getAttribute("src") == "images/bats.png")
	{e.addEventListener("click", function() {
	e.classList.remove("pulse");
	h.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000); 
}); }
	else if (f.getAttribute("src") == "images/bats.png")
	{f.addEventListener("click", function() {
	f.classList.remove("pulse");
	h.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000); 
}); }
	else if (n.getAttribute("src") == "images/bats.png")
	{n.addEventListener("click", function() {
	n.classList.remove("pulse");
	h.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000); 
}); }
	else if (o.getAttribute("src") == "images/bats.png")
	{o.addEventListener("click", function() {
	o.classList.remove("pulse");
	h.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000);
}); }
}

function checkRob(){
	if (a.getAttribute("src") == "images/robin.png")
	{a.addEventListener("click", function() {
	a.classList.remove("pulse");
	i.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000);
}); }
	else if (b.getAttribute("src") == "images/robin.png")
	{b.addEventListener("click", function() {
	b.classList.remove("pulse");
	i.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000); 
}); }
	else if (c.getAttribute("src") == "images/robin.png")
	{c.addEventListener("click", function() {
	c.classList.remove("pulse");
	i.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000); 
}); }
	else if (d.getAttribute("src") == "images/robin.png")
	{d.addEventListener("click", function() {
	d.classList.remove("pulse");
	i.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000); 
}); }
	else if (e.getAttribute("src") == "images/robin.png")
	{e.addEventListener("click", function() {
	e.classList.remove("pulse");
	i.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000); 
}); }
	else if (f.getAttribute("src") == "images/robin.png")
	{f.addEventListener("click", function() {
	f.classList.remove("pulse");
	i.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000);
}); }
	else if (n.getAttribute("src") == "images/robin.png")
	{n.addEventListener("click", function() {
	n.classList.remove("pulse");
	i.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000); 
}); }
	else if (o.getAttribute("src") == "images/robin.png")
	{o.addEventListener("click", function() {
	o.classList.remove("pulse");
	i.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000); 
}); }
}

function checkCroc(){
	if (a.getAttribute("src") == "images/croc.png")
	{a.addEventListener("click", function() {
	a.classList.remove("pulse");
	j.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000); 
}); }
	else if (b.getAttribute("src") == "images/croc.png")
	{b.addEventListener("click", function() {
	b.classList.remove("pulse");
	j.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000); 
}); }
	else if (c.getAttribute("src") == "images/croc.png")
	{c.addEventListener("click", function() {
	c.classList.remove("pulse");
	j.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000); 
}); }
	else if (d.getAttribute("src") == "images/croc.png")
	{d.addEventListener("click", function() {
	d.classList.remove("pulse");
	j.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000); 
}); }
	else if (e.getAttribute("src") == "images/croc.png")
	{e.addEventListener("click", function() {
	e.classList.remove("pulse");
	j.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000);
}); }
	else if (f.getAttribute("src") == "images/croc.png")
	{f.addEventListener("click", function() {
	f.classList.remove("pulse");
	j.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000);
}); }
	else if (n.getAttribute("src") == "images/croc.png")
	{n.addEventListener("click", function() {
	n.classList.remove("pulse");
	j.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000);
}); }
	else if (o.getAttribute("src") == "images/croc.png")
	{o.addEventListener("click", function() {
	o.classList.remove("pulse");
	j.src="images/winlogo1.png";
	setTimeout(function(){ youWin() }, 3000); 
}); }
}

"images/catwomen.png","images/batgirl.png","images/clayface.png","images/bats.png",
"images/scare.png", "images/legojoker.png", "images/robin.png","images/croc.png"

function checkWrong(){
	if ((a.getAttribute("src") == "images/scare.png")||(a.getAttribute("src")=="images/legojoker.png") ||(a.getAttribute("src")=="images/batgirl.png")||(a.getAttribute("src")=="images/catwomen.png")||(a.getAttribute("src")=="images/clayface.png"))
	{a.addEventListener("click", function() {
		a.classList.add("blink-image");
		y++;
		setTimeout(function(){ gamOvr() }, 3000);
}); }
	if ((b.getAttribute("src") == "images/scare.png")||(b.getAttribute("src")=="images/legojoker.png") ||(b.getAttribute("src")=="images/batgirl.png")||(b.getAttribute("src")=="images/catwomen.png")||(b.getAttribute("src")=="images/clayface.png"))
	{b.addEventListener("click", function() {
		b.classList.add("blink-image");
		y++;
		setTimeout(function(){ gamOvr() }, 3000);
}); }
	if ((c.getAttribute("src") == "images/scare.png")||(c.getAttribute("src")=="images/legojoker.png") ||(c.getAttribute("src")=="images/batgirl.png")||(c.getAttribute("src")=="images/catwomen.png")||(c.getAttribute("src")=="images/clayface.png"))
	{c.addEventListener("click", function() {
		c.classList.add("blink-image");
		y++;
		setTimeout(function(){ gamOvr() }, 3000);
}); }
	if ((d.getAttribute("src") == "images/scare.png")||(d.getAttribute("src")=="images/legojoker.png") ||(d.getAttribute("src")=="images/batgirl.png")||(d.getAttribute("src")=="images/catwomen.png")||(d.getAttribute("src")=="images/clayface.png"))
	{d.addEventListener("click", function() {
		d.classList.add("blink-image");
		y++;
		setTimeout(function(){ gamOvr() }, 3000);
}); }
	if ((e.getAttribute("src") == "images/scare.png")||(e.getAttribute("src")=="images/legojoker.png") ||(e.getAttribute("src")=="images/batgirl.png")||(e.getAttribute("src")=="images/catwomen.png")||(e.getAttribute("src")=="images/clayface.png"))
	{e.addEventListener("click", function() {
		e.classList.add("blink-image");
		y++;
		setTimeout(function(){ gamOvr() }, 3000);
}); }
	if ((f.getAttribute("src") == "images/scare.png")||(f.getAttribute("src")=="images/legojoker.png") ||(f.getAttribute("src")=="images/batgirl.png")||(f.getAttribute("src")=="images/catwomen.png")||(f.getAttribute("src")=="images/clayface.png"))
	{f.addEventListener("click", function() {
		f.classList.add("blink-image");
		y++;
		setTimeout(function(){ gamOvr() }, 3000);
}); }
	if ((n.getAttribute("src") == "images/scare.png")||(n.getAttribute("src")=="images/legojoker.png") ||(n.getAttribute("src")=="images/batgirl.png")||(n.getAttribute("src")=="images/catwomen.png")||(n.getAttribute("src")=="images/clayface.png"))
	{n.addEventListener("click", function() {
		n.classList.add("blink-image");
		y++;
		setTimeout(function(){ gamOvr() }, 3000);
}); }
	if ((o.getAttribute("src") == "images/scare.png")||(o.getAttribute("src")=="images/legojoker.png") ||(o.getAttribute("src")=="images/batgirl.png")||(o.getAttribute("src")=="images/catwomen.png")||(o.getAttribute("src")=="images/clayface.png"))
	{o.addEventListener("click", function() {
		o.classList.add("blink-image");
		y++;
		setTimeout(function(){ gamOvr() }, 3000);
}); }
}


function youWin(){
	if(h.getAttribute("src") == "images/winlogo1.png" &&
    i.getAttribute("src") == "images/winlogo1.png" &&
    j.getAttribute("src") == "images/winlogo1.png")
	{
	hoverArea.src="images/download.png";
	h.classList.add("shine");
	i.classList.add("shine");
	j.classList.add("shine");
	g.classList.remove("none");
	s.classList.remove("none");
	g.autoplay = true;
	g.load();
	a.classList.add("none");
	b.classList.add("none");
	c.classList.add("none");
	d.classList.add("none");
	e.classList.add("none");
	f.classList.add("none");
	n.classList.add("none");
	o.classList.add("none");
	l.src="images/harlivy.png";
	l.removeAttribute("onclick");
	}
}


function gamOvr(){
	if(y==3){
	l.src="images/bharley.gif";
	l.classList.add("hvr-bob");
	x.classList.remove("none");
	x.autoplay = true;
	x.load();
	a.classList.add("none");
	b.classList.add("none");
	c.classList.add("none");
	d.classList.add("none");
	e.classList.add("none");
	f.classList.add("none");
	n.classList.add("none");
	o.classList.add("none");
	h.classList.add("none");
	j.classList.add("none");
	i.classList.add("none");
	hoverArea.classList.add("none");
	document.body.style.backgroundImage = "url(images/lostit.png)";
	l.addEventListener("click", function() {location.reload();})
}
}

var imagearray = ["images/batsh.png","images/robinh.png","images/croch.png"];

var imgnumber = 0;
var imgmax = 3;
function aHint(){
	
	if (imgnumber == imgmax) {
		imgnumber = 0;
	}
	l.src = imagearray[imgnumber];
	imgnumber++;
	soundIt();
}
function soundIt(){
	 if (l.getAttribute("src") == "images/batsh.png"){
	 m.play();}
	 else if (l.getAttribute("src") == "images/robinh.png"){
	 p.play();}
	 else if (l.getAttribute("src") == "images/croch.png"){
	 q.play();}
}


function plyVid(){
	document.getElementById('play').muted = false;
	document.getElementById('play1').classList.add("none");
}

var hoverArea = document.getElementById("j");
	var audio = document.getElementById("audio");
hoverArea.onmouseover= function(){
		audio.play();
	}
hoverArea.onmouseout= function(){
		audio.pause();
	}

