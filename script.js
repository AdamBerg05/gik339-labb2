
// Hämtar kryssrutan
const checkbox = document.getElementById("divStyle");

// Hämtar båda textfälten
const textFields = document.getElementsByClassName("textfield");

// Hämtar knappen
const button = document.querySelector("button");

// Hämtar rutan
const outputDiv = document.getElementsByTagName("div")[0];


// Funktion som körs när man skriver i ett textfält
function showText(event) {
    console.log(event.target);

    // Om det är innehållsfältet visar vi texten i rutan
    if (event.target.id === "content") {
        outputDiv.textContent = event.target.value;
    }
}


// När man klickar i kryssrutan ändras bakgrundsfärgen
checkbox.addEventListener("change", function () {
    const colorInput = document.getElementById("color");

    if (checkbox.checked) {
        outputDiv.style.backgroundColor = colorInput.value;
    } else {
        outputDiv.style.backgroundColor = "white";
    }
});


// Kopplar funktionen till båda textfälten
for (let i = 0; i < textFields.length; i++) {
    textFields[i].addEventListener("input", showText);
    textFields[i].addEventListener("blur", showText);
}


// När man klickar på knappen tas rutan bort
button.addEventListener("click", function () {
    outputDiv.remove();
});
