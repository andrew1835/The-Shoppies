// PSEUDO CODE:

// 1. You will first make the OMDB API work. To do this, you will properly connect to it. Then, you will create a container where the results will show. Then, you will map over the results from the API to create a card/row for each result (might have to create a max number of cards. Depends on edge cases. For example, if someone searches "a", would thousands of results appear? If so, need a maxium number of cards)

// 2. You will then add a "nominate" button to each card, and you will create another container called the "nominated" container. On the main search page, this will be a small container off to the side that just shows movie titles. There will be two pages on this website, though. The default page (which has the search functionality), and a "Nominated" page (very similar to the Google Library API app you built). If you click on the "nominated" page, you should be able to see a more complete list, which not only has the titles but also has an image (wait on this if not available to your current API key), description, and delete button. 

// 3. You will then write the code that makes it so pressing on the "nominate" button adds that item to an array. The items in that array will be shown in the container. If arrray.length = 5, don't let the user add any more movies and add a banner that shows 5 films have been nominated

// 4. You will then write code that adds a "delete" button to nominated movies, which removes that individual movie from the array and lets the user nominate it again

// 5. Save the array to local storage so that the nominations of each individual user are saved 

// 6. Once all this is working, you style it. At this point, decide if you want to become a patreon to access the poster API from OMDB

// 7. Some cool style touches to add are lazy loading from top to bottom when you search and when you navigate to your "nominated" page. I don't think lazy loading is the right word, but basically you want the items to show one after the other, with the transition in opacity taking about 0.2 seconds per item. You could also do a light/dark mode toggle. Mobile design


// TODO: By the end of the day, you want to be properly connected to the API so that you can search for a movie and get the results



// You want the "nominate" button to save it to an array. You should then call a function where you map over the array and create an li item for each item in the array (just like how that one site you looked at yesterday showed you to do it). This will be for the list on the same page as the home page. For the list on the "Nominated" page, you will create a card for each mapped item. Remember to keep the limit at 5. 

// Have to create an if statement where if there if poster === N/A, hide the element