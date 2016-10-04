function saveUserData(){
  var userName = document.forms["userData"]["username"].value;
  
  if (!userName) {
    alert('Error: No value specified');
    return;
  }
        
  // chrome.storage.sync.set({'userName': userName}, function() {
  // // Notify that we saved.
  //     alert("Settings saved: "+userName);
  // });
  
  //Using localStorage for issue of asynchronous update of username
  localStorage["userName"] = userName;
  alert("Username: "+userName +" saved!");
}

document.getElementById('save').addEventListener('click',
    saveUserData);