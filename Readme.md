The API script located in both projects (/modules/imdb.js) needs an API key which you can get from http://www.omdbapi.com/
        
        const data = "http://www.omdbapi.com/?s=" + search + "&apikey=";
        
   
   
   needs to become
   
   
           const data = "http://www.omdbapi.com/?s=" + search + "&apikey=12345";
