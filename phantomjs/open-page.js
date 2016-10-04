var page = require('webpage').create();
 
page.open('http://net.tutsplus.com', function (s) {
    console.log(s);
    phantom.exit();
});
