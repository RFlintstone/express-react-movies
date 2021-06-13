// Requirements
const imdb = require("../modules/imdb");
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
            title: 'Home', // Set page title for page/template
            headertitle: 'Movie Swiper', // Set header title for page/template
            nameList: pageNames, // Pass on names for NAV
            urlList: pageURLs, // Pass on urls for NAV
            api: imdb // Make imdb api function available in the template
        });
});

// Export route so it can be loaded
module.exports = router;