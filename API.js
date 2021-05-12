var searchButton = document.getElementById("searchButton")
var nominatedItemArray = new Array()
var idArray = new Array()
var posterArray = new Array()
var list = document.querySelector("#nominationsList")
let keyID = 0
let y = 0


searchButton.onclick = function (event) {



    event.preventDefault()


    var searchTerm = document.getElementById("userSearch").value
    console.log("you searched " + '"' + searchTerm + '"')

    var URL = "https://www.omdbapi.com/?s=" + searchTerm + "&apikey=11c4191b&type=movie"

    $.ajax({
        url: URL,
        method: "GET"
    }).then(function (response) {
        populateSearchPage(response)
    });


}

function populateSearchPage(response) {
    responseArray = response
    var movieData = document.querySelector("#resultsDiv")
    var searchedHeading = document.getElementById("youSearchedThis")
    var searchTerm3 = document.getElementById("userSearch").value
    if (response.Error !== "Movie not found!") {
        searchedHeading.style.display = "block"
        searchedHeading.innerHTML = 'Results for "' + searchTerm3 + '"'
        movieData.innerHTML = responseArray.Search.map(function (event) {
            return " <div class='results'> <img src=" + event.Poster + " class ='moviePoster' alt='No Poster Found'>" + "<h2 class='movieTitle'>" + event.Title + "</h2>" + "<p class='yearReleased'>" + event.Year + "</p> <button class='nominateButton' onclick='nominateMovie(event)'>Nominate</button> <p class='nominated'>Nominated!</p> </div>"
        }).join("")
        addIDs(response)
        checkButtons(response)
    }
    else {
        increaseOpacityResultsBanner()

    }


}

function increaseOpacityResultsBanner() {
    var searchTerm2 = document.getElementById("userSearch").value
    var noResultsBanner = document.getElementById("noResultsBanner")
    noResultsBanner.innerHTML = 'No search results found for "' + searchTerm2 + '"'
    noResultsBanner.style.opacity = "1"
    noResultsBanner.style.zIndex = "1000"
    setTimeout(function reduceOpacityResultsBanner() {
        noResultsBanner.style.opacity = "0"
        noResultsBanner.style.zIndex = "-1"
    }, 3000)
}


function checkButtons(response) {
    var nominatedItem2 = document.getElementsByClassName("nominatedItem")
    for (let u = 0; u < 5; u++) {
        if (nominatedItem2[u] !== undefined && nominatedItemArray.indexOf(nominatedItem2[u].id.substring(2)) === -1) {
            var nominatedItem2ID = nominatedItem2[u].id.substring(2)
            nominatedItemArray.push(nominatedItem2ID)
            console.log(nominatedItemArray)
        }
    }

    console.log(nominatedItemArray)

    for (let v = 0; v < 10; v++) {
        console.log(response.Search[v].Poster)

        if (nominatedItemArray.indexOf(response.Search[v].Poster) !== -1) {
            var disabledButton = document.getElementById("btn" + v)
            var enabledText = document.getElementById("nom" + v)
            disabledButton.style.opacity = '0'
            disabledButton.style.cursor = 'text'
            enabledText.style.display = "block"
        }

    }
}

function addIDs(response) {
    var yearReleased = document.getElementsByClassName("yearReleased")
    var moviePoster = document.getElementsByClassName("moviePoster")
    var nominateButton = document.getElementsByClassName("nominateButton")
    var movieTitle = document.getElementsByClassName("movieTitle")
    var nominated = document.getElementsByClassName("nominated")
    console.log(response)

    for (let p = 0; p < 10; p++) {

        yearReleased[p].setAttribute("id", "p" + p);
        moviePoster[p].setAttribute("id", "img" + p);
        nominateButton[p].setAttribute("id", "btn" + p);

        movieTitle[p].setAttribute("id", "title" + p)
        nominated[p].setAttribute("id", "nom" + p)

    }
}



function nominateMovie(event) {
    console.log(event)
    console.log(event.target.id)
    var buttonID = event.target.id
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
    var listLength = document.querySelector("#nominationsList").getElementsByTagName("li").length


    console.log(listLength)
    console.log(nominatedItemArray[0])


    if (listLength < 5 && nominatedItemArray.indexOf(posterSource) === -1) {
        list.innerHTML += "<li class='nominatedItem'>" + titleText + " (" + yearText + ")" + "</li> <button class='removeButton' onclick='removeMovie(event)'>Remove</button>"
        nominatedItemArray.push(posterSource)
        idArray.push(buttonIDNumber)
        console.log(idArray)
        console.log(nominatedItemArray)
        buttonChange.style.opacity = '0'
        buttonChange.style.cursor = 'text'
        nominatedID.style.display = "block"
        addRemoveID()
        increaseOpacityFourBanner()
        localStorage.setItem("list", list.innerHTML)


    }
    else if (nominatedItemArray.indexOf(posterSource) !== -1) {
        document.getElementById("doubleBanner").style.opacity = "1"
        document.getElementById("doubleBanner").style.zIndex = "1000"
        setTimeout(function reduceOpacityDoubleBanner() {
            document.getElementById("doubleBanner").style.opacity = "0"
            document.getElementById("doubleBanner").style.zIndex = "-1"
        }, 3000)
    }
    else {
        document.getElementById("fiveBanner").style.opacity = "1"
        document.getElementById("fiveBanner").style.zIndex = "1000"
        setTimeout(function reduceOpacityFiveBanner() {
            document.getElementById("fiveBanner").style.opacity = "0"
            document.getElementById("fiveBanner").style.zIndex = "-1"
        }, 3000)
    }




}

function increaseOpacityFourBanner() {
    var listLength2 = document.querySelector("#nominationsList").getElementsByTagName("li").length
    if (listLength2 === 5) {
        document.getElementById("fourBanner").style.opacity = "1"
        document.getElementById("fourBanner").style.zIndex = "1000"
        setTimeout(function reduceOpacityFourBanner() {
            document.getElementById("fourBanner").style.opacity = "0"
            document.getElementById("fourBanner").style.zIndex = "-1"
        }, 5000)
    }

}


function addRemoveID() {
    var removeButton = document.getElementsByClassName("removeButton")
    var nominatedItem = document.getElementsByClassName('nominatedItem')
    removeButton[removeButton.length - 1].setAttribute("id", "removeBtn" + nominatedItemArray[nominatedItemArray.length - 1]);
    removeButton[removeButton.length - 1].classList.add("removeBtn" + idArray[idArray.length - 1]);
    nominatedItem[nominatedItem.length - 1].setAttribute("id", "li" + nominatedItemArray[nominatedItemArray.length - 1])

    console.log(nominatedItem[0].innerHTML.substring(0, nominatedItem[0].innerHTML.length - 7))
    console.log(localStorage.getItem("title" + 0))
}

function removeMovie(event) {

    console.log(event.target.className)
    var removeBtnClass = event.target.className
    var removeClassChange = document.getElementsByClassName(removeBtnClass)
    removeButtonClassNumber = removeBtnClass.substring(22)

    var removeBtnID = event.target.id
    console.log(event.target.id)
    var removeChange = document.getElementById(removeBtnID)
    console.log(removeChange)
    removeButtonIDNumber = removeBtnID.substring(9)
    console.log(removeButtonIDNumber)
    var removeLi = document.getElementById("li" + removeButtonIDNumber)
    console.log(removeLi)
    var ol = document.getElementById("nominationsList")
    console.log(ol)
    ol.removeChild(removeLi)
    removeChange.parentNode.removeChild(removeChange)
    localStorage.setItem("list", list.innerHTML)




    const listSplice = nominatedItemArray.indexOf(removeButtonIDNumber);
    if (listSplice > -1) {
        nominatedItemArray.splice(listSplice, 1);
    }
    const idSplice = idArray.indexOf(removeButtonClassNumber);
    if (idSplice > -1) {
        idArray.splice(idSplice, 1);
    }



    var buttonID2 = document.getElementById("btn" + removeButtonClassNumber)
    console.log(buttonID2)






    var nominatedText = document.getElementById("nom" + removeButtonClassNumber)
    buttonID2.style.opacity = '1'
    buttonID2.style.cursor = 'pointer'
    buttonID2.style.zIndex = '5'
    nominatedText.style.display = 'none'



}


window.onload = function showLocalStorage() {


    list.innerHTML = localStorage.getItem("list")

    var nominatedItem = document.getElementsByClassName("nominatedItem")

    for (let x = 0; x < 5; x++) {
        if (nominatedItem[x] !== undefined) {
            var nominatedItemID = nominatedItem[x].id.substring(2)
            nominatedItemArray.push(nominatedItemID)
        }

    }
}
