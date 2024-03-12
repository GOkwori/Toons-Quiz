document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('noBtn'); 
    noButton.addEventListener('click', function(event) {

        // Prevent any default action
        event.preventDefault(); 

        // Go back to the previous page, which should be your game page
        window.history.back(); 
    });
});