var userWins = 0;
var cpuWins  = 0;
var ties     = 0;


var options = ['rock', 'paper', 'scissors'];

document.querySelectorAll('.choice-btn')[0].addEventListener('click', function () {


 var cpuRoll = Math.floor(Math.random() * 3);
 var cpuChoice;


 if (cpuRoll === 0) { cpuChoice = 'rock'; }
 if (cpuRoll === 1) { cpuChoice = 'paper'; }
 if (cpuRoll === 2) { cpuChoice = 'scissors'; }
 if (cpuChoice === 'rock') {
   ties++;
   document.getElementById('resultMessage').textContent = "It's a tie!";
   document.getElementById('resultMessage').className   = 'result-message tie';
 }
 if (cpuChoice === 'paper') {
   cpuWins++;
   document.getElementById('resultMessage').textContent = 'You lose!';
   document.getElementById('resultMessage').className   = 'result-message lose';
 }
 if (cpuChoice === 'scissors') {
   userWins++;
   document.getElementById('resultMessage').textContent = 'You win!';
   document.getElementById('resultMessage').className   = 'result-message win';
 }


 document.getElementById('userScore').textContent = userWins;
 document.getElementById('cpuScore').textContent  = cpuWins;
 document.getElementById('tieScore').textContent  = ties;


 document.querySelectorAll('.choice-btn')[0].classList.add('selected');
 document.querySelectorAll('.choice-btn')[1].classList.remove('selected');
 document.querySelectorAll('.choice-btn')[2].classList.remove('selected');


 document.getElementById('resultArea').classList.remove('hidden');
 document.getElementById('playAgainBtn').classList.remove('hidden');
});

document.querySelectorAll('.choice-btn')[1].addEventListener('click', function () {


 var cpuRoll = Math.floor(Math.random() * 3);
 var cpuChoice;


 if (cpuRoll === 0) { cpuChoice = 'rock'; }
 if (cpuRoll === 1) { cpuChoice = 'paper'; }
 if (cpuRoll === 2) { cpuChoice = 'scissors'; }
 if (cpuChoice === 'rock') {
   userWins++;
   document.getElementById('resultMessage').textContent = 'You win!';
   document.getElementById('resultMessage').className   = 'result-message win';
 }
 if (cpuChoice === 'paper') {
   ties++;
   document.getElementById('resultMessage').textContent = "It's a tie!";
   document.getElementById('resultMessage').className   = 'result-message tie';
 }
 if (cpuChoice === 'scissors') {
   cpuWins++;
   document.getElementById('resultMessage').textContent = 'You lose!';
   document.getElementById('resultMessage').className   = 'result-message lose';
 }


 document.getElementById('userScore').textContent = userWins;
 document.getElementById('cpuScore').textContent  = cpuWins;
 document.getElementById('tieScore').textContent  = ties;


 document.querySelectorAll('.choice-btn')[0].classList.remove('selected');
 document.querySelectorAll('.choice-btn')[1].classList.add('selected');
 document.querySelectorAll('.choice-btn')[2].classList.remove('selected');


 document.getElementById('resultArea').classList.remove('hidden');
 document.getElementById('playAgainBtn').classList.remove('hidden');
});

document.querySelectorAll('.choice-btn')[2].addEventListener('click', function () {


 var cpuRoll = Math.floor(Math.random() * 3);
 var cpuChoice;


 if (cpuRoll === 0) { cpuChoice = 'rock'; }
 if (cpuRoll === 1) { cpuChoice = 'paper'; }
 if (cpuRoll === 2) { cpuChoice = 'scissors'; }
 if (cpuChoice === 'rock') {
   cpuWins++;
   document.getElementById('resultMessage').textContent = 'You lose!';
   document.getElementById('resultMessage').className   = 'result-message lose';
 }
 if (cpuChoice === 'paper') {
   userWins++;
   document.getElementById('resultMessage').textContent = 'You win!';
   document.getElementById('resultMessage').className   = 'result-message win';
 }
 if (cpuChoice === 'scissors') {
   ties++;
   document.getElementById('resultMessage').textContent = "It's a tie!";
   document.getElementById('resultMessage').className   = 'result-message tie';
 }


 document.getElementById('userScore').textContent = userWins;
 document.getElementById('cpuScore').textContent  = cpuWins;
 document.getElementById('tieScore').textContent  = ties;


 document.querySelectorAll('.choice-btn')[0].classList.remove('selected');
 document.querySelectorAll('.choice-btn')[1].classList.remove('selected');
 document.querySelectorAll('.choice-btn')[2].classList.add('selected');


 document.getElementById('resultArea').classList.remove('hidden');
 document.getElementById('playAgainBtn').classList.remove('hidden');
});

 document.getElementById('playAgainBtn').addEventListener('click', function () {
 document.getElementById('resultArea').classList.add('hidden');
 document.getElementById('playAgainBtn').classList.add('hidden');
 document.querySelectorAll('.choice-btn')[0].classList.remove('selected');
 document.querySelectorAll('.choice-btn')[1].classList.remove('selected');
 document.querySelectorAll('.choice-btn')[2].classList.remove('selected');
});
