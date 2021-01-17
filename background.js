chrome.alarms.create('countdownMin', {
  periodInMinutes: 20
});

chrome.alarms.onAlarm.addListener(function(alarm) {
  if (alarm.name == "countdownMin") {
    chrome.windows.create({
      url: chrome.runtime.getURL("main.html"),
      state: "maximized"
    });
  }
});
