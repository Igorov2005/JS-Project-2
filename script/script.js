 'use strict';

 function getRandom() {
   let prNum = Math.floor(Math.random() * 100 + 1);
   console.log(prNum);

   function one() {
     let taskNum = prompt('Угадай число от 1 до 100');
     console.log(typeof taskNum);

     if (taskNum > 100 || taskNum < 0) {
       alert('Веди число от 0 до 100');
       return one();
     }

     if (taskNum < prNum) {
       alert('Загаданное число больше');
       return one();
     } else if (taskNum > prNum) {
       alert('Загаданное число меньше ');
       return one();
     } else if (!Number(taskNum)) {
       alert('Не число!');
       return one();
     } else if (taskNum == prNum) {
       if (confirm('Ура число угадано!!! Начать игру заново?')) {
         location.reload();
       } else {
         alert('Всего доброго! =)');
       }
     }
   }
   one();
 }
 getRandom();