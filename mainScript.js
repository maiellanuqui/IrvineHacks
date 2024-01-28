const options = {
method: 'GET',
headers: {
    cookie: 'flash=%257B%257D; _genius_ab_test_cohort=87',
    'User-Agent': 'insomnia/8.6.0'
}
};


var keyword = ""
let regex = /^[a-zA-Z]+$/;

function input_submit() {
    var keyword = document.getElementById('input-box').value
    if (keyword.includes(" ")){ //raises error if containing more than 1 word (i.e. a space)
        document.getElementById("error-prompt").innerHTML = "error: enter only one word"
    }

    else if (regex.test(keyword) == false){ //raises error if containing non-alphabetic values
        document.getElementById("error-prompt").innerHTML = "error: enter only letters"
    }

    else {
        var randSongIndex = Math.floor(Math.random() * 21);


        fetch('https://api.genius.com/search?per_page=20&q='+keyword+'&access_token=v-zgWSwP_fwIdZ9W29y6z30KvIbDSRK0m5ie76TD-qKtOSgbHudlAcDFEwkqgeuF', options)
            .then(response => response.json())
            .then(response => {
                var song_title = response['response']['hits'][randSongIndex]['result']['title']
                var song_artists = response['response']['hits'][randSongIndex]['result']['artist_names']
                var song_album_img = response['response']['hits'][randSongIndex]['result']['song_art_image_url']

                // console.log(song_title)
                // console.log(song_artists)
                // console.log(song_album_img)

                localStorage.setItem('userWord', keyword)
                localStorage.setItem('songTitle', song_title)
                localStorage.setItem('songArtist', song_artists)
                localStorage.setItem('songAlbum', song_album_img)
                
                window.location.href = "result-page.html"
                
            })
            .catch(err => {
                console.error("err")
                document.getElementById("error-prompt").innerHTML = "error: something went wrong"
            });
        }
}  