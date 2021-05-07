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
        return " <div class='results'> <img src=" + response.Poster + " class ='moviePoster' alt='No Poster Found'>" + "<h2 class='movieTitle'>" + response.Title + "</h2>" + "<p class='yearReleased'>" + response.Year + "</p> <button class='nominateButton' onclick='nominateMovie(event)'>Nominate</button> </div>"
    }).join("")
    addIDs()





    // try{throw i}
    //     catch(ii){
    //     var movieData = document.querySelector("#resultsContainer")
    //     movieData.innerHTML = responseArray.Search.map(function (response) {
    //         return " <div class='results2'> <img src=" + response.Poster + " alt='No Poster Found'>" + "<h2>" + response.Title + "</h2>" + "<p>" + response.Year + "</p> <button class='button' id='button" + ii + "'>Nominate</button> </div>"
    //     }).join("")}

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


// z = 0

function nominateMovie(event) {
    // alert("You nominated me!")
    console.log(event.path[0].id)
    var just = event.path[0].id
    just = just.substring(3)
    console.log(just)


    var posterID = document.getElementById("img" + just).src
    console.log(posterID)
    var titleID = document.getElementById("title" + just).innerHTML
    console.log(titleID)
    var yearID = document.getElementById("p" + just).innerHTML
    console.log(yearID)
    var list = document.querySelector("#nominationsList")
    var listLength = document.querySelector("#nominationsList").getElementsByTagName("li").length


    console.log(listLength)
    console.log(listArray[0])


    if (listLength < 5 && listArray.indexOf(posterID) === -1) {
        list.innerHTML += "<li>" + titleID + " (" + yearID + ")" + "</li>"
        listArray.push(posterID)
        console.log(listArray)
    }
    else if (listArray.indexOf(posterID) !== -1) {
        alert("already added")
    }
    else {
        document.getElementById("fiveBanner").style.opacity = "1"
        document.getElementById("fiveBanner").style.zIndex = "1000"
        setInterval(function reduceOpacity() {
            document.getElementById("fiveBanner").style.opacity = "0"
            document.getElementById("fiveBanner").style.zIndex = "-1"
        }, 2500)
    }

    // At the bottom of this you also want to call another function, which will check to see if the button has been pressed (you can traverse the event to check this, like you did above). Likely the value will be "true". If it's true, then you add styling to the button that makes it unclickable. This is the easy solution, but I don't think it will work on page reload, or if you search something else and then search the original name again. Will think later on if it's possible to make it so that the button is always unclickable, even if you reload the page. You might have to change the code to make the IDs more unique so that instead of an id of "button1" it would be "button" + the URL address. That way, each and every button would have a completely unique ID, and you could make it so that if you click on a button, it adds that unique ID to local storage. A function (which will have to fire after the buttons are created on search) will then check the IDs in local storage, and if there's an ID that matches the IDs of one of the buttons created, that button will not be clickable and will have certain styling applied to it. 


}


// With the above function you've shown that you can create a unique id for each element that you create when you map. You would just have to set the id for each class name of each element. See if you can do this when you click the search button, instead of when you click the nominate button. You would have to call this function after you run the map function though, since if you called it before there wouldn't be any elements to add IDs to
