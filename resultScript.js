var user_keyword = localStorage.getItem('userWord');
var song_title = localStorage.getItem('songTitle');
var song_artists = localStorage.getItem('songArtist');
var song_album_img = localStorage.getItem('songAlbum')

function run() {
    document.getElementById("in-bubble-output").innerHTML = user_keyword;
    document.getElementById("song-title").innerHTML = song_title;
    document.getElementById("artist-name").innerHTML = song_artists;
    document.getElementById("album-cover-pic").src = song_album_img;
}

function home() {
    window.location.href = "index.html"
}