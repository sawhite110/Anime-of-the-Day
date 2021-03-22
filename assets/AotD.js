var searchApiOne = document.querySelector("#search-input");
var searchBtn = document.getElementById("#search-btn");

//This uses moment() to setup the current month, day, and year.
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//Function for the carousel
document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems);
});



//Wiki api
function wikiSearch () {
    wikiAPI = "https://en.wikipedia.org/w/api.php"; 
var params = {
    action: "query",
    list:  "search",
    srsearch: document.querySelector("#search-input").value,
    format: "json"
};
wikiURL = wikiAPI + "?origin=*";
Object.keys(params).forEach(function(key){wikiURL += "&" + key + "=" + params[key];});
fetch(wikiURL)
    .then(function(response){
        return response.json()
    })
    .then(function(response) {
        document.querySelector("#para").innerHTML = ""
        var wikiEntry = document.createElement("p")
        wikiEntry.innerHTML = response.query.search[0].snippet
        document.querySelector("#para").appendChild(wikiEntry)
        console.log(response.query.search[0]);    

        document.querySelector("#anime-title").innerHTML = ""
        var wikiEntry = document.createElement("div")
        wikiEntry.innerHTML = response.query.search[0].title
        document.querySelector("#anime-title").appendChild(wikiEntry)
        console.log(response.query.search[0]);    
        })

console.log(wikiURL);
}

//SAW API KEY: CRwhIZ7SiNJbG4bYCS7ilbOcXC3WF9Tv
// B API KEY: LZXpTS7zJy2ae85ESFOpQngKA0nQExc
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

                // let carousel = document.querySelector(".carousel");

                for (var i = 0; i < content.data.length; i++) {
                    let img = document.querySelector("#num" + i);
                    img.setAttribute("src", content.data[i].images.downsized.url)
                }

                document.querySelector(".giphy-image").innerHTML = ""
                var giphyEntry = document.createElement("img")
                giphyEntry.innerHTML = response.query.search[0].title
                document.querySelector(".giphy-image").appendChild(giphyEntry)
                console.log(response.query.search[0]);
            })
            .catch(err => {
                console.error(err);
            });
    });
}
// console.log(document.querySelector(".carousel"));

