// "http://www.omdbapi.com/?s=" + search + "&apikey=11c4191b"

var searchButton = document.getElementById("searchButton")
var listArray = new Array()
var idArray = new Array()


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
    var list = document.querySelector("#nominationsList")
    var posterSource = document.getElementById("img" + buttonIDNumber).src
    console.log(posterSource)
    var titleText = document.getElementById("title" + buttonIDNumber).innerHTML
    console.log(titleText)
    var yearText = document.getElementById("p" + buttonIDNumber).innerHTML
    console.log(yearText)
    var nominatedID = document.getElementById("nom" + buttonIDNumber)
    var listLength = document.querySelector("#nominationsList").getElementsByTagName("li").length


    // local storage
    if (localStorage.length < 5) {
        localStorage.setItem("title" + buttonIDNumber, titleText)
        localStorage.setItem("year" + buttonIDNumber, yearText)
        localStorage.setItem("id" + buttonIDNumber, buttonIDNumber)
        console.log(localStorage.getItem("title" + buttonIDNumber))
    }


    console.log(listLength)
    console.log(listArray[0])


    if (listLength < 5 && listArray.indexOf(posterSource) === -1) {
        list.innerHTML += "<li class='nominatedItem'>" + titleText + " (" + yearText + ")" + "</li> <button class='removeButton' onclick='removeMovie(event)'>Remove</button>"
        // list.innerHTML += "<li class='nominatedItem'>" + localStorage.getItem("title" + buttonIDNumber) + " (" + yearText + ")" + "</li> <button class='removeButton' onclick='removeMovie(event)'>Remove</button>"
        listArray.push(posterSource)
        idArray.push(buttonIDNumber)
        console.log(idArray[idArray.length - 1])
        console.log(listArray)
        buttonChange.style.opacity = '0'
        buttonChange.style.cursor = 'text'
        nominatedID.style.display = "block"
        addRemoveID()

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
}, 3000)



function addRemoveID() {
    var removeButton = document.getElementsByClassName("removeButton")
    var nominatedItem = document.getElementsByClassName('nominatedItem')
    removeButton[removeButton.length - 1].setAttribute("id", "removeBtn" + listArray[listArray.length - 1]);
    removeButton[removeButton.length - 1].classList.add("removeBtn" + idArray[idArray.length - 1]);
    nominatedItem[nominatedItem.length - 1].setAttribute("id", "li" + idArray[idArray.length - 1])
    // for (let p = 0; p < 5; p++) {
    //     // getting a console error with this, but that doesn't affect the functionality. The console error occurs because, unless your nomations list is full, there are not 5 items in the array, so when it loops over and tries to find an item that isn't there, it gives an error. Again, that doesn't affect the functionality.
    //     // The problem right now is that each time you set an ID, it's re writing the ID for every button, so every button has the same ID. Could use an if statement before the for loop, so that if the ID is blank, run the for loop. I'm sure there's other solutions too that circumvent the need for a for loop
    //     removeButton[p].setAttribute("id", "removeBtn" + idArray[idArray.length - 1]);
    //     nominatedItem[p].setAttribute("id", "li" + idArray[idArray.length - 1])

    // }
}

function removeMovie(event) {


    // You will have to make it so that it's going off the li id, not the button id anymore since the li id is the image src
    // The below code is functioning properly to delete the correct title and remove button. Nothing to fix here
    console.log(event.path[0].className)
    var removeBtnClass = event.path[0].className
    var removeClassChange = document.getElementsByClassName(removeBtnClass)
    removeButtonClassNumber = removeBtnClass.substring(22)

    var removeBtnID = event.path[0].id
    var removeChange = document.getElementById(removeBtnID)
    console.log(removeChange)
    removeButtonIDNumber = removeBtnID.substring(9)
    console.log(removeButtonIDNumber)
    var removeLi = document.getElementById("li" + removeButtonClassNumber)
    console.log(removeLi)
    var ol = document.getElementById("nominationsList")
    console.log(ol)
    ol.removeChild(removeLi)
    removeChange.parentNode.removeChild(removeChange)




    const listSplice = listArray.indexOf(removeButtonIDNumber);
    if (listSplice > -1) {
        listArray.splice(listSplice, 1);
    }
    const idSplice = idArray.indexOf(removeButtonClassNumber);
    if (idSplice > -1) {
        idArray.splice(idSplice, 1);
    }



    // the splice above may not work. You also don't want buttonID2 to just be set to the last item in the array, because even if you splice it out when you remove, it'll only work if you remove in the reverse order of what you added. If you jump around, the IDs won't match up



    var buttonID2 = document.getElementById("btn" + removeButtonClassNumber)
    console.log(buttonID2)

    // var buttonID2 = document.getElementById("btn" + localStorage.getItem("id" + ))





    var nominatedText = document.getElementById("nom" + removeButtonClassNumber)
    // var buttonChange2 = document.getElementById(buttonID2)
    // console.log(buttonChange2)
    buttonID2.style.opacity = '1'
    buttonID2.style.cursor = 'pointer'
    buttonID2.style.zIndex = '5'
    nominatedText.style.display = 'none'


    // local storage
    localStorage.removeItem("title" + removeButtonIDNumber)
    console.log(idArray[idArray.length - 1])
    console.log(listArray)
    console.log(idArray)

}

    // right now it doesn't work because the list ID number is a number 0-4 that goes up in order. The cards on the left, on the other hand, have ID numbers that go from 0-9. They can also be added to the nominations list in any order a person wants, so someone could add id 1, then id 6, then id 3, and the list would come up with ids 0,1, and 2. This means that you can't use the list id number to target the corresponding card id. The change you should make to fix this is to make the list id number the same as the id number of whatever card you clicked on. If you do this, i don't think the local storage above is necessary (at least for right now, when you're just trying to only focus on nominate/remove functionality, as opposed to saving)
    // You don't have to use local storage to populate the list in the moment, only on page reload. It should also push all the photo addresses into the array, so you can't add more than 5 items




// For the below function, you essentially want to create the exact same list stuff that you made above, which means you'll have to 
// window.onload = function showLocalStorage() {
//     list.innerHTML += "<li class='nominatedItem'>" + localStorage.getItem("title" + buttonIDNumber) + " (" + yearText + ")" + "</li> <button class='removeButton' onclick='removeMovie(event)'>Remove</button>"



//     addRemoveID()
// }