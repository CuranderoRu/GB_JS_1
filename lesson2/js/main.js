'use strict';

function ex1() {
    //Ex1
    //var a = 1, b = 1, c, d;       // (line 1)
    //c = ++a; alert(c);            // (line 2) 2: В выражении использован префиксный инкремент, это означает, что сначала значение b
                                    // будет увеличено на 1, а затем выполнится оператор присваивания
    //d = b++; alert(d);            // (line 3) 1: В этом выражении использован постфиксный инкремент, что приведет к выполнению
                                    //оператора присваивания до увеличения значения b на 1.
    //c = (2+ ++a); alert(c);       // (line 4) 5: Значение a увеличится на 1 префиксным инкрементом, затем выполняется сложение с 2
    //d = (2+ b++); alert(d);       // (line 5) 4: В начале выполняется сложение переменной b и 2, выполнится оператор присваивания.
                                    // а только затем будет выполнен постфиксный инкремент.
    //alert(a);                     // (line 6) 3: Значение a увеличивалось на 1 в строках 2, 4
    //alert(b);                     // (line 7) 3: Значение b увеличивалось на 1 в строках 3, 5
}

function ex2() {
    var a = 2;
    var x = 1 + (a *= 2);           // Выражение *= 2 означает умножение значения переменной на 2 и присвоение полученного значения
                                    // вышеуказанной переменной. Затем, к 4 прибавляем 1.
    console.log("x = " + x);        // x = 5
}

function checkValues(a, b) {
    //incorrect values must be filtered out
    if (a===NaN || b===NaN) {
        return "Введены некорректные числовые значения a или b. Ожидается целое число";
    }
    if(a>=0 && b>=0){
        //если a и b положительные, вывести их разность;
        return "Разность a и b = "+(a-b)+"\n";
    }else if(a<0 && b<0){
        //если а и b отрицательные, вывести их произведение;
        return "Произведение a и b = "+(a*b)+"\n";
    }else{
        //если а и b разных знаков, вывести их сумму;
        //ноль можно считать положительным числом.
        return "Сумма a и b = "+(a+b)+"\n";
    }
}

function ex3() {
    var a = parseInt(prompt("Введите значение a"));
    var b = parseInt(prompt("Введите значение b"));
    console.log(checkValues(a, b));
}

function generateRandomInt(interval){
    return +(Math.random() * (interval[1] - interval[0]) + interval[0]).toFixed(0);
}

function ex4() {
    var a = generateRandomInt([0, 15]);
    switch (a) {
        case 0:
            console.log(0);
        case 1:
            console.log(1);
        case 2:
            console.log(2);
        case 3:
            console.log(3);
        case 4:
            console.log(4);
        case 5:
            console.log(5);
        case 6:
            console.log(6);
        case 7:
            console.log(7);
        case 8:
            console.log(8);
        case 9:
            console.log(9);
        case 10:
            console.log(10);
        case 11:
            console.log(11);
        case 12:
            console.log(12);
        case 13:
            console.log(13);
        case 14:
            console.log(14);
        case 15:
            console.log(15);
    }
}

function sum(a,b){
    return a+b;
}

function diff(a,b){
    return a-b;
}

function mult(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function ex5(){
    //test of 4 math functions
    var a = generateRandomInt([-5, 15]);
    var b = generateRandomInt([-12, 18]);
    console.log("a = "+a+", b = "+b);
    console.log("Сумма чисел равна "+sum(a,b));
    console.log("Разность чисел равна "+diff(a,b));
    console.log("Произведение чисел равно "+mult(a,b));
    console.log("Отношение числа a к b равно "+div(a,b));
}

function mathOperation(arg1, arg2, operation){
    switch (operation){
        case "+":
            return sum(arg1, arg2);
        case "-":
            return diff(arg1, arg2);
        case "*":
            return mult(arg1, arg2);
        case "/":
            return div(arg1, arg2);
        default:
            return 'Operation "'+operation+'" is not implemented';
    }
}

function ex6(){
    //test scenario for mathOperation function
    var a = parseFloat(prompt("Введите значение a"));
    var b = parseFloat(prompt("Введите значение b"));
    if(a===NaN || b===NaN){
        alert("a и b должны быть числами!");
        return;
    }
    var op = prompt("Введите действие над a и b (+, -, *, /)");
    console.log('Результат операции "'+op+'" над числами '+a+" и "+b+" равен "+mathOperation(a, b, op));
}

function ex7(){
    console.log("0 == null: "+(0 == null));
    console.log("null === 0: "+(null === 0));
    console.log("null as boolean: "+((null) ? "null is true" : "null is false"));
    // хотя 0 и null принимаются как false в операторах сравнения, null не приводится к 0 и не равен ему даже в "мягком" сравнении.
}

function power(val, pow){
    if(val===NaN || pow===NaN){
        return NaN;
    }
    // Работаем только с целыми степенями
    if((pow ^ 0) != pow){
        console.log("Дробные степени не поддерживаются!")
        return NaN;
    }
    // Результат неопределён при val=0 и pow <= 0
    if(val==0 && pow <= 0){
        return undefined;
    }
    if(pow == 0){
        return 1;
    }else if(pow == 1){
        return val;
    }else if(pow == -1){
        return 1/val;
    }
    var powered = val*power(val, Math.abs((pow>0) ? pow-1 : pow+1));
    // Это условие необходимо для вычисления отрицательной степени
    if(pow<0){
        return 1/powered;
    }else{
        return powered;
    }
}

function ex8(){
    // С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
    var val = generateRandomInt([-2, 4]);
    var pow = generateRandomInt([-3, 6]);

    console.log(val+" в степени "+pow+" равно "+power(val, pow));
}

function init() {
    console.log("Homework 2");
    ex1(); //answer for exercise 1
    ex2(); //answer for exercise 2
    ex3(); //answer for exercise 3
    ex4(); //answer for exercise 4
    ex5(); //answer for exercise 5
    ex6(); //answer for exercise 6
    ex7(); //answer for exercise 7
    ex8(); //answer for exercise 8
}
