document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
});

// Here we define our query as a multi-line string
// Storing it in a separate .graphql/.gql file is also possible
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
  search: "Fate/Zero",
  page: 1,
  perPage: 5
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
    console.log(data.data);
    //console.log(media);

}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}

function getApi() {
  
fetch(api.giphy.com/v1/gifs/random/tSu9g6DGA4MVf62qKs70CjhPW86LQ7QT)

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