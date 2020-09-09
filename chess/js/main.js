'use strict';

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let numbers = [8, 7, 6, 5, 4, 3, 2, 1];
let figuresLayoutWhite = ["&#9814;", "&#9816;", "&#9815;", "&#9813;", "&#9812;", "&#9815;", "&#9816;", "&#9814;"];
let figuresLayoutBlack = ["&#9820;", "&#9822;", "&#9821;", "&#9819;", "&#9818;", "&#9821;", "&#9822;", "&#9820;"];
let pawnWhite = "&#9817;";
let pawnBlack = "&#9823;";
let chessBoard;

function appendHeader(className) {
	let tr = document.createElement('tr');
	let th = document.createElement('th');
	tr.append(th);
	for (let i = 0; i < letters.length; i++) {
		let th = document.createElement('th');
		if (className != "") {
			th.classList.add(className);
		}
		th.textContent = letters[i];
		tr.append(th);
	}
	chessBoard.append(tr);
}

function getFigure(column, row) {
	let figuresColor;
	if (row === 8) {
		figuresColor = figuresLayoutBlack;
	} else if (row === 1) {
		figuresColor = figuresLayoutWhite;
	} else if (row === 7){
		return pawnBlack;
	} else if (row === 2){
		return pawnWhite;
	} else {
		return "";
	}
	return figuresColor[column];
}

function invertColor(currentColor) {
	if (currentColor === "black") {
		return "white";
	} else {
		return "black";
	}
}

function appendLine(currentNumber) {
	console.log("Processing "+currentNumber);
	let tr = document.createElement('tr');
	let th = document.createElement('th');
	th.textContent = currentNumber;
	tr.append(th);
	let colorStyle = "black";
	if (currentNumber % 2 === 0) {
		colorStyle = "white";
	}
	for (let i = 0; i < letters.length; i++) {
		let td = document.createElement('td');
		td.innerHTML = getFigure(i, currentNumber);
		td.classList.add(colorStyle);
		td.setAttribute("id", letters[i]+currentNumber);
		tr.append(td);
		colorStyle = invertColor(colorStyle);
	}
	let thc = document.createElement('th');
	thc.textContent = currentNumber;
	thc.classList.add("rotated");
	tr.append(thc);
	chessBoard.append(tr);
}

function init() {
	chessBoard = document.getElementById("chessBoard");
	appendHeader("rotated");
	for (let i = 0; i < numbers.length; i++) {
		appendLine(numbers[i]);
	}
	appendHeader("");
}
