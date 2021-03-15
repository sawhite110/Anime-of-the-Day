  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

// Here we define our query as a multi-line string
// Storing it in a separate .graphql/.gql file is also possible
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
    id: 15125
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
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}
  function getApi() {
    
    let apiKey = something;
    fetch(api.giphy.com/v1/gifs/random/ + apiKey)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        //Loop over the data to generate a table, each table row will have a link to the repo url
        for (var i = 0; i < data.length; i++) {
          // Creating elements, tablerow, tabledata, and anchor
          
          // Setting the text of link and the href of the link
            
          // Appending the link to the tabledata and then appending the tabledata to the tablerow
          // The tablerow then gets appended to the tablebody
          
        }
      });
  }

  //apiKey = CRwhIZ7SiNJbG4bYCS7ilbOcXC3WF9Tv;