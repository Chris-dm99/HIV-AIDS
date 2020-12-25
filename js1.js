var Username=document.loging.Username;
var message=document.getElementById("message");

function run() {
  
    if(Username.value.length<6){
        message .innerHTML="Needs more characters";
        message .style.color="red";
        message .style.fontSize="30px";
        message .style.fontStyle="bold";
        
       }
    else if (Username.value.length==6) {
        message.innerHTML="It's Ok"
        message.style.color="orange";
        message.style.fontSize="30px";
     message.style.fontStyle="bold";
       
    } else {
        message.innerHTML="Limits has been exceeded";
        message.style.color="green";
        message.style.fontSize="30px";
        message.style.fontStyle="bold";
        
    }
    
}