chrome.alarms.create('countdownMin', {
  periodInMinutes: 20
});

chrome.alarms.onAlarm.addListener(function(alarm) {
  if (alarm.name == "countdownMin") {
    chrome.windows.create({
      url: chrome.runtime.getURL("main.html"),
      state: "maximized"
    });
    chrome.alarms.create('breakCountdown', {
      periodInMinutes: 5
    });
    chrome.windows.onFocusChanged.addListener(function(idk) {
      alert("Are you sure you don't want to take a break?")
    })
  }
  // if (alarm.name == "breakCountdown") {
  //   chrome.
  // }
});

