// "http://www.omdbapi.com/?s=" + search + "&apikey=11c4191b"

var searchButton = document.getElementById("searchButton")

searchButton.onclick = function (event) {


    // Here we grab the text from the input box
    event.preventDefault()
    document.getElementById("results").style.display = "block"

    var searchTerm = document.getElementById("userSearch").value
    console.log("you searched " + '"' + searchTerm + '"')

    var URL = "http://www.omdbapi.com/?s=" + searchTerm + "&apikey=11c4191b"

    $.ajax({
        url: URL,
        method: "GET"
    }).then(function (response) {
        populateSearchPage(response)

        // for (let i = 0; i < responseData.length; i++) {
        //     console.log(responseData.Search[i].Title)
        // }
        // console.log(responseData.Search[i].Title)
        // var image = response.Poster
        // var title = response.Title
        // var year = response.Year
        // $(".imageResult").attr("src", image);
        // $(".titleResult").html('Title: "' + title + '"');
        // $(".yearResult").html("Year released: " + year);
    });
}

function populateSearchPage(response) {
    responseArray = response
    for (let i = 0; i < 10; i++) {
        console.log("Movie Title: " + responseArray.Search[i].Title + " Movie Year: " + responseArray.Search[i].Year)
        var movieData = document.querySelector("#results2")
        var image = '<img'
        movieData.innerHTML = responseArray.Search.map(function (response) {
            return "<img src=" + response.Poster + ">"
        }).join("")
        // Have to create an if statement where if there is no poster, hide the element
    }
}