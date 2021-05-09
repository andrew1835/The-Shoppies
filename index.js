// PSEUDO CODE:

// 1. You will first make the OMDB API work. To do this, you will properly connect to it. Then, you will create a container where the results will show. Then, you will map over the results from the API to create a card/row for each result (might have to create a max number of cards. Depends on edge cases. For example, if someone searches "a", would thousands of results appear? If so, need a maxium number of cards)

// 2. You will then add a "nominate" button to each card, and you will create another container called the "nominated" container. On the main search page, this will be a small container off to the side that just shows movie titles. There will be two pages on this website, though. The default page (which has the search functionality), and a "Nominated" page (very similar to the Google Library API app you built). If you click on the "nominated" page, you should be able to see a more complete list, which not only has the titles but also has an image (wait on this if not available to your current API key), description, and delete button. Make it so that if there's less than 10 movies, the function still works. This means that in your for loop instead of setting it to i<10, you would set it to i < the length of the array

// 3. You will then write the code that makes it so pressing on the "nominate" button adds that item to an array. The items in that array will be shown in the container. If arrray.length = 5, don't let the user add any more movies and add a banner that shows 5 films have been nominated

// 4. You will then write code that adds a "delete" button to nominated movies, which removes that individual movie from the array and lets the user nominate it again

// 5. Save the array to local storage so that the nominations of each individual user are saved

// 6. Once all this is working, you style it. At this point, decide if you want to become a patreon to access the poster API from OMDB

// 7. Some cool style touches to add are lazy loading from top to bottom when you search and when you navigate to your "nominated" page. I don't think lazy loading is the right word, but basically you want the items to show one after the other, with the transition in opacity taking about 0.2 seconds per item. You could also do a light/dark mode toggle. A potential style option is to have red play curtains on the sides and the main content in the middle between the curtains. Other cool style things to do would be transitions for the banners. Have them come in from the left, stay for a few seconds, and then leave back to the left. Could also add transitions when you nominate movies. For the title "The Shoppies" you could make the "S" the Shopify logo
// For your current button disable, I don't think it will work on page reload, or if you search something else and then search the original name again. Will think later on if it's possible to make it so that the button is always unclickable, even if you reload the page. You might have to change the code to make the IDs more unique so that instead of an id of "button1" it would be "button" + the URL address. That way, each and every button would have a completely unique ID, and you could make it so that if you click on a button, it adds that unique ID to local storage. A function (which will have to fire after the buttons are created on search) will then check the IDs in local storage, and if there's an ID that matches the IDs of one of the buttons created, that button will not be clickable and will have certain styling applied to it. 
// If someone searches for something that doesn't exist, there should be a message indicating that. 
// When you search something, text should be above the first result that says "Results for 'Search Item Name' "
// One banner should pop up when you add the 5th movie (a green banner) and a different one should pop up when you try to add a 6th movie (red banner)
// Add a description, especially on the Nominations page. It shouldn't be too hard. When you Nominate a movie, just make another AJAX call, but to the URL with the specific title, and save that description to local storage
// BIG ONE: Remove functionality doesn't work when you search another item. It's because the first item in the intial search will have an id of 0, and so will the first item in the second search, so you have two remove buttons with the same class number. 


// TODO: By the end of the day, you want the app to be fully functional. That means being able to nominate (up to 5) movies and un-nominate movies. You also want a page that shows the nominated movies 



// You want the "nominate" button to save it to an array. You should then call a function where you map over the array and create an li item for each item in the array (just like how that one site you looked at yesterday showed you to do it). This will be for the list on the same page as the home page. For the list on the "Nominated" page, you will create a card for each mapped item. Remember to keep the limit at 5. 

// Have to create an if statement where if there if poster === N/A, hide the element


// You may not have to have a unique button id. Basically, you can target specific items wtih a button click since each item is in an array. However, you want to target the item that aligns with the button you clicked (you'll have to set a variable equal to whatever that identifier is, and then target the correct item based off that variable). You're looking through the event of clicking the button right now to see if there is a unique identifier for the button click, but if there's not then you'll have to add a unique id to each one. You were originally trying to do this with a for loop, but maybe you can add a unique id on button click. 

// You're gonna have to traverse the DOM of the element. It'll basically be something like var x = MouseEvent.target.id



// TODO: For the rest of the night
// 1. Do basic styling to the list so that the position is fixed in the top right-ish corner of the screen 
// 2. Make it so that you can only nominate 5 movies and a green banner comes up when you add the fifth and a different red banner comes up if you try to add more than that
// 3. Make a banner pop up when you try to add the same movie
// 4. Disable the button / make it so you can't add another button if the movie has already been nominated. You should do this (if possible) by comparing movie poster URL instead of titles, since each item you look up will have a unique poster, but some may have the same title.
// 5. Add delete functionality
// TODO: 6. Add local storage functionality
// TODO: 7. Make it so that there's two pages; one home page for searching and saving (which is what you're working on right now) and a page where you're saved movies show up. 
// TODO: 8. Do the basic styling that you want. This means background image/wallpaper, orientiation of divs, nav bar, etc. The transitions, animations, and edge cases you can deal with on Saturday

// That's it! If you do that, you've gone above and beyond the technical functionality and met the MVP plus the 6th step. Tomorrow and Saturday you will work on styling and edge cases


// TODO: Right now, the reason it's not working is because of the way things are going into the array. Unless you add movies in order and delete them in order, the array isn't properly lining up. For example, if you add movies 1, 2, and 3, but then delete movies 3, 1, and 2, it will confuse the array since it's calling on the array in reverse order, instead of calling on it based on the matching id number .It shouldn't be too hard to do. Just splice the array where the id number matches the array number (these should match since the array numbers are supposed to be based off the id numbers)
// Actually, if you add movies 1, 2 and 3, when you try to delete them in order 3,2,1, it still only adds the button back to the third movie. You can figure this out by console logging the array and seeing how the numbers aren't matching up

// TODO: Look into if you're pushing into the array from local storage. Right now you can't add more than 5 movies - even if you've already had a few movies in local storage on page load - which is good, but surprising that it's functioning since the 5 movie cap is based on the array length, and you don't remember pushing items from local storage into the array. 