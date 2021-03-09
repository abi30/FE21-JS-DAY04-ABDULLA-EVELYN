document.getElementById("container").addEventListener("mouseover", ()=>{

    var my_event= document.getElementById("para");
    my_event.innerHTML="You are inside the circle";
    my_event.style.textAlign="center";
    my_event.style.marginTop="9rem";
    my_event.style.color="#fff";
    my_event.style.fontSize="24px";

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