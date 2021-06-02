const express = require('express');
const TorrentSearchApi = require('torrent-search-api');
const app = express();
const port = 3000;
TorrentSearchApi.enableProvider('Torrent9');

app.get('/', async (req, res)  => {
    const torrents = await TorrentSearchApi.search(['Torrent9'], '1080', 'Movies', 20);
    res.send(torrents)
});

app.listen(process.env.PORT ||  port, () => {
    console.log(`Example app listening on port ${port}!`)
});