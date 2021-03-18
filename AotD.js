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
query ($id: Int) { # Define which variables will be used in the query (id)
  Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
    id
    title {
      romaji
      english
      native
    }
  }
}
`;

// Define our query variables and values that will be used in the query request
var variables = {

    title: searchApiOne,
};

// Define the config we'll need for our Api request
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


//giphy API
// let APIKEY = "pLZXpTS7zJy2ae85ESFOpQngKA0nQExc";

// function getGiphy() {

// fetch('https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}')

//     .then(function (response) {
//         return response.json();
//       })      
//     .then(function (data) {
//         console.log(data)
//         //Loop over the data to generate a table, each table row will have a link to the repo url
//         for (var i = 0; i < data.length; i++) {
//           // Creating elements, tablerow, tabledata, and anchor

//           // Setting the text of link and the href of the link

//           // Appending the link to the tabledata and then appending the tabledata to the tablerow
//           // The tablerow then gets appended to the tablebody

//         }
//       });
//   }
//   getGiphy();

// B API KEY: LZXpTS7zJy2ae85ESFOpQngKA0nQExc
let APIKEY = "pLZXpTS7zJy2ae85ESFOpQngKA0nQExc";
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
                
                // let fig = document.createElement("figure");
                // let img = document.createElement("img");
                // let fc = document.createElement("figcaption");
                // img.src = content.data[4].images.downsized.url;
                // img.alt = content.data[4].title;
                // fc.textContent = content.data[4].title;
                // fig.appendChild(img);
                // let out = document.querySelector(".carousel-item");
                // out.append(fig);
                // document.querySelector("#search-input").value = "";
            })
            .catch(err => {
                console.error(err);
            });
    });
}
console.log(document.querySelector(".carousel"));