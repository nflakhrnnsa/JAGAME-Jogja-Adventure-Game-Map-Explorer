// =========================================
// LINKEDIN
// =========================================

const linkedinButton = document.getElementById("linkedinButton");

linkedinButton.addEventListener("click", function () {

    window.open(
        "https://www.linkedin.com/in/nafila-khoirunnisa-845315245",
        "_blank"
    );

});


// =========================================
// BACK BUTTON
// =========================================

const backButton = document.getElementById("backButton");

backButton.addEventListener("click", function () {

    window.location.href = "index.html";

});