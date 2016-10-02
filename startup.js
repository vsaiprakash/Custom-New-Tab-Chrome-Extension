var DivTime = document.getElementById('time');
      
      
var timeUpdater = function fn(){  
  var currentTime = new Date();
  var PMflag = false;
  var timeString;
      
  hour = currentTime.getHours();
  min  = currentTime.getMinutes();
  sec  = currentTime.getSeconds();
  
  if(hour >= 12){
    PMflag = true;
    if(hour > 12){
      hour = hour - 12;
    }
  }else
  if(hour === 0){
    PMflag = false;
    hour = 12;
  }
  
  timeString = ""+hour+":"+min; 
  
  if(PMflag===true){
    timeString = timeString + " PM";  
  }else{
    timeString = timeString + " AM";
  }
  
  DivTime.innerHTML = timeString;
  
}; 
    
window.onload = timeUpdater;
      
window.setInterval(timeUpdater, 1000);


function getValue(){
  var retVal = prompt("Enter your name : ", "your name here");
  alert(retVal);
  
}