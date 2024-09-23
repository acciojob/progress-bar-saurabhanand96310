//your JS code here. If required.
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var progress_front= document.querySelector(".progress-front")
var progress_back= document.querySelector(".progress-back")

var step=document.getElementsByClassName("circle")
var curr_checked=1;




next.onclick=function(){
    curr_checked++;
    if(curr_checked>step.length){
        curr_checked=step.length;
    }
    updateProgress()
}
prev.onclick=function(){
    curr_checked--;
    if(curr_checked<1){
        curr_checked=1;
    }
    updateProgress()
}

function updateProgress(){
    var i;
    for(i=0;i<step.length;i++){
        if(i<curr_checked){
            step[i].classList.add("active")
            // step[i].innerHTML=``
        }
        else{
            step[i].classList.remove("active")
        }
    }
    var checked=document.querySelectorAll(".active");
    progress_front.style.width =((checked.length-1)/(step.length-1))*100+"%"

    if(curr_checked==1){
        prev.disabled =true;
    }else if(curr_checked==step.length){
        next.disabled=true
    }else{
        prev.disabled=false;
        next.disabled=false;
    }
}
    

