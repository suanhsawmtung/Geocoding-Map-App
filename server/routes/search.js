const express = require('express');
const router = express.Router();
const axios = require('axios');
const url = require('url');

router.get('/:query', async (req, res) => {
    try{
        const query = req.params.query;
        const params = new URLSearchParams({
            access_token: process.env.API_KEY,
            ...url.parse(req.url, true).query,
        })
        const { data } = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?${params}`
        );
        res.json(data);
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;