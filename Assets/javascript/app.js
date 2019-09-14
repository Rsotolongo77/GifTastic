var APIKey = "hh9ypFLslCSgV8p8wP7IQnLgbwS0Kp88";

var topics = ["The Office", "Dogs", "90s", "Parrots", "Awkward", "Drunk", "Computer", "Toy Story", "Laughing", "Happy Dance"];


function displayGifInfo() {

    var gifs = $(this).attr("data-name");

    var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=hh9ypFLslCSgV8p8wP7IQnLgbwS0Kp88&q=" + gifs;


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    var gifDiv = $("<div class='gifs'>");
    var Rating = response.rating;
    var ratingDisplay = $("<p>").text("Rating: " + Rating);
    gifDiv.append(ratingDisplay);
    var imgUrl = response.data.images;
    var img = $("<img>").attr("src",imgUrl);
    gifDiv.append(img);
    
});

console.log(displayGifInfo);


}


function renderButtons () {

    $("#buttons-view").empty();
    for (var i = 0; i < topics.length; i++) {

        var buttons = $("<button>");
        buttons.addClass("gif-btn");
        buttons.attr("data-name", topics[i]);
        buttons.text(topics[i]);
        $("#buttons-view").append(buttons);
      
    }

} 
renderButtons();
