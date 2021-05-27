# The-Shoppies
## What, Why, and HOW
This web application utilizes the OMDB API to search for movies based off a user search. It then returns 10 cards that have a movie's poster, title, and release year, as well as a golden "Nominate" button. A user can nominate up to five movies, at which point the user has reached their limit and must delete movies to add any more. The nominations are saved in local storage and will still be there whenever a user navigates back to the page. I built this project to dust off my local storage and API skills, as well as to have some fun experimenting with dynamic design. About 90% of the time I spent on this project was spent working on JavaScript. Through JavaScript, I did a lot of dynamic styling and HTML creation. It was a really fun project to work on, and not only did it strengthen my existing skills, but it also gave me some more tools that I know will be useful going forward.
To achieve the end result, I:
1. First connected my application to the OMDB API and made sure I was retrieving the correct information
2. Displayed the search results on the page
3. Added a "Nominate" button and made sure that the button saved and dispalayed movies to a user's list. Also made sure to disable the button once clicked
4. Utilized local storage to ensure that, even if a user navigates away from the page, the Nominations list would remain intact, and buttons of movies that have already been nominated would remain disabled
5. Added a "Remove" button, which removed movies from a user's list and made the "Nominate" buttons for those movies clickable 

The project wasn't conceptually hard, but did involve a lot of effort, edge cases, and bug fixes. I'm really happy with how it developed my JS, HTML, and CSS skills, and I'm excited to to continue to grow those skills in future projects. 

# Links
Link to GitHub repo: https://github.com/andrew1835/Online-Offline-Budget
<br>
Link to deployed application: https://github.com/andrew1835/The-Shoppies

# Screenshot
This screenshot shows what the application looks like when you search for "Avengers"

<img src = "./images/shoppies.jpg" alt = "Search results for 'Avengers'">
