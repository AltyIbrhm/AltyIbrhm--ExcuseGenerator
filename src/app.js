/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function getRandomElement(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// function randomWhoElements() {
//   let randomWho = randomIndex(who);
//   let randomWhoElement = who[randomWho];

//   return randomWhoElement;
// }
// function randomActionElements() {
//   let randomAction = randomIndex(action);
//   let randomActionElement = action[randomAction];

//   return randomActionElement;
// }
// function randomWhatElements() {
//   let randomWhat = randomIndex(what);
//   let randomWhatElement = what[randomWhat];

//   return randomWhatElement;
// }
// function randomWhenElements() {
//   let randomWhen = randomIndex(when);
//   let randomWhenElement = when[randomWhen];

//   return randomWhenElement;
// }
window.onload = function() {
  let Excuse = `
  ${getRandomElement(who)}  
  ${getRandomElement(action)} 
  ${getRandomElement(what)} 
  ${getRandomElement(when)}`;

  document.getElementById("excuse").innerHTML = Excuse;
};
