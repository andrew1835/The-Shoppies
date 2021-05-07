// "http://www.omdbapi.com/?s=" + search + "&apikey=11c4191b"

var searchButton = document.getElementById("searchButton")
var listArray = new Array()


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
    });
}

function populateSearchPage(response) {

    responseArray = response
    // console.log(responseArray.Search)

    var movieData = document.querySelector("#resultsContainer")
    movieData.innerHTML = responseArray.Search.map(function (event) {
        return " <div class='results'> <img src=" + event.Poster + " class ='moviePoster' alt='No Poster Found'>" + "<h2 class='movieTitle'>" + event.Title + "</h2>" + "<p class='yearReleased'>" + event.Year + "</p> <button class='nominateButton' onclick='nominateMovie(event)'>Nominate</button> <p class='nominated'>Nominated!</p> </div>"
    }).join("")
    addIDs()

}




function addIDs() {
    var yearReleased = document.getElementsByClassName("yearReleased")
    // console.log(yearReleased)
    var moviePoster = document.getElementsByClassName("moviePoster")
    var nominateButton = document.getElementsByClassName("nominateButton")
    var movieTitle = document.getElementsByClassName("movieTitle")
    var nominated = document.getElementsByClassName("nominated")

    for (let p = 0; p < 10; p++) {

        yearReleased[p].setAttribute("id", "p" + p);
        moviePoster[p].setAttribute("id", "img" + p);
        nominateButton[p].setAttribute("id", "btn" + p);
        movieTitle[p].setAttribute("id", "title" + p)
        nominated[p].setAttribute("id", "nom" + p)

    }
}



function nominateMovie(event) {

    console.log(event.path[0].id)
    var buttonID = event.path[0].id
    var buttonChange = document.getElementById(buttonID)
    buttonIDNumber = buttonID.substring(3)
    console.log(buttonIDNumber)

    var posterSource = document.getElementById("img" + buttonIDNumber).src
    console.log(posterSource)
    var titleText = document.getElementById("title" + buttonIDNumber).innerHTML
    console.log(titleText)
    var yearText = document.getElementById("p" + buttonIDNumber).innerHTML
    console.log(yearText)
    var nominatedID = document.getElementById("nom" + buttonIDNumber)
    var list = document.querySelector("#nominationsList")
    var listLength = document.querySelector("#nominationsList").getElementsByTagName("li").length


    console.log(listLength)
    console.log(listArray[0])


    if (listLength < 5 && listArray.indexOf(posterSource) === -1) {
        list.innerHTML += "<li>" + titleText + " (" + yearText + ")" + "</li> <button class='removeButton' onclick='removeMovie(event)'>Remove</button>"
        listArray.push(posterSource)
        console.log(listArray)
        buttonChange.style.opacity = '0'
        buttonChange.style.cursor = 'text'
        nominatedID.style.display = "block"
    }
    else if (listArray.indexOf(posterSource) !== -1) {
        document.getElementById("doubleBanner").style.opacity = "1"
        document.getElementById("doubleBanner").style.zIndex = "1000"
        reduceOpacityDoubleBanner()
        // setInterval(function reduceOpacityDoubleBanner() {
        //     document.getElementById("doubleBanner").style.opacity = "0"
        //     document.getElementById("doubleBanner").style.zIndex = "-1"
        // }, 2500)
    }
    else {
        document.getElementById("fiveBanner").style.opacity = "1"
        document.getElementById("fiveBanner").style.zIndex = "1000"
        reduceOpacityFiveBanner()
        // setInterval(function reduceOpacityFiveBanner() {
        //     document.getElementById("fiveBanner").style.opacity = "0"
        //     document.getElementById("fiveBanner").style.zIndex = "-1"
        // }, 2500)
    }




}


setInterval(function reduceOpacityDoubleBanner() {
    document.getElementById("doubleBanner").style.opacity = "0"
    document.getElementById("doubleBanner").style.zIndex = "-1"
}, 2500)

setInterval(function reduceOpacityFiveBanner() {
    document.getElementById("fiveBanner").style.opacity = "0"
    document.getElementById("fiveBanner").style.zIndex = "-1"
}, 2500)



function removeMovie(event) {

}


