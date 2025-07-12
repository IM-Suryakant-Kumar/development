
  chrome.alarms.onAlarm.addListener(function() {
    chrome.browserAction.setBadgeText({text: ''});
    chrome.notifications.create({
        type:     'basic',
        iconUrl:  'StayFit.png',
        title:    'Time to move your body joints and hydrate yourself',
        message:  'Fitness never goes out of fashion!!',
        buttons: [
          {title: 'Keep it Flowing.'}
        ],
        priority: 0});
  });
  chrome.notifications.onButtonClicked.addListener(function() {
    chrome.storage.sync.get(['minutes'], function(obj) {
      chrome.browserAction.setBadgeText({text: 'ON'});
      chrome.alarms.create({delayInMinutes: obj.minutes});
 
    });
  });
  

chrome.notifications.onClicked.addListener(function() {
    chrome.storage.sync.get(['minutes'], function(obj) {
      chrome.browserAction.setBadgeText({text: 'ON'});
      chrome.alarms.create({delayInMinutes: obj.minutes});
   
    });
  });
    chrome.notifications.onClosed.addListener(function() {
    chrome.storage.sync.get(['minutes'], function(obj) {
      chrome.browserAction.setBadgeText({text: 'ON'});
      chrome.alarms.create({delayInMinutes: obj.minutes});
      console.log("closed")
      
    });
  })

