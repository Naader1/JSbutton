function myFunctio() {
    document.getElementById("promjena").innerHTML = "Nene.. Ipak je Rimac(nevera) najbolji auto";
}


function myFunction() {
    document.getElementById("AnchorChange").innerHTML = "nader.com";
    document.getElementById("AnchorChange").href = "http://www.Nader-AlBuhisi.com";
    document.getElementById("AnchorChange").target = "_blank";
}



const name = document.querySelector(".name");

function changeColor(color) {
   name.style.color = color;
}


function main(){
    document.getElementById("main").innerHTML =
    "<a href='#' onclick='sub()'>Imam 25 godina</a>";
    }
    function sub(){
    document.getElementById("sub").innerHTML =
    "Zivim u Zagrebu";
    }