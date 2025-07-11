let a = 0, button1, button2, button3, button4, button5, button6, button7, button8, button9, buttons, warning;
buttons = document.getElementsByClassName("items").innerHTML;
// function wrong() {
//   if (buttons == "X") {
//      warning = document.getElementById("warning").innerHTML = "Alresdy filled";
//    }
//   else{

// let array , array1,array2,array3;
//  array = [" ", "X", "Y"];
//  array1=array[0];
//  array2=array[1];
//  array3=array[2];
//  array1=document.getElementById("items-1").innerHTML=array[0];
//  array2=document.getElementById("items-1").innerHTML=array[1]
//  array3=document.getElementById("items-1").innerHTML=array[2]

function calling1() {
  // if (array1==true) {
  //   button1 = document.getElementById("items-1").innerHTML= array[1];
  // }
  // else if (array2==true) {
  //   button1 = document.getElementById("items-1").innerHTML= array[2];
  // }
  if (a == 0) {
    button1 = document.getElementById("items-1").innerText = "X";
    a = 1;
  }
  else if (a == 1) {
    button1 = document.getElementById("items-1").innerText = "Y";
    a = 0;
  }
  else  if (button1 == "X" && button1 =="Y"){
     warning = document.getElementById("warning").innerHTML = "Already filled";
  }
}
function calling2() {
  // if (array[0]) {
  //   button2 = document.getElementById("items-2").innerHTML= array[1];
  // }
  // else if (array[1]) {
  //   button2 = document.getElementById("items-2").innerHTML= array[2];
  // }
   if (a == 0) {
     button2 = document.getElementById("items-2").innerText = "X";
     a = 1;
   }
   else if (a == 1) {
     button2 = document.getElementById("items-2").innerText = "Y";
     a = 0;
   }
  else {
    warning = document.getElementById("warning").innerHTML = "Already filled";
  }
}
function calling3() {
  if (a == 0) {
    button3 = document.getElementById("items-3").innerText = "X";
    a = 1;
  }
  else if (a == 1) {
    button3 = document.getElementById("items-3").innerText = "Y";
    a = 0;
  }
  else {

    warning = document.getElementById("warning").innerHTML = "Already filled";
  }
}
function calling4() {
  if (a == 0) {
    button4 = document.getElementById("items-4").innerText = "X";
    a = 1;
  }
  else if (a == 1) {
    button4 = document.getElementById("items-4").innerText = "Y";
    a = 0;
  }
  else {

    warning = document.getElementById("warning").innerHTML = "Already filled";
  }
}
function calling5() {
  if (a == 0) {
    button5 = document.getElementById("items-5").innerText = "X";
    a = 1;
  }
  else if (a == 1) {
    button5 = document.getElementById("items-5").innerText = "Y";
    a = 0;
  }
  else {

    warning = document.getElementById("warning").innerHTML = "Already filled";
  }
}
function calling6() {
  if (a == 0) {
    button6 = document.getElementById("items-6").innerText = "X";
    a = 1;
  }
  else if (a == 1) {
    button6 = document.getElementById("items-6").innerText = "Y";
    a = 0;
  }
  else {

    warning = document.getElementById("warning").innerHTML = "Already filled";
  }
}
function calling7() {
  if (a == 0) {
    button7 = document.getElementById("items-7").innerText = "X";
    a = 1;
  }
  else if (a == 1) {
    button7 = document.getElementById("items-7").innerText = "Y";
    a = 0;
  }
  else {

    warning = document.getElementById("warning").innerHTML = "Already filled";
  }
}
function calling8() {
  if (a == 0) {
    button8 = document.getElementById("items-8").innerText = "X";
    a = 1
  }
  else if (a == 1) {
    button8 = document.getElementById("items-8").innerText = "Y";
    a = 0;
  }
  else {

    warning = document.getElementById("warning").innerHTML = "Already filled";
  }
}
function calling9() {
  if (a == 0) {
    button9 = document.getElementById("items-9").innerText = "X";
    a = 1;
  }
  else if (a == 1) {
    button9 = document.getElementById("items-9").innerText = "Y";
    a = 0;
  }
  else {
    warning = document.getElementById("warning").innerHTML = "Already filled";
  }
}
//   }
// }


