document.addEventListener("DOMContentLoaded", function() {
    const result = document.getElementById("result");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonText = this.textContent;

            if (buttonText === "=") {
                result.value = eval(result.value);
            } else if (buttonText === "C") {
                result.value = "";
            } else {
                result.value += buttonText;
            }
        });
    });
});