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

function initData() {
    return [
        {
            q: "На каком инструменте, как считается, играл древнерусский певец и сказитель Боян?",
            a: ["На гуслях", "На виолончели", "На баяне", "На гитаре"],
            correct: 0,
            cost: 100
        },
        {
            q: "В какой из этих стран один из официальных языков - французский?",
            a: ["Республика Гаити", "Кения", "Эквадор", "Венесуэла"],
            correct: 0,
            cost: 200
        },
        {
            q: "В каком из этих фильмов не снимался Александр Абдулов?",
            a: ["Карнавал", "Московские каникулы", "Чародеи", "Убить дракона"],
            correct: 3,
            cost: 200
        },
        {
            q: "В каком году произошла Куликовская битва?",
            a: ["1380", "1569", "1616", "1773"],
            correct: 0,
            cost: 200
        },
        {
            q: "Кто автор музыки к детской песенке Чунга-Чанга?",
            a: ["Шаинский", "Зацепин", "Дербенёв", "Шуфутинский"],
            correct: 0,
            cost: 300
        },
        {
            q: "Какая картина Малевича находится в Русском музее?",
            a: ["Красный квадрат", "Белый квадрат", "Чёрный квадрат", "Точильщик"],
            correct: 2,
            cost: 100
        },
        {
            q: "Шкала Сковилла - это шкала оценки...",
            a: ["Качества атмосферного воздуха", "Привлекательности женщин", "Остроты перца", "Уровня моря"],
            correct: 2,
            cost: 300
        },
        {
            q: "Какой титул имел Дон Кихот?",
            a: ["Барон", "Маркиз", "Идальго", "Вождь"],
            correct: 2,
            cost: 200
        },
        {
            q: 'Кто автор антиутопического романа "О дивный новый мир"?',
            a: ["Олдос Хаксли", "Рэй Брэдбери", "Джордж Оруэлл", "Сомерсет Моэм"],
            correct: 0,
            cost: 200
        },
    ];
}

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}

function ex3() {
    var questionarrieArray = initData();
    var result = 0;
    var event, ok;
    var i = 0;
    while (i < questionarrieArray.length) {
        event = +prompt(questionarrieArray[i].q +
            "\n" + '1 - ' + questionarrieArray[i].a[0] +
            "\n" + '2 - ' + questionarrieArray[i].a[1] +
            "\n" + '3 - ' + questionarrieArray[i].a[2] +
            "\n" + '4 - ' + questionarrieArray[i].a[3] +
            "\n" + '-1 - Выход из игры'
        );
        if (event == -1) {
            break;
        } else {
            if (!isAnswer(4, event)) {
                continue;
            } else {
                if (event - 1 === questionarrieArray[i].correct) {
                    result += questionarrieArray[i].cost;
                    alert("Верно! У вас " + result + " очков.");
                } else {
                    alert("Вы ошиблись! Правильный ответ " + questionarrieArray[i].a[questionarrieArray[i].correct]);
                    break;
                }
            }
        }
        i++;
    }
    alert("Вы заработали " + result);
}

function init() {
    console.log("Homework 4");
    ex1(); //Написать функцию, преобразующую число в объект
    //Упражнение 2 сделано в файле gameCode.js
    ex3(); //*На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»
}
