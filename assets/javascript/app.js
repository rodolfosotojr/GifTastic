//Create an arry of strings related to my topic of NBA playerss
// var nbaplayerss = ["Michael Jordan", "Allen Iverson", "Dennis Rodman", "Vince Carter"];

//Create a button for each string and append the button for each string
// var createBtn = function(input){
//     for(var i = 0; i < nbaplayerss.length; i++)

//     $("#addSearch").text(createBtn);


// }

// createBtn();

//On click function that retreives 10 gifs

var players = ["Michael Jordan", "Dennis Rodman"];



function displayGif(player) {


    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + player + "&api_key=bWRree7iP0V0neZViCSJ3wUU4DANrTY4&limit=10";

    $("#searches").empty();


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            // console.log(response);
            // console.log(response.data[i].images.fixed_height.url);
            // console.log(response.data)
        }
        //this for loop is to loop through the entire dot notation of the JSON documnet
        for (var i = 0; i < response.data.length; i++) {
            //create variables and attributes to pull desired data from the JSON
            //in this case I am looking for the rating, the gif URL, and an image for my gif
            var newDiv = $("<div>");
            var rating = response.data[i].rating;
            var p = $("<p>").text("Rating: " + rating.toUpperCase());
            var animated = response.data[i].images.fixed_height.url;
            var still = response.data[i].images.fixed_height_still.url;
            var image = $("<img>");
            // image.attr({ "class": "gif", "src": still, "data-animated": animated, "data-still": still });
            image.addClass("gif");
            image.attr("src", still);
            image.attr("data-animated", animated);
            image.attr("data-still", still)
            newDiv.append(image);
            newDiv.prepend(p);
            $("#searches").append(newDiv);
            //console.log(rating);
            //console.log(animated);
        };

        //console.log(response);

    });


}

//Create function that animates the gif once it is clicked
//If the user clicks it again, it stops the animation

function renderBtn() {
    $("#btnArea").empty();

    for (var i = 0; i < players.length; i++) {
        var btn = $("<button>");
        btn.text(players[i]);
        btn.addClass("gif-btn");
        $("#btnArea").append(btn);
        //console.log(btn);

    }
};



//create a funciton that passes an on click event, grabs the text of the button, and displays the Gif'

$(document).on("click", ".gif-btn", function () {
    var player = $(this).text();
    displayGif(player);

});

$("#addSearch").on("click", function (event) {
    event.preventDefault();
    //console.log("I've been clicked");
    var text = $("#textSearch").val().trim();
    players.push(text);
    //console.log(players);
    renderBtn();
});

$(document).on("click", ".gif", function () {
    var crntSrc = $(this).attr("src");
    var still = $(this).attr("data-still");
    var animated = $(this).attr("data-animated");
    if (crntSrc === still) {
        $(this).attr("src", animated);
    } else {
        $(this).attr("src", still);
    }
    
});

renderBtn();





//From the JSON, pull and display the rating
//Create a function that uses .val().trim() methods to pull the user inpur data and add it 
//to the nbaplayerss variable

// $("#searches").append("<input type='text'>");


//Create a function that creates a button for each string in the array