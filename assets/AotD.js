//carousel js
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
});
// user input variables
var searchApiOne = document.querySelector('#search-input');
var searchBtn = document.getElementById('#search-btn');

// Here we define our query as a multi-line string
// Storing it in a separate .graphql/.gql file is also possible
//directly pulled from example provided from anilist.co
var query = `
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (id: $id, search: $search) {
      id
      title {
        romaji
      }
    }
  }
}
`;

//var search = document.querySelector('search-input');

// Define our query variables and values that will be used in the query request
var variables = {

    title: searchApiOne,
};

// Define the config we'll need for our third-party Api request
var url = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    };

// Make the HTTP Api request
fetch(url, options).then(handleResponse)
    .then(handleData)
    .catch(handleError);

function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data) {
    console.log(data);
    console.log(url);
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}


//SAW API KEY: CRwhIZ7SiNJbG4bYCS7ilbOcXC3WF9Tv
// B API KEY: LZXpTS7zJy2ae85ESFOpQngKA0nQExc
let APIKEY = "CRwhIZ7SiNJbG4bYCS7ilbOcXC3WF9Tv";
// you will need to get your own API KEY
// https://developers.giphy.com/dashboard/
document.addEventListener("DOMContentLoaded", init);
function init() {
    document.getElementById("search-btn").addEventListener("click", ev => {
        ev.preventDefault(); //to stop the page reload
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
                    let img= document.querySelector("#num" + i);
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
