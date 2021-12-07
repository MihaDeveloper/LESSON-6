'use strict';
let answer = true;
function getRandomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }




const isNumber = function (num){
    return !isNaN(parseFloat(num)) && isFinite(num) ;

};

function checkResult (){
    let result=(getRandomValue(1,100));
    let value = +prompt("Угадайте число от 1 до 100");
    let chetchik = 10;
    function  one(){
    if(value ===null){
        alert("Игра окончена");}
        else {
    if ( !isNumber(value) ) {
        alert ('Введи число!');
        value = prompt("Угадайте число от 1 до 100");
        one();
        } else {
             if(value > result && chetchik>1){
            alert(` Загаданное число меньше, осталось ${ chetchik-1} попыток`);
            --chetchik;
            value =prompt("Угадайте число от 1 до 100");
         
            one();
           }
            else if(value < result && chetchik>1){
                alert(` Загаданное число больше, осталось ${ chetchik-1} попыток`);
                --chetchik;
                value =prompt("Угадайте число от 1 до 100");
                one();
            }
            else if(value == result && chetchik>1){
                answer= confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
                if(answer==true){
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
    }
    one();
}

checkResult();

 