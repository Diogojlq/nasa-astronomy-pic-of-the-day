const axios = require('axios');

async function getPictureUrl(req,res) {
    API_KEY = 'BHrZMhlIhQwL1aZlYbB9CLXqbNBWP4X1o9xiQJQi'
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
    const imgUrl = await axios.get(url)
    .then((response) => {
        const imgUrl = response.data
        return imgUrl
    })
    .catch((error) => {
        console.error(error);
    })
    return res.status(200).json(imgUrl)
}

module.exports = getPictureUrl;