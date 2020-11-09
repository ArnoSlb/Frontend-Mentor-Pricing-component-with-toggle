let toggle = true;

let app = {

    init: function() {
        app.toggleButton.addEventListener('click', app.handleOnClick);
    },

    handleOnClick: function(event) {
        toggle = !toggle;

        if (toggle === true) {
            document.querySelector('.toggle_button_duration').style = "margin-left: 3px";
        } else {
            document.querySelector('.toggle_button_duration').style = "margin-left: 22px";
        }

        console.log(duration);
    }
    
}

app.init();
