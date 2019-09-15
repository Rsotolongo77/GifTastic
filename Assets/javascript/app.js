//var APIKey = "hh9ypFLslCSgV8p8wP7IQnLgbwS0Kp88";

//var topics = ["The Office", "Dogs", "90s", "Parrots", "Awkward", "Drunk", "Computer", "Toy Story", "Laughing", "Happy Dance"];


//function displayGifInfo() {

$("button").on("click", function(){

    var topic = $(this).attr("data-topic");



   

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=hh9ypFLslCSgV8p8wP7IQnLgbwS0Kp88&limit=5";
    


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {



    console.log(queryURL);
    console.log(response);

    var results = response.data;
    for (var i =0; i < results.length; i++) {

    var gifDiv = $("<div>");
    var p = $("<p>").text("Rating: " + results[i].rating);
    var gifImage = $("<img>");
    gifImage.attr("src", results[i].images.fixed_height.url);
    gifDiv.append(p);
    gifDiv.append(gifImage);
    $("#gifs-view").prepend(gifDiv);        
    }

});

});   
    //var gifDiv = $("<div class='gifs'>");
    //var Rating = response.rating;
    //var ratingDisplay = $("<p>").text("Rating: " + Rating);
    //gifDiv.append(ratingDisplay);
    //var imgUrl = response.data.images;
    //var img = $("<img>").attr("src",imgUrl);
    //gifDiv.append(img);
    

//console.log(displayGifInfo);





//function renderButtons () {

    //$("#buttons-view").empty();
    //for (var i = 0; i < topics.length; i++) {

        //var buttons = $("<button>");
        //buttons.addClass("gif-btn");
        //buttons.attr("data-name", topics[i]);
        //buttons.text(topics[i]);
        //$("#buttons-view").append(buttons);
      



//renderButtons();


//$("#buttons-view").on("click", function(event) {
    //event.preventDefault();
 
    //var gifs = $().val().trim();

    // Adding movie from the textbox to our array
    //movies.push(movie);

    // Calling renderButtons which handles the processing of our movie array
    //renderButtons();
  //});

  // Adding a click event listener to all elements with a class of "movie-btn"
  //$(document).on("click", ".movie-btn", displayMovieInfo);

  // Calling the renderButtons function to display the intial buttons
  //renderButtons();
