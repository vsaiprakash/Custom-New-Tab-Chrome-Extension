var DivTime = document.getElementById('time');
var GreetingString = document.getElementById('greet');  
  
var currentTime = new Date();
var PMflag = false;
      
var hour = currentTime.getHours();
var min  = currentTime.getMinutes();
var sec  = currentTime.getSeconds();  
   
var timeUpdater = function (){  
  
  var timeString;
  
  if(hour >= 12){
    PMflag = true;
    if(hour > 12){
      hour = hour - 12;
    }
  }else
  if(hour === 0){
    PMflag = false;
    hour = 12;
  }//hour is modified
  
  
  timeString = ""+hour+":"+min; 
  
  if(PMflag===true){
    timeString = timeString + " PM";
    greetingUpdater(hour,!PMflag);
  }else{
    timeString = timeString + " AM";
    greetingUpdater(hour,!PMflag);
  }
  
  DivTime.innerHTML = timeString;
  
}; 
    
var userNameLoader = function (){
  // StorageArea.get(userName,function(userName){
  //   document.getElementById("username").innerHTML=username.toString();
  // });
  
  
  
  if (localStorage.getItem("userName") === null) {
    document.getElementById("username").innerHTML = "Guest";
  }
  
  //Using Local storage (HTML5) for issue of asynchronous update of username
  document.getElementById("username").innerHTML = localStorage["userName"];
  
  
  // chrome.storage.sync.get('userName', function(userName) {
  //     document.getElementById("username").innerHTML = userName;
  //   });
};

var greetingUpdater = function(hour,isAM){
  if(isAM){
    GreetingString.innerHTML = "Good Morning ";
  }
  else if(hour <= 6){
    GreetingString.innerHTML = "Good Afternoon ";
  }
  else{
    GreetingString.innerHTML = "Good Evening ";
  }
};
window.onload = timeUpdater;
window.onload = userNameLoader;
      
window.setInterval(timeUpdater, 1000);

