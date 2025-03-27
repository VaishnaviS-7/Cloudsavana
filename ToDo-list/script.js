const inbox=document.getElementById("input-box");
const lcon=document.getElementById("list-cont");
function addtask(){
    if(inbox.value === ''){
       alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inbox.value;
        lcon.append(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.append(span);
    }
    inbox.value="";
    savedata();
}

lcon.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data", lcon.innerHTML);
}

function showtask(){
    lcon.innerHTML=localStorage.getItem("data");
}

showtask();