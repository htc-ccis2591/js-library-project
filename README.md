This application was built using ReactJS the overcompassing goal of this application was to tie together ReactJS with Google MAPS API with Directions services in order to build a grocery list and getting the location of the nearest grocery stores within a 10 mile distance from your current location.

I was only able to build in parts of the map with no functionality which those parts of the code have been commented out. 

I did build the grocery list which takes string user input. There is currently no data validation built in so users can enter an empty string without being prompted that there is nothing in the list or to add an empty item.

The grocery list doesn't have a remove item method or a way to remove an item at this time. This requires a two-way data bind one on the state of the list one with a unique key value and one as a onClick event handler for the state of the array.

State in reactJS is not regarding application state it is also not regarding the session state of the application. The way state is used inside of reactJS is on the component level and is the only mutator inside of the application per component (if you have multiple components using state).

Minimal styling was used in this application. In order to create a persistent user experience I included the checkboxes to be included and margined them in a way where no matter what device it may be used on they know where it is.

I plan on continuing this project as React has some great features for UI and could become a great tool to use in a stack.

Future plans for this application:

**Create a vertical bar on the left hand side dedicated to the grocery list and have the rest of the space taken up by the map and have it scalable dependent on what device is being rendered on.

**Add checks for data validation on user input.

**Add functionality to remove an item in the list 

***Extended feature would be instead of removing an item in the list to have it move to another part of the grocery list in order to say the item is in the "cart" there would have to be a way to toggle them back and forth in case users make mistakes while shopping.

***Build in lat long coordinates to have google maps get directions based on a "grocery store" query that is "hard coded" into the application.

***Allow users to save their lists

***Allow users to share their grocery lists

Any feedback would be wonderful.

Thanks, 

Brian Andreasen