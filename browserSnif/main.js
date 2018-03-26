const msEdge = /edge/gi;
const msIE = /trident/gi;
const mozFF = /firefox/gi;

document.addEventListener('DOMContentLoaded', function() {
    const entry = document.getElementById('entry');
    const userAgentString = window.navigator.userAgent;
    const vendorString = window.navigator.vendor;
    let yourBrowser = '';
    let responseString = '';

    if (/Google/.test(vendorString) && /chrome/.test(userAgentString)) {
        console.log("It's Chrome");
        yourBrowser = 'Chrome';
        responseString = 'Your browsing with ' + yourBrowser + '!';
    } else if (msEdge.test(userAgentString)) {
        console.log("It's Edge");
        yourBrowser = 'Edge';
        responseString = 'Your browsing with ' + yourBrowser + '!';
    } else if (msIE.test(userAgentString)) {
        console.log("It's Internet Explorer");
        yourBrowser = 'Internet Explorer';
        responseString = 'Your browsing with ' + yourBrowser + '!';
    } else if (mozFF.test(userAgentString)) {
        console.log("It's FireFox");
        yourBrowser = 'FireFox';
        responseString = 'Your browsing with ' + yourBrowser + '!';
    } else {
        console.log("... must be Mosaic?");
        yourBrowser = 'Mosaic';
    }
    entry.innerHTML = responseString;

})
