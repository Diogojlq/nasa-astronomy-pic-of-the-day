const express = require('express');

apiRouter = express.Router();

apiRouter.get("/", async(req,res)=> {
    API_KEY = 'BHrZMhlIhQwL1aZlYbB9CLXqbNBWP4X1o9xiQJQi'
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
    const options = {
        "method":"GET",
    }
    const response = await fetch(url, options);
    console.log(response.url)
    const imageUrl = await response.url
    res.render(async()=>{"index",{
        image : imageUrl
}})
})


module.exports = apiRouter;