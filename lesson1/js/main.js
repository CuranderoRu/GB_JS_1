"use strict";

function init() {
	//Task#1
	var userResponse;
	while(true){
		userResponse = parseInt(prompt("Введите температуру в цельсиях (-1 для выхода)"));
		if(isNaN(userResponse)){
			continue;
		}
		if(userResponse == -1){
			break;
		}else{
			var tF = (9 / 5) * userResponse + 32;
			alert("Температура по Фаренгейту "+tF);
		}

	}
	//Task#2
	var admin;
	var name = "Василий";
	admin = name;
	alert(admin);
	//Task#3
	//* Чему будет равно JS-выражение 1000 + "108"?
	//1000108, в данном случае "+" это конкатенация, так как тип данных "Строка" является приоритетным при определении
	//и преобразовании типов данных друг к другу.
	//Task#4
	//* Самостоятельно разобраться с атрибутами тега script (async и defer)
	//defer - загрузка скрипта идет независимо от DOM, но событие окончания загрузки наступает только после загрузки скрипта
	//async - загрузка скрипта идет независимо от DOM и других скриптов, событие окончания загрузки может наступить
	//как до, так и после загрузки скрипта
	//Task#5
	//Обменяться значениями двух переменных без использования третьей
	var a = 10;
	var b = 20;
	a += b;
	b = a - b;
	a = a - b;
	alert("a = "+a+", b = "+b);
}
