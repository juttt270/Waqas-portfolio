let logo, div,a=0;
div = document.getElementById("home-nav");

logo = document.getElementById("lines-logo").addEventListener("click", listFunc);
function listFunc() {
    if (a == 0) {
        div.style.display = "block";
        a = 1;
        console.log("jb");
    }
    else {
        div.style.display = "none";
        a = 0;
        console.log("number2");
    }
}