chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request.gmapsLink);
        document.getElementById("gmaps_link").src = request.gmapsLink;
    }
);