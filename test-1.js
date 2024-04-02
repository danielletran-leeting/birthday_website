const inputFieldName = document.getElementById("input-field")
const addButton = document.getElementById("add-button")


addButton.addEventListener("click", function() {
    var name = document.getElementById("input-field").value;
    if (name.trim() !== "") {
        localStorage.setItem("name", name);
        window.location.href = "details.html";
    } else {
        alert("Please enter your name before proceeding!");
    }
});
