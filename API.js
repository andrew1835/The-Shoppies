// "http://www.omdbapi.com/?s=" + search + "&apikey=11c4191b"

var searchButton = document.getElementById("searchButton")


searchButton.onclick = function (event) {


    // Here we grab the text from the input box
    event.preventDefault()
    // document.getElementById("results").style.display = "block"

    var searchTerm = document.getElementById("userSearch").value
    console.log("you searched " + '"' + searchTerm + '"')

    var URL = "http://www.omdbapi.com/?s=" + searchTerm + "&apikey=11c4191b&type=movie"

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
    // var movieData = document.querySelector("#resultsContainer")
    // movieData.innerHTML = responseArray.Search.map(function (response) {
    //     return " <div class='results2'> <img src=" + response.Poster + " alt='No Poster Found'>" + "<h2>" + response.Title + "</h2>" + "<p>" + response.Year + "</p> </div>"
    // }).join("")




    for (let i = 0; i < 10; i++) {
        console.log("Title: " + responseArray.Search[i].Title + ". Year: " + responseArray.Search[i].Year)
        var image = '<img'
        // console.log(responseArray.Search[i].Type)
        if (responseArray.Search[i].Type === "movie") {
            console.log("123MOvie")
        }
        else if (responseArray.Search[i].Type === "series") {
            console.log("123Series")
        }
        // Have to create an if statement where if there if poster === N/A, hide the element


    }
    var movieData = document.querySelector("#resultsContainer")
    movieData.innerHTML = responseArray.Search.map(function (response) {
        return " <div class='results2'> <img src=" + response.Poster + " alt='No Poster Found'>" + "<h2>" + response.Title + "</h2>" + "<p class='yearReleased'>" + response.Year + "</p> <button class='button' onclick='trial(event)'>Nominate</button> </div>"
    }).join("")





    // try{throw i}
    //     catch(ii){
    //     var movieData = document.querySelector("#resultsContainer")
    //     movieData.innerHTML = responseArray.Search.map(function (response) {
    //         return " <div class='results2'> <img src=" + response.Poster + " alt='No Poster Found'>" + "<h2>" + response.Title + "</h2>" + "<p>" + response.Year + "</p> <button class='button' id='button" + ii + "'>Nominate</button> </div>"
    //     }).join("")}

}

for (let j = 0; j < 10; j++) {
    trail(j);
}

function trail(j) {
    console.log(j)
}

function trial(event) {
    alert("You nominated me!")
    console.log(event)
    console.log(document.getElementsByClassName("yearReleased")[0])
    $("div:last").after("<div class=item><p>" + "</p></div>")
}

