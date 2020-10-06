'use strict';

const picArray = getPicsArray();
let currentIndex = -1;

function getPicsArray() {
    return [
        {
            image_id: "incorrect",
            path: "/img/small/08.jpg"
        },
        {
            image_id: "img1",
            path: "/img/small/01.jpg"
        },
        {
            image_id: "img2",
            path: "/img/small/02.jpg"
        },
        {
            image_id: "incorrect2",
            path: "/img/small/09.jpg"
        },
        {
            image_id: "img3",
            path: "/img/small/03.jpg"
        },
    ];
}

function removeShadows(){
    let div;
    for (var i = 0; i < picArray.length; i++) {
        div = document.querySelector("#" + picArray[i].image_id);
        if (div === null) {
            continue;
        }
        div.classList.remove("boxShadow");
    }
}

function setPic(imgObjIndex) {
    if (imgObjIndex === -1) return;
    let imgObj = picArray[imgObjIndex];
    currentIndex = imgObjIndex;
    let bigPic = document.querySelector("#big-picture");
    let path = imgObj.path.replace("/small/", "/big/");
    //здесь решение первого задания: в случае отсутствия картинки, используем малый экземпляр
    let img = new Image();
    img.src = '.' + path;
    img.onload = function () {
        bigPic.src = '.' + path;
    };
    img.onerror = function () {
        bigPic.src = '.' + imgObj.path;
    };
    let div = document.querySelector("#" + picArray[imgObjIndex].image_id);
    removeShadows();
    div.classList.add("boxShadow");
}

function onClickHandler(e) {
    setPic(picArray.findIndex(item => item.image_id == e.target.id));
}

function onClickBackward(e) {
    let imgObjIndex = -1;
    let div;
    for (var i = currentIndex-1; i >= 0; i--) {
        div = document.querySelector("#" + picArray[i].image_id);
        if (div === null) {
            continue;
        }
        imgObjIndex = i;
        break;
    }
    if (imgObjIndex == -1) {
        for (var i = picArray.length - 1; i >= 0; i--) {
            div = document.querySelector("#" + picArray[i].image_id);
            if (div === null) {
                continue;
            }
            imgObjIndex = i;
            break;
        }
    }
    setPic(imgObjIndex);
}

function onClickForward(e) {
    let imgObjIndex = -1;
    let div;
    for (var i = currentIndex+1; i < picArray.length; i++) {
        div = document.querySelector("#" + picArray[i].image_id);
        if (div === null) {
            continue;
        }
        imgObjIndex = i;
        break;
    }
    if (imgObjIndex == -1) {
        for (var i = 0; i < picArray.length; i++) {
            div = document.querySelector("#" + picArray[i].image_id);
            if (div === null) {
                continue;
            }
            imgObjIndex = i;
            break;
        }
    }
    setPic(imgObjIndex);
}

function addListeners() {
    let div;
    for (var i = 0; i < picArray.length; i++) {
        div = document.querySelector("#" + picArray[i].image_id);
        if (div === null) {
            continue;
        }
        div.addEventListener('click', onClickHandler)
        if (currentIndex == -1) { //присваиваем индекс первого валидного элемента массива
            currentIndex = i;
        }
    }
    document.querySelector("#move-backward").addEventListener('click', onClickBackward);
    document.querySelector("#move-forward").addEventListener('click', onClickForward);

}

function fillImages() {
    let div;
    for (var i = 0; i < picArray.length; i++) {
        div = document.querySelector("#" + picArray[i].image_id);
        if (div === null) {
            continue;
        }
        div.style.backgroundImage = 'url(".' + picArray[i].path + '")';
    }

}

function init() {
    console.log("Homework 6, ex 1");

    fillImages();
    addListeners();
    setPic(currentIndex);
}
