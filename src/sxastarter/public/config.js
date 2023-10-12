// Define the Boxever queue
var _boxeverq = _boxeverq || [];

// Define the Boxever settings
var _boxever_settings = {
    client_key: '33b84227fa50a93c827d9adbc3e73e79', // Replace with your client key
    target: 'https://api.boxever.com/v1.2', // Replace with your API target endpoint specific to your data center region
    cookie_domain: '.personalize-sandbox-basic.vercel.app', // Replace with the top-level cookie domain of the website
    web_flow_target: "https://d35vb5cccm4xzp.cloudfront.net",
    pointOfSale: "Default" // Replace with the point of sale you have configured in your tenant
};

// Import the Boxever library asynchronously
(function() {
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;
    s.src = 'https://d1mj578wat5n4o.cloudfront.net/boxever-1.4.8.min.js';
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();
