// Requirements
const express = require('express');
const router = express.Router();

// Get call + pass values to rendered page
router.get('/', function (req, res, next) {
    const infoStatus = {
        requestStatus: res.statusCode,
        code: "404"
    };
    res.render('error',
        {
            title: "Error", // Set page title
            request: infoStatus
        });
});

// Export route so it can be loaded
module.exports = router;