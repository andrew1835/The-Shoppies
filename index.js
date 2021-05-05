// PSEUDO CODE:

// 1. You will first make the OMDB API work. To do this, you will properly connect to it. Then, you will create a container where the results will show. Then, you will map over the results from the API to create a card/row for each result (might have to create a max number of cards. Depends on edge cases. For example, if someone searches "a", would thousands of resutls appear? If so, need a maxium number of cards)

// 2. You will then add a "nominate" button to each card, and you will create another container called the "nominated" container.

// 3. You will then write the code that makes it so pressing on the "nominate" button adds that item to an array. The items in that array will be shown in the container. If arrray.length = 5, don't let the user add any more movies and add a banner that shows 5 films have been nominated

// 4. You will then write code that adds a "delete" button to nominated movies, which removes that individual movie from the array and lets the user nominate it again

// 5. Save the array to local storage so that the nominations of each individual user are saved 

// 6. Once all this is working, you style it