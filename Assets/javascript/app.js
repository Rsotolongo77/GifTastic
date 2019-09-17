
//Establishing array for initial topics on rendered buttons//
var buttons = ["The Office", "Dogs", "90s", "Parrots", "Awkward", "Drunk", "Computer", "Toy Story", "Laughing", "Happy Dance"];

//Establish API get request via ajax. Funtion established that initiates build of GIF//
function displayGifInfo() {

    //Will pull data established from loop in renderbutton function below; which targets each index in the array. 
    var gif = $(this).attr("data-name");



    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=hh9ypFLslCSgV8p8wP7IQnLgbwS0Kp88&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {


        //To remove previous gifs rendered on page//
        $("#gifs-view").empty();
        //Removes jumbotron for better viewing experience after gifs are rendered//
        $("#displayArea").remove();
        //variable to store data received, and loop to establish attributes for each individual image//
        //also established is html elements accordingly//
        var results = response.data;
        for (var i = 0; i < results.length; i++) {


            var gifDiv = $(`<div class="gifs-created">`);
            var p = $("<p>").text("Rating: " + results[i].rating);
            var gifImg = $("<img>");
            gifImg.attr("src", results[i].images.fixed_height_still.url);
            gifImg.attr("data-still", results[i].images.fixed_height_still.url);
            gifImg.attr("data-animate", results[i].images.fixed_height.url);
            gifImg.attr("data-state", "still");
            gifDiv.append(p);
            gifDiv.append(gifImg);
            $("#gifs-view").prepend(gifDiv);
        }

    })


}


//funtion to render buttons for each item in the array. Also established are html elements accordingly//
function renderButtons() {


    $("#buttons-view").empty();


    for (var i = 0; i < buttons.length; i++) {


        var a = $("<button>");
        a.addClass("gif-button");
        a.attr("data-name", buttons[i]);
        a.text(buttons[i]);
        $("#buttons-view").append(a);



    }

}
//On click with contional established for toggle between still and animated images.//
$(document).on("click", "img", function () {

    
    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }


});

//On click established to push user input on searchbar to buttons array//
$(document).on("click", "#add-gif", function () {
    event.preventDefault();
    $("input:text").click(
        function () {
            $(this).val("");
        });


    var userGif = $("#gif-input").val().trim();
    buttons.push(userGif);
    console.log(buttons);

    renderButtons();


})

$(document).on("click", ".gif-button", displayGifInfo)




renderButtons();

