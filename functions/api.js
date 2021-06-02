const express = require('express');
const TorrentSearchApi = require('torrent-search-api');
const app = express();
const port = 3000;
TorrentSearchApi.enableProvider('1337x');
TorrentSearchApi.enableProvider('Torrent9');
TorrentSearchApi.enableProvider('Torrentz2');
TorrentSearchApi.enableProvider('ThePirateBay');
TorrentSearchApi.enableProvider('KickassTorrents');
TorrentSearchApi.enableProvider('Rarbg');
TorrentSearchApi.enableProvider('TorrentProject');
TorrentSearchApi.enableProvider('Yts');
TorrentSearchApi.enableProvider('Limetorrents');
TorrentSearchApi.enableProvider('Eztv');



app.get('/', async (req, res)  => {
    try {
        const torrents = await TorrentSearchApi.search(
            ['1337x','Torrentz2','Torrent9','ThePirateBay','KickassTorrents','Rarbg','TorrentProject','Yts','Limetorrents','Eztv'], ['720','hindi'], 'Movies', 50);
        res.send(torrents)
    } catch (error) {
        console.log(error);
    }
    
});

app.listen(process.env.PORT ||  port, () => {
    console.log(`Example app listening on port ${port}!`)
});