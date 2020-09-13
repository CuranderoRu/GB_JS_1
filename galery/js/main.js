'use strict';

function getPics(){
	return [
		{pathSmall:"./img/small/1.jpg", pathBig:"./img/orig/1.jpg"},
		{pathSmall:"./img/small/2.jpg", pathBig:"./img/orig/2.jpg"},
		{pathSmall:"./img/small/3.jpg", pathBig:"./img/orig/3.jpg"},
		{pathSmall:"./img/small/4.jpg", pathBig:"./img/orig/4.jpg"},
	]
}

function init() {
	let pics = getPics();
	let gallery = document.getElementById("gallery");
	let mainView = document.getElementById("mainView");
	for (let i = 0; i<pics.length; i++){
		let img = document.createElement("img");
		img.src = pics[i].pathSmall;
		img.classList.add("carousel-gallery-item");
		gallery.append(img);
	}
	gallery.addEventListener('click')
}
