document.addEventListener('DOMContentLoaded', function() {
    var changeTimer = document.getElementById("changeTimer");
    changeTimer.addEventListener('click', function() {
        var timeMin = Number(document.getElementById("minutes").value);
        if (!timeMin) {
            message('Error: No value specified');
            return;
        }
        chrome.alarms.clear('countdownMin');
        chrome.alarms.create('countdownMin', {
            periodInMinutes: timeMin
        });
        console.log("changed val to");
        console.log(timeMin);
    })
})