button1 = document.getElementById("items-1").innerHTML;
button2 = document.getElementById("items-2").innerHTML;
button3 = document.getElementById("items-3").innerHTML;
button4 = document.getElementById("items-4").innerHTML;
button5 = document.getElementById("items-5").innerHTML;
button6 = document.getElementById("items-6").innerHTML;
button7 = document.getElementById("items-7").innerHTML;
button8 = document.getElementById("items-8").innerHTML;
button9 = document.getElementById("items-9").innerHTML;
// buttons = document.getElementsByClassName("items").innerHTML;
function check() {
  warning = document.getElementById("warning");
  // warning.style.padding = "5px 10px";
  if (button1 == "X" && button2 == "X" && button3 == "X") {
    warning = document.getElementById("warning").innerHTML = "Player One Winner";
  }
  else if (button4 == "X" && button5 == "X" && button6 == "X") {
    warning = document.getElementById("warning").innerHTML = "Player One Winner";
  }
  else if (button7 == "X" && button8 == "X" && button9 == "X") {
    warning = document.getElementById("warning").innerHTML = "Player One Winner";
  }
  else if (button1 == "X" && button4 == "X" && button7 == "X") {
    warning = document.getElementById("warning").innerHTML = "Player One Winner";
  }
  else if (button2 == "X" && button5 == "X" && button8 == "X") {
    warning = document.getElementById("warning").innerHTML = "Player One Winner";
  }
  else if (button3 == "X" && button6 == "X" && button9 == "X") {
    warning = document.getElementById("warning").innerHTML = "Player One Winner";
  }
  else if (button1 == "X" && button5 == "X" && button9 == "X") {
    warning = document.getElementById("warning").innerHTML = "Player One Winner";
  }
  else if (button3 == "X" && button5 == "X" && button7 == "X") {
    warning = document.getElementById("warning").innerHTML = "Player One Winner";
  }
  else if (button1 == "Y" && button2 == "Y" && button3 == "Y") {
    warning = document.getElementById("warning").innerHTML = "Player two Winner";
  }
  else if (button4 == "Y" && button5 == "Y" && button6 == "Y") {
    warning = document.getElementById("warning").innerHTML = "Player two Winner";
  }
  else if (button7 == "Y" && button8 == "Y" && button9 == "Y") {
    warning = document.getElementById("warning").innerHTML = "Player two Winner";
  }
  else if (button1 == "Y" && button4 == "Y" && button7 == "Y") {
    warning = document.getElementById("warning").innerHTML = "Player two Winner";
  }
  else if (button2 == "Y" && button5 == "Y" && button8 == "Y") {
    warning = document.getElementById("warning").innerHTML = "Player two Winner";
  }
  else if (button3 == "Y" && button6 == "Y" && button9 == "Y") {
    warning = document.getElementById("warning").innerHTML = "Player two Winner";
  }
  else if (button1 == "Y" && button5 == "Y" && button9 == "Y") {
    warning = document.getElementById("warning").innerHTML = "Player two Winner";
  }
  else if (button3 == "Y" && button5 == "Y" && button7 == "Y") {
    warning = document.getElementById("warning").innerHTML = "Player two Winner";
  }
  // else if (button1 + button2 + button3 !== "Y" && button4 + button5 + button6 !== "Y" && button7 + button8 + button9 !== "Y" && button3 + button5 + button7 !== "Y") {
  //   warning = document.getElementById("warning").innerHTML = "Match Draw";
  // }
  // else if (button1 !== "" && button2 !== "" && button3 !== "" && button4 !== "" && button5 !== "" && button6 !== "" && button7 !== "" && button8 !== "" && button9 !== "") {
  //   warning = document.getElementById("warning").innerHTML = "Match Draw";
  // }
  // else if (buttons !== X ) {
  //   warning = document.getElementById("warning").innerHTML = "Match Draw";
  // }
  // else {
  //   warning = document.getElementById("warning").innerHTML = "Match Draw";
  // }
}

// function restart() {
//   a = 0;
//   document.getElementById("items-1").innerHTML = "";
//   document.getElementById("items-2").innerHTML = "";
//   document.getElementById("items-3").innerHTML = "";
//   document.getElementById("items-4").innerHTML = "";
//   document.getElementById("items-5").innerHTML = "";
//   document.getElementById("items-6").innerHTML = "";
//   document.getElementById("items-7").innerHTML = "";
//   document.getElementById("items-8").innerHTML = "";
//   document.getElementById("items-9").innerHTML = "";
//   document.getElementById("warning").innerText = "";
//   warning = document.getElementById("warning");
//   warning.style.padding = "0";
// }