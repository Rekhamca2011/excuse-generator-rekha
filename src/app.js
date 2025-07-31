import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

window.onload = function() {
  //write your code here
  document.querySelector("#head").innerHTML = "OMG! you will not believe me but...";
  document.querySelector("#excuse").innerHTML = findRandom(who) + ' ' + findRandom(action) + ' ' + findRandom(what)+ ' '  + findRandom(when)
};

function findRandom(arrayWords){
  let min = 0;
  let max = arrayWords.length - 1;
  console.log(max,min,arrayWords);
  let r = getRandomNumber(min, max);
  return arrayWords[r];
}

function getRandomNumber(x,y){
  return Math.floor(Math.random() * (y-x) + x);
}