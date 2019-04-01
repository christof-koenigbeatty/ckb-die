//Hinzufügen von 'Eventlisteners' beim Seitenstart
function init() {
	//wenn auf das DIV mit der ID 'rollButton' geklickt wird, soll die Funktion 'rollDice1' ausgeführt werden
	document.getElementById('rollButton').addEventListener("touchstart", rollDice2);
    document.getElementById('rollButton').addEventListener("click", rollDice2);

	//(optional) Würfel SVG-Grafiken
	var num1 = '<circle cx="200" cy="200" r="40" fill="#DCAE1D"/>';
	var num2 = '<circle cx="100" cy="100" r="40" fill="#DCAE1D"/><circle cx="300" cy="300" r="40" fill="#DCAE1D"/>';
	var num3 = num1 + num2;
	var num4 = num2 + '<circle cx="100" cy="300" r="40" fill="#DCAE1D"/><circle cx="300" cy="100" r="40" fill="#DCAE1D"/>';
	var num5 = num4 + num1;
	var num6 = num4 + '<circle cx="100" cy="200" r="40" fill="#DCAE1D"/><circle cx="300" cy="200" r="40" fill="#DCAE1D"/>';
	diceSVG = [num1, num2, num3, num4, num5, num6];

	// Schon ein erstes Mal würfeln (statt ?)
	rollDice2()
	//document.getElementById('dice').innerHTML = '<svg viewbox="0 0 400 400" >' + diceSVG[Math.floor(Math.random()*6)] + '</svg>';

}

//Einfache Würfelfunktion
function rollDice1() {
	//In das DIV mit der ID 'dice' soll ein 'X' geschrieben werden
	document.getElementById('dice').innerHTML = Math.ceil(Math.random()*6);
}

//Mit Hilfe von 'setInterval' soll die Funktion 'animDice' mehrmals hintereinander (mit einer kurzen Pause) ausgeführt werden.
function rollDice2() {
	//damit während der "Animation" keine klicks die Funktion stören, wird der Eventlistener anfangs entfernt und zum Schluss wieder hinzugefügt.
	document.getElementById('rollButton').removeEventListener('click', rollDice2);
	
	var x=0;
	var deltat=100;

	var animDice = function(){
		// bei jedem Ausführen soll die Variable x um 1 erhöht werden.
		x++
		//deltat=deltat + 50;
		// bei jedem Ausführen wird eine Zufallszahl in das DIV mit der ID 'dice' geschrieben.
		// "Normale" Version:  document.getElementById('dice').innerHTML = Math.ceil(Math.random()*6);
		document.getElementById('dice').innerHTML = '<svg viewbox="0 0 400 400" >' + diceSVG[Math.floor(Math.random()*6)] + '</svg>';
		if(x==10){
			clearInterval(timer);
			document.getElementById('rollButton').addEventListener('click', rollDice2);
		}
	}
	timer = setInterval(animDice, deltat);
}

//Hinzufügen von 'Eventlisteners' beim Seitenstart
function indexinit() {
	//var x=0;
	var deltat=250;
	//(optional) Würfel SVG-Grafiken
	var num1 = '<circle cx="200" cy="200" r="40" fill="#DCAE1D"/>';
	var num2 = '<circle cx="100" cy="100" r="40" fill="#DCAE1D"/><circle cx="300" cy="300" r="40" fill="#DCAE1D"/>';
	var num3 = num1 + num2;
	var num4 = num2 + '<circle cx="100" cy="300" r="40" fill="#DCAE1D"/><circle cx="300" cy="100" r="40" fill="#DCAE1D"/>';
	var num5 = num4 + num1;
	var num6 = num4 + '<circle cx="100" cy="200" r="40" fill="#DCAE1D"/><circle cx="300" cy="200" r="40" fill="#DCAE1D"/>';
	diceSVG = [num1, num2, num3, num4, num5, num6];

	var animDice = function(){
		// bei jedem Ausführen soll die Variable x um 1 erhöht werden.
		//x++
		//deltat=deltat + 50;
		// bei jedem Ausführen wird eine Zufallszahl in das DIV mit der ID 'dice' geschrieben.
		// "Normale" Version:  document.getElementById('dice').innerHTML = Math.ceil(Math.random()*6);
		document.getElementById('dice').innerHTML = '<svg viewbox="0 0 400 400" >' + diceSVG[Math.floor(Math.random()*6)] + '</svg>';
		// if(x==1000){
		//	clearInterval(timer);
		//}
	}
	timer = setInterval(animDice, deltat);}

//(optional) Würfel SVG-Grafiken
/*
var num1 = '<circle cx="200" cy="200" r="40" fill="black"/>';
var num2 = '<circle cx="100" cy="100" r="40" fill="black"/><circle cx="300" cy="300" r="40" fill="black"/>';
var num3 = num1 + num2;
var num4 = num2 + '<circle cx="100" cy="300" r="40" fill="black"/><circle cx="300" cy="100" r="40" fill="black"/>';
var num5 = num4 + num1;
var num6 = num4 + '<circle cx="100" cy="200" r="40" fill="black"/><circle cx="300" cy="200" r="40" fill="black"/>';
var diceSVG = [num1, num2, num3, num4, num5, num6];
*/

