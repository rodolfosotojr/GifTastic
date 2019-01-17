//Create an arry of strings related to my topic of NBA players
// var nbaPlayers = ["Michael Jordan", "Allen Iverson", "Dennis Rodman", "Vince Carter"];

//Create a button for each string and append the button for each string
// var createBtn = function(input){
//     for(var i = 0; i < nbaPlayers.length; i++)
    
//     $("#addSearch").text(createBtn);

    
// }

// createBtn();

//On click function that retreives 10 gifs

var player = "Michael Jordan";
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + player + "&api_key=bWRree7iP0V0neZViCSJ3wUU4DANrTY4&limit=10"
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    // console.log(response);
    // console.log(response.data[3].images.fixed_height.url);
    // console.log(response.data[3].rating)
    //this for loop is to loop through the entire dot notation of the JSON documnet
    for(var i = 0; i < response.data[i].length; i++){
        //create variables and attributes to pull desired data from the JSON
        //in this case I am looking for the rating, the gif URL, and an image for my gif
        var rating = response.data[i].rating;
        var p = $("<p>").text('Rating' + rating);
        var animated = response.data[i].images.fixed_height.url;
        var image = $("<img>");
        image.attr("data-animated", animated)
        $("#searches").append(image);
        $("#searches").append(p);
        console.log(rating);
        console.log(animated);
    }
    

    
});

//Create function that animates the gif once it is clicked
//If the user clicks it again, it stops the animation

//From the JSON, pull and display the rating
//Create a function that uses .val().trim() methods to pull the user inpur data and add it 
//to the nbaPlayers variable

$("#searches").append("<input type='text'>");


//Create a function that creates a button for each string in the array