(function () {
    const express = require("express");
    const app = express();

    app.use(express.static(__dirname + "/dist/ng-pwa"));
    // app.get('/haribolportal', function (req, res) {
    //     res.sendFile(path.join(__dirname + '/dist/index.html'));
    // });
    app.listen(3000);
    console.log("port" + 3000);
})();