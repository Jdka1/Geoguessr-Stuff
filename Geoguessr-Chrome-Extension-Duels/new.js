javascript: (

    function getNetworkRequest(c) {
        let capture_network_request = [];
        let capture_resource = performance.getEntriesByType(`resource`);
        for (let i = 0; i < capture_resource.length; i++) {
            if (capture_resource[i].initiatorType == `xmlhttprequest` || capture_resource[i].initiatorType == `script` || capture_resource[i].initiatorType == `img`) {
                if (!0) {
                    capture_network_request.push(capture_resource[i].name)
                }
            }
        }

        return capture_newtwork_request

        console.log(capture_network_request)
    }

)();

// 235


javascript: let x = async function () {
    function captureNetworkRequest(e) {
        let capture_newtwork_request = []; let capture_resource =
            performance.getEntriesByType(`resource`);
            for (let i = 0; i < capture_resource.length; i++) {
            if (capture_resource[i].initiatorType == `xmlhttprequest` || capture_resource[i].initiatorType == `script` || capture_resource[i].initiatorType == `img`) { if (!0) { capture_newtwork_request.push(capture_resource[i].name) } }
        }; return capture_newtwork_request
    }; function jsonp(uri) { return new Promise(function (resolve, reject) { let id = `_` + Math.round(10000 * Math.random()); let callbackName = `jsonp_callback_` + id; window[callbackName] = function (data) { delete window[callbackName]; let ele = document.getElementById(id); ele.parentNode.removeChild(ele); resolve(data) }; let src = uri + `&callback=` + callbackName; let script = document.createElement(`script`); script.src = src; script.id = id; script.addEventListener(`error`, reject); (document.getElementsByTagName(`head`)[0] || document.body || document.documentElement).appendChild(script) }) }; await jsonp(captureNetworkRequest().filter(url => { return url.includes(`GeoPhoto`) })[0]).then(data => { let coords = data[1][5][0][1][0].slice(2, 4); window.open(`https://www.google.com/maps/search/${coords[0]},+${coords[1]}`) })
}; x()