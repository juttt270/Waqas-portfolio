let d13d1p1, d13d1p2, d13d1p3, d13d1p4, d13d2, d13d3, d13d4, d13d5;
d13d1p1 = document.getElementById("d13d1p1");
d13d1p2 = document.getElementById("d13d1p2");
d13d1p3 = document.getElementById("d13d1p3");
d13d1p4 = document.getElementById("d13d1p4");
d13d2 = document.getElementById("d13d2");
d13d3 = document.getElementById("d13d3");
d13d4 = document.getElementById("d13d4");
d13d5 = document.getElementById("d13d5");
document.getElementById("d13d1p1").addEventListener("click", func1);
function func1() {
    d13d1p1.style.color = "black";
    d13d1p2.style.color = "#c9c6c6";
    d13d1p3.style.color = "#c9c6c6";
    d13d1p4.style.color = "#c9c6c6";
    d13d2.style.display = "block";
    d13d3.style.display = "none";
    d13d4.style.display = "none";
    d13d5.style.display = "none";
}
document.getElementById("d13d1p2").addEventListener("click", func2);
function func2() {
    d13d1p1.style.color = "#c9c6c6";
    d13d1p2.style.color = "black";
    d13d1p3.style.color = "#c9c6c6";
    d13d1p4.style.color = "#c9c6c6";
    d13d2.style.display = "none";
    d13d3.style.display = "block";
    d13d4.style.display = "none";
    d13d5.style.display = "none";
}
document.getElementById("d13d1p3").addEventListener("click", func3);
function func3() {
    d13d1p1.style.color = "#c9c6c6";
    d13d1p2.style.color = "#c9c6c6";
    d13d1p3.style.color = "black";
    d13d1p4.style.color = "#c9c6c6";
    d13d2.style.display = "none";
    d13d3.style.display = "none";
    d13d4.style.display = "block";
    d13d5.style.display = "none";
}
document.getElementById("d13d1p4").addEventListener("click", func4);
function func4() {
    d13d1p1.style.color = "#c9c6c6";
    d13d1p2.style.color = "#c9c6c6";
    d13d1p3.style.color = "#c9c6c6";
    d13d1p4.style.color = "black";
    d13d2.style.display = "none";
    d13d3.style.display = "none";
    d13d4.style.display = "none";
    d13d5.style.display = "block";
}