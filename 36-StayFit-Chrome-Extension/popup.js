const sixtyMinBtn = document.getElementById('60min');
const thirtyMinBtn =  document.getElementById('30min');
const fourtyFiveMinBtn = document.getElementById('45min');
const cancelBtn =   document.getElementById('cancelAlarm');


function setAlarm(event) {
    let minutes = parseFloat(event.target.value);
    chrome.browserAction.setBadgeText({text: 'ON'});
    chrome.alarms.create({delayInMinutes: minutes});
    chrome.storage.sync.set({minutes: minutes});
    window.close();
  }
  
  function clearAlarm() {
    chrome.browserAction.setBadgeText({text: ''});
    chrome.alarms.clearAll();
    window.close();
  }
  

sixtyMinBtn.addEventListener('click', setAlarm);
fourtyFiveMinBtn.addEventListener('click', setAlarm);
thirtyMinBtn.addEventListener('click', setAlarm);
cancelBtn.addEventListener('click', clearAlarm);