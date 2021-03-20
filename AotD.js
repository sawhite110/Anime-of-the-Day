//carousel js
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
});
// user input variables
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
        console.log(response.query.search)
        document.querySelector('#para').innerHTML = ''
        response.query.search.forEach( e => {
            var wikiEntry = document.createElement('p')
            wikiEntry.innerHTML = e.title
            document.querySelector('#para').appendChild(wikiEntry)

        })
        if (response.query.search[0].title === "search-input"){
            console.log("found" );
        
            for (var i = 0; i < content.query.searchinfo;) {
                let paragraph = document.querySelector(".para" + i);
                paragraph.setAttribute("p", content.query.searchinfo.url);    

            }

        };
 
console.log(wikiURL);

})
}

// B API KEY: LZXpTS7zJy2ae85ESFOpQngKA0nQExc
let APIKEY = "CRwhIZ7SiNJbG4bYCS7ilbOcXC3WF9Tv";
// you will need to get your own API KEY
// https://developers.giphy.com/dashboard/
document.addEventListener("DOMContentLoaded", init);
function init() {
    document.getElementById("search-btn").addEventListener("click", ev => {
        ev.preventDefault(); //to stop the page reload
        
        // call wiki function
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
                    img.setAttribute("src", content.data[i].images.downsized.url);
                    // carousel.append(anchor);
                    // anchor.append(img);

                }

            })
            .catch(err => {
                console.error(err);
            });
    });
}
console.log(document.querySelector(".carousel"));

