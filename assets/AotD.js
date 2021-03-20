document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
});

var searchApiOne = document.querySelector('#search-input');
var searchBtn = document.getElementById('#search-btn');

function wikiSearch () {
    wikiAPI = "https://en.wikipedia.org/w/api.php"; 
var params = {
    action: "query",
    list:  "search",
    srsearch: document.querySelector('#search-input').value,
    format: "json"
};
wikiURL = wikiAPI + "?origin=*";
Object.keys(params).forEach(function(key){wikiURL += "&" + key + "=" + params[key];});
fetch(wikiURL)
    .then(function(response){
        return response.json()
    })
    .then(function(response) {
        document.querySelector('#para').innerHTML = ''
        var wikiEntry = document.createElement('p')
        wikiEntry.innerHTML = response.query.search[0].snippet
        document.querySelector('#para').appendChild(wikiEntry)
        console.log(response.query.search[0]);    
        })
console.log(wikiURL);
}

let APIKEY = "CRwhIZ7SiNJbG4bYCS7ilbOcXC3WF9Tv";

document.addEventListener("DOMContentLoaded", init);
function init() {
    document.getElementById("search-btn").addEventListener("click", ev => {
        ev.preventDefault(); 

        wikiSearch()

        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=5&q=`;
        let str = document.getElementById("search-input").value.trim();
        url = url.concat(str);
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(content => {
                console.log(content);

                let carousel = document.querySelector(".carousel");

                for (var i = 0; i < content.data.length; i++) {
                    let img = document.querySelector("#num" + i);
                    img.setAttribute("src", content.data[i].images.downsized.url)

                }

            })
            .catch(err => {
                console.error(err);
            });
    });
}
console.log(document.querySelector(".carousel"));

