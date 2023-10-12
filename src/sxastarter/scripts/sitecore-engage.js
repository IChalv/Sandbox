// Initialize the engage variable
var engage = undefined;

// Create and inject the <script> tag into the HTML
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
s.src = "https://d1mj578wat5n4o.cloudfront.net/sitecore-engage-v.1.4.1.min.js";
var x = document.querySelector("script");
x.parentNode.insertBefore(s, x);    

// Initialize the Engage SDK
s.addEventListener("load", async () => {
    var settings = {
        clientKey: "33b84227fa50a93c827d9adbc3e73e79",
        targetURL: "https://api-engage-eu.sitecorecloud.io",
        pointOfSale: "Default",
        cookieDomain: ".personalize-sandbox-basic.vercel.app",
        cookieExpiryDays: 365,
        forceServerCookieMode: false,
        includeUTMParameters: true,
        webPersonalization: true /* boolean or object. See Settings object for all options. Default: false */
    };
    engage = await window.Engage.init(settings);
    
    // Send a VIEW event
    // ...
});
