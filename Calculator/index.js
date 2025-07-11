let inp1, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btn11, btn12, btn13, btn14, btn15, btn16;
btn1 = document.getElementById("btn-1").innerHTML;
btn2 = document.getElementById("btn-2").innerHTML;
btn3 = document.getElementById("btn-3").innerHTML;
btn4 = document.getElementById("btn-4").innerHTML;
btn5 = document.getElementById("btn-5").innerHTML;
btn6 = document.getElementById("btn-6").innerHTML;
btn7 = document.getElementById("btn-7").innerHTML;
btn8 = document.getElementById("btn-8").innerHTML;
btn9 = document.getElementById("btn-9").innerHTML;
btn10 = document.getElementById("btn-10").innerHTML;
btn11 = document.getElementById("btn-11").innerHTML;
btn12 = document.getElementById("btn-12").innerHTML;
btn13 = document.getElementById("btn-13").innerHTML;
btn14 = document.getElementById("btn-14").innerHTML;
btn15 = document.getElementById("btn-15").innerHTML;
btn16 = document.getElementById("btn-16").innerHTML;
btn17 = document.getElementById("btn-17").innerHTML;
function inpfunc1() {
    value = document.getElementById("inp-1").value;
    inp1 = document.getElementById("inp-1").value = value + btn1;
}
function inpfunc2() {
    value = document.getElementById("inp-1").value;
    inp1 = document.getElementById("inp-1").value = value + btn2;
}
function inpfunc3() {
    value = document.getElementById("inp-1").value;
    inp1 = document.getElementById("inp-1").value = value + btn3;
}
function inpfunc10() {
    value = document.getElementById("inp-1").value;
    inp1 = document.getElementById("inp-1").value = value + "/";
}
function inpfunc4() {
    value = document.getElementById("inp-1").value;
    inp1 = document.getElementById("inp-1").value = value + btn5;
}
function inpfunc5() {
    value = document.getElementById("inp-1").value;
    inp1 = document.getElementById("inp-1").value = value + btn6;
}
function inpfunc6() {
    value = document.getElementById("inp-1").value;
    inp1 = document.getElementById("inp-1").value = value + btn7;
}
function inpfunc11() {
    value = document.getElementById("inp-1").value;
    inp1 = document.getElementById("inp-1").value = value + "*";
}
function inpfunc7() {
    value = document.getElementById("inp-1").value;
    inp1 = document.getElementById("inp-1").value = value + btn9;
}
function inpfunc8() {
    value = document.getElementById("inp-1").value;
    inp1 = document.getElementById("inp-1").value = value + btn10;
}
function inpfunc9() {
    value = document.getElementById("inp-1").value;
    inp1 = document.getElementById("inp-1").value = value + btn11;
}
function inpfunc12() {
    value = document.getElementById("inp-1").value;
    inp1 = document.getElementById("inp-1").value = value + btn12;
}
function inpfunc0() {
    value = document.getElementById("inp-1").value;
    inp1 = document.getElementById("inp-1").value = value + btn13;
}
function inpfunc13() {
    value = document.getElementById("inp-1").value;
    inp1 = document.getElementById("inp-1").value = value + btn16;
}
function inpfunc14() {
    value = document.getElementById("inp-1").value;
    inp1 = document.getElementById("inp-1").value = value + btn17;
}
function calculate() {
    const display = document.getElementById('inp-1');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function clearvalue() {
    inp1 = document.getElementById("inp-1").value = " ";
}