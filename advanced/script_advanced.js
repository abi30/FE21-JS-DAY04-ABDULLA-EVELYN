document.getElementById("container").addEventListener("mouseover", ()=>{
    document.getElementById("para").innerHTML="You are inside the circle";
});

document.getElementById("container").addEventListener("mouseout", ()=>{
    document.getElementById("para").innerHTML="You are outside the circle";
});

document.getElementById("container").addEventListener("click", ()=>{
    document.getElementById("container").style.backgroundColor="gray";
});

document.getElementById("container").addEventListener("dblclick", ()=>{
    document.getElementById("container").style.backgroundColor="blue";
});