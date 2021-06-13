// Importing requirements
const superagent = require('superagent');
const movieTrailer = require('movie-trailer');

// Setting up async function
async function imdb(search) {
    try {
        // Preparing API
        const data = "http://www.omdbapi.com/?s=" + search + "&apikey=663f83c3";
        const res = await superagent.get(data);
        const body = res.body['Search'];
        const parsed = JSON.parse(JSON.stringify(body));

        // Setup array for data storage
        let mArray = [];

        // Check array/json length so loop wil work correctly
        let count = Object.entries(parsed).length;
        // Loop through movie data
        for (let i = 0; i < count; i++) {
            // Define movie info
            let mTitle = parsed[i]['Title'];
            let mYear = parsed[i]['Year'];
            let mID = parsed[i]['imdbID'];
            let mType = parsed[i]['Type'];
            let mPoster = parsed[i]['Poster'];
            // If movie title detected lookup and add trailer to array
            if (mTitle) {
                // Lookup trailer
                let Trailer = await movieTrailer(mTitle)
                // Push all general movie data to array
                mArray.push({title: mTitle, year: mYear, id: mID, type: mType, poster: mPoster, trailer: Trailer});
            }
        }

        // Log all data and return results
        // console.log(mArray); // all movie data
        return mArray;

    } catch (err) {
        // If error log in console
        console.error(err);
    }
}

// Export function for 'global' use
exports.imdb = imdb;