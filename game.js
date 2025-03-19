var submit = document.getElementById("submit");

var message = document.getElementById("message");
var liveno = document.getElementById("livesno");
var rannum = Math.round(Math.random()*100);
var lives=5;
var msg;
submit.onclick=()=>{
    
    var input = document.getElementById("num").value;
    lives--;
    if(lives==0){
       location.href="./out.html";
    }
    else if(input<rannum){
      msg = "kamiya iruku da athigama ana number a kudu";
    }
    else if(input>rannum){
        msg = "athigama irukam konjam kammiya kudu!";
    }
    else if(input==rannum){
        location.href="./win.html";
    }
    message.style.display="inherit";
    message.innerHTML=msg;
    liveno.innerHTML=lives;
}