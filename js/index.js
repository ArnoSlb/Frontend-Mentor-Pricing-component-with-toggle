let toggle = true;

let app = {

    toggleButton: document.getElementById('toggle_button'),

    init: function() {
        app.toggleButton.addEventListener('click', app.handleOnClick);
    },

    handleOnClick: function(event) {
        toggle = !toggle;

        if (toggle === true) {
            document.querySelector('.toggle_button_duration').style = "margin-left: 3px";
            document.querySelector('.prices_white_price_basic').textContent = "199.99";
            document.querySelector('.prices_white_price_master').textContent = "399.99";
            document.querySelector('.prices_purple_price').textContent = "249.99";
        } else {
            document.querySelector('.toggle_button_duration').style = "margin-left: 22px";
            document.querySelector('.prices_white_price_basic').textContent = "19.99";
            document.querySelector('.prices_white_price_master').textContent = "39.99";
            document.querySelector('.prices_purple_price').textContent = "24.99";
        }
    }
    
}

app.init();
