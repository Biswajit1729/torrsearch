const express = require('express');
const TorrentSearchApi = require('torrent-search-api');
const app = express();
const port = 3000;
TorrentSearchApi.enableProvider('Torrent9');
TorrentSearchApi.enableProvider('Torrentz2');
TorrentSearchApi.enableProvider('1337x');
TorrentSearchApi.enableProvider('ThePirateBay');
TorrentSearchApi.enableProvider('KickassTorrents');
TorrentSearchApi.enableProvider('Rarbg');
TorrentSearchApi.enableProvider('TorrentProject');
TorrentSearchApi.enableProvider('Yts');
TorrentSearchApi.enableProvider('Limetorrents');
TorrentSearchApi.enableProvider('Eztv');



app.get('/', async (req, res)  => {
    const torrents = await TorrentSearchApi.search(
        ['Torrent9','Torrentz2','1337x','ThePirateBay','KickassTorrents','Rarbg','TorrentProject','Yts','Limetorrents','Eztv'], ['720','hindi'], 'Movies', 20);
    res.send(torrents)
});

app.listen(process.env.PORT ||  port, () => {
    console.log(`Example app listening on port ${port}!`)
});