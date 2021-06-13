The API script located in both projects (/modules/imdb.js) needs an API key which you can get from http://www.omdbapi.com/
        
        const data = "http://www.omdbapi.com/?s=" + search + "&apikey=";
        
   
   
   needs to become
   
   
           const data = "http://www.omdbapi.com/?s=" + search + "&apikey=12345";


You can setup the latest version of the assignment (located in folder 'reactv2') by going to the (root of) the folder and
running ``npm i --save`` and then start it by running ``npm start``. The page of the application will then automatically open in your browser.