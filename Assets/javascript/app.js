var buttons = ["The Office", "Dogs", "90s", "Parrots", "Awkward", "Drunk", "Computer", "Toy Story", "Laughing", "Happy Dance"];


function displayGifInfo() {

    var gif = $(this).attr("data-name");

  

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=hh9ypFLslCSgV8p8wP7IQnLgbwS0Kp88&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {


        var results = response.data;
        for (var i = 0; i < results.length; i++) {


            var gifDiv = $(`<div class="gifs-created">`);
            var p = $("<p>").text("Rating: " + results[i].rating);
            var gifImg = $("<img>");
            gifImg.attr("src", results[i].images.fixed_height.url);
            gifDiv.append(p);
            gifDiv.append(gifImg);
            $("#gifs-view").prepend(gifDiv);
        }

    })

    
}



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


$(document).on("click", ".gif-button", displayGifInfo)




renderButtons();