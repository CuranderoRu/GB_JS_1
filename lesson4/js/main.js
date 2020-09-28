'use strict';

function getObjFromInt(num) {
    var arr = num.toString().split('').reverse();
    return {
        "единицы": arr[0],
        "десятки": arr[1],
        "сотни": arr[2],
    }
}

function ex1() {
    var num = parseInt(prompt("Введите число для анализа"));
    if (isNaN(num) || !isFinite(num)) {
        alert('Вы ввели недопустимый символ');
        return;
    } else {
        if (num > 999) {
            console.log("Число превышает 999");
        } else {
            var obj = getObjFromInt(num);
            console.log(obj);
        }
    }
}


function init() {
    console.log("Homework 4");
    ex1(); //Написать функцию, преобразующую число в объект
    //    ex2(); //answer for exercise 2
    //    ex3(); //answer for exercise 3
    //    ex4(); //answer for exercise 4
    //    ex5(); //answer for exercise 5
    //    ex6(); //answer for exercise 6
    //    ex7(); //answer for exercise 7
    //    ex8(); //answer for exercise 8
}
