document.addEventListener('DOMContentLoaded', function() {
    var changeTimer = document.getElementById('changeTimer');
    var response = document.getElementById('response');

    changeTimer.addEventListener('click', function() {
        var timeMin = Number(document.getElementById("minutes").value);
        if (!timeMin) {
            response.innerHTML = 'Error: No value specified';
            response.style.color = "red";
            return;
        }

        chrome.alarms.clear('countdownMin');
        chrome.alarms.create('countdownMin', {
            periodInMinutes: timeMin
        });

        response.innerHTML = 'Alarm set for ' + timeMin + ' minute(s) from now!';
        response.style.color = "green";

        console.log("changed val to");
        console.log(timeMin);
    })
})
