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
        return " <div class='results'> <img src=" + response.Poster + " class ='moviePoster' alt='No Poster Found'>" + "<h2 class='movieTitle'>" + response.Title + "</h2>" + "<p class='yearReleased'>" + response.Year + "</p> <button class='nominateButton' onclick='trial(event)'>Nominate</button> </div>"
    }).join("")
    addIDs()





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


// z = 0
function trial(event) {
    alert("You nominated me!")
    // event.target.setAttribute("id", z)
    // console.log(event.target)
    // TODO: The below line of code shows you how you target the specific element in the array. z could be any number 0-9, and it would give you the corresponding item from the array. It's also what you're doing in the addIDs() function
    // console.log(document.getElementsByClassName("yearReleased")[z])
    // z++
    // console.log(z)
    // var yearReleased = document.getElementsByClassName("yearReleased")

    // $("div:last").after("<div class=item><p>" + "</p></div>")

    // for (let p = 0; p < 10; p++) {
    //     yearReleased[p].setAttribute("id", "p" + p)
    // }
}

function addIDs() {
    var yearReleased = document.getElementsByClassName("yearReleased")
    var moviePoster = document.getElementsByClassName("moviePoster")
    var nominateButton = document.getElementsByClassName("nominateButton")
    var movieTitle = document.getElementsByClassName("movieTitle")
    for (let p = 0; p < 10; p++) {
        yearReleased[p].setAttribute("id", "p" + p);
        moviePoster[p].setAttribute("id", "img" + p);
        nominateButton[p].setAttribute("id", "btn" + p);
        movieTitle[p].setAttribute("id", "title" + p)
    }
}
// With the above function you've shown that you can create a unique id for each element that you create when you map. You would just have to set the id for each class name of each element. See if you can do this when you click the search button, instead of when you click the nominate button. You would have to call this function after you run the map function though, since if you called it before there wouldn't be any elements to add IDs to