function santaDisappear () {
    let menuStatus = false;

// document.getElementById("menu").style.marginLeft = "-300px";
    if(menuStatus == false) {
        document.getElementsbyClassName("SantaClaus").style.visibility="visible";
        document.getElementById(Santa1).style.visibility="visible";
        // document.getElementById("menu").style.marginLeft = "0px";
        // document.getElementById("menu").style.transition = "1s";
        menuStatus = true;
    }else {
        document.getElementsByClassName("SantaClaus").style.visibility="hidden";
        document.getElementById(Santa1).style.visibility="hidden";
        // document.getElementById("menu").style.marginLeft = "-300px";
        menuStatus = false;
    }
document.getElementsByClassName("container").addEventListener("click",santaDisappear);
}



