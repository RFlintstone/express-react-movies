// Requirements
const express = require('express');
const router = express.Router();
const fs = require('fs');

// Load config
const rawconfig = fs.readFileSync('config.json');
const config = JSON.parse(rawconfig);

// Get page names
const pageNames = [];
for (let i in config.pages) {
    pageNames.push(config.pages[i]);
}

// Get URLs for pages
const pageURLs = [];
for (let i in config.pageURLs) {
    pageURLs.push(config.pageURLs[i]);
}

// Get call + pass values to rendered page
router.get('/', function (req, res, next) {
    res.render('index',
        {
            title: 'Home',
            headertitle: 'Movie Swiper',
            nameList: pageNames,
            urlList: pageURLs
        });
});

// Export route so it can be loaded
module.exports = router;