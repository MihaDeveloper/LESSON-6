'use strict';
let value =prompt("Угадайте число от 1 до 100");
let chetchik = 10;
let answer;
function getRandomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }

let result=(getRandomValue(1,100));




const checkResult = function (){
    if(value ===null){
        alert("Игра окончена");}
        else {
    if ( !parseInt(value) ) {
        alert ('Введи число!');
        value =prompt("Угадайте число от 1 до 100");
        checkResult();
        } else {
             if(value > result && chetchik>1){
            alert(` Загаданное число меньше, осталось ${ chetchik-1} попыток`);
            --chetchik;
            value =+prompt("Угадайте число от 1 до 100");
         
            checkResult();
           }
            else if(value < result && chetchik>1){
                alert(` Загаданное число больше, осталось ${ chetchik-1} попыток`);
                --chetchik;
                value =+prompt("Угадайте число от 1 до 100");
                checkResult();
            }
            else if(value == result && chetchik>1){
                answer= confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
                if(answer==true){
                    chetchik=10;
                    checkResult();
                }
                else{
                    alert("Игра окончена");
                }
            } 
            else{
                alert("Попытки закончились!");
            }
        }
        }
};
checkResult();

 