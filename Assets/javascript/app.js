var buttons = ["The Office", "Dogs", "90s", "Parrots", "Awkward", "Drunk", "Computer", "Toy Story", "Laughing", "Happy Dance"];

function loadButtons()  {
    var listButtons = JSON.parse(localStorage.getItem("buttons"));
    buttons = listButtons;
}

function renderButtons() {

    $(".recents").empty();

    for (i = 0; i < buttons.length; i++) {
        var buttonIndex = buttons[i];

        var button = ` <div class="container-buttons">
        <button 
            class="btn btn-search"
            data-name="${buttonIndex}">${buttonIndex}</button>
        
            <button data-name="${buttonIndex}"
            class="btn btn-delete fas fa-times"
            ></button>
        
        </div>
        
        `;

        $(".recents").append(button);

        localStorage.setItem("buttons", JSON.stringify(buttons));
    }

}

loadButtons();
renderButtons();



$("#submit-btn").on("click ", function(event)  {

event.preventDefault(); 
 var value = $("#search").val();

 buttons.push(value);
 renderButtons();

 console.log ("Value", value);
});

