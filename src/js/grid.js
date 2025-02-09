document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".toggleButton");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var extraContent = this.nextElementSibling;

            if (extraContent.classList.contains("hidden")) {
                extraContent.classList.remove("hidden");
                this.textContent = "Ver menos";
            } else {
                extraContent.classList.add("hidden");
                this.textContent = "Ver más";
            }
        });
    });
});