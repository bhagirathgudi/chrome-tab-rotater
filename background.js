chrome.alarms.create("1min", {
    "delayInMinutes":1,
    "periodInMinutes":1
});

chrome.alarms.onAlarm.addListener(function(alarm){
    if(alarm.name === "1min"){
        exe();
    }
});

function exe() { 
    chrome.windows.getLastFocused(
    {populate: true},function (window) {
        var length = window.tabs.length;
        for(var i =0; i< length; i++) {
            if(window.tabs[i].active) {
                var j = i +1;
                if(j === length) {
                    chrome.tabs.update(window.tabs[0].id, {active: true});
                } else {
                    chrome.tabs.update(window.tabs[j].id, {active: true});
                }
            }
        }
    });
}

