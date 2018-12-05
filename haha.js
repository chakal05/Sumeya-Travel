 /*document.getElementById("butin").onclick = function(){
  alert("FIRST LETTER IS UPPERCASE");

  let sasa = prompt("RESULTS OF 4*4", "");
  if (sasa == "Addis Abeba"){
    alert("you are right!");
  }
    else if
      (sasa == "New York") {
      alert("you are right")
    } 
    else if (sasa == "New Delhi"){
      alert("you are right")
    }
    else{
        alert("LEARN MORE ABOUT GEOGRAPHY!");
    }
    

}
*/
/*
 let garga;
let age = prompt("what is your age?", "");
  if (age >= 18) {
    garga = true;
    alert("bienvenu");
  }
  else {
  garga = false;
  alert("You are too young for this website");

  }
*/

/* let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
*/


/*
let access = prompt("age?", "");
 if(access > 18){
  alert("WELCOM!");
 } else if (access < 18){
   alert("COME BACK WHEN YOU ARE 18!");
 }
*/
/*

let entre = prompt("name?", "");

let reponse = (entre == "chakir") ? "WELCOM BRO!" :
(entre == "mohamed") ? "ok!" :
(entre == "khaire" ) ? "wright!" :
 "FUCK U!";
alert(reponse);
*/
   /* confirm command--


let jaja = "chakir";
 if ( jaja == "chakir") {
   console.log ("c vraaaiii");
 } else if ( jaja == "abdi"){
   console.log("c claaair");
 } else{

  console.log("no");
 }
 
 */
/*

 let jaha = confirm("is it U?");
  let hag = (jaha == true)? "noooce": "aigggghhhht";
 alert (hag);
 */
/*

 let director = null;
 let secretary = "Amina";
 let professeur = "";
 let teacher = "Omar";

let name = director || teacher || professeur || secretary;
console.log(name); */
/*
let v;
 let x = false || (v = 1);
console.log(x);
*/

/*

let age = 90;
if (age >= 14){
  console.log("oooookkkk");
} else if (age >=90){
  console.log("jajajajaja");
} else {
  console.log("nooooo");
}




var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);
/*

for(i=1;i<20;i++){
  if(i%2==0){
    console.log(i);
  }
  
  
  
}

*/
// Exercice = "reverse string"
/*
let name = "takwa";
function reverseString(){
  let splitNanme = name.split("");
  let reverseName = splitNanme.reverse();
  let joinLetters = reverseName.join("");
  return joinLetters;

}
console.log(reverseString());
*/
/*
// Exercise = "factorial of an integer!"

function factorial(number){
  let results = 1 ;
 for( let i=1; i<=number; i++){
  results = results * i;
//or results *= i;
 }

 return results;
 
}
console.log(factorial(5));
*/
// getting the day of the month and linking it to other functionalities
/*
let d = new Date();
let aca = d.getDate();
console.log(d);
*/
// do...while statement executes as long as the condition is true
/*
let jama = 1;
do {
  jama+= 5;
  console.log(jama);

} while(jama <15);
*/
/*
// "while statement" executes as long as the condition is true
let t = 2;
lala:
{while(t<8){
  t+=1;
  console.log(t);
}}
*/
/*
let browser = "Firefox";
switch (browser) {
  case 'Edge':
    console.log( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    console.log( 'Okay we support these browsers too' );
    break;

  default:
    console.log( 'We hope that this page looks ok!' );
} 

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
*/
/*
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
*/
/*
let a = "3";
switch(a){
  case '0':
  console.log("0");
  break;
  case '1':
  console.log("1");
  break;
  case '3':
  case '4':
  console.log("MyNigga");
  break;
  default:
  console.log("Lion!");



}
*/