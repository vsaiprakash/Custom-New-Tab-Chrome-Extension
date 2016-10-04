var DivTime = document.getElementById('time');
      
      
var timeUpdater = function (){  
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
window.onload = timeUpdater;
window.onload = userNameLoader;
      
window.setInterval(timeUpdater, 1000);

