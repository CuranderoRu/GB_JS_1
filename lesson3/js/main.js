'use strict';

function isPrime(num) {
    var i = num;
    if (num > 10) {
        i = (num - num % 2) / 2;
    } else {
        i--;
    }
    while (i > 1) {
        if (num % i == 0) {
            return false;
        }
        i--;
    }
    return true;
}

function ex1() {
    var i = 1;
    while (i <= 100) {
        if (isPrime(i)) {
            console.log(i)
        }
        i++;
    }
}

function countBasketPrice(cart) {
    var cartSum = 0;
    for (var i = 0; i < cart.length; i++) {
        cartSum += +(cart[i].q * cart[i].price).toFixed(2);
    }
    return (+cartSum.toFixed(2));
}

function ex3() {
    var cart = [
        {
            id: "00001",
            q: 1,
            price: 20.5
        },
        {
            id: "00002",
            q: 3,
            price: 8.7
        },
        {
            id: "00003",
            q: 2,
            price: 14.8
        },
        {
            id: "00004",
            q: 7,
            price: 16.2
        },
    ];
    console.log(countBasketPrice(cart))
}

function ex4() {
    for (var i = 0; i < 10; console.log(i++)) {}
}

function ex5() {
    var i = 1;
    var str = "";
    while (i <= 20) {
        for (var j = 0; j < i; j++) {
            str += "x";
        }
        console.log(str);
        str="";
        i++;
    }
}

function init() {
    console.log("Homework 3");

    ex1(); //С помощью цикла while вывести все простые числа в промежутке от 0 до 100
    ex3(); //Товары в корзине хранятся в массиве. Задачи
    ex4(); //Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла
    ex5(); //Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5
}
