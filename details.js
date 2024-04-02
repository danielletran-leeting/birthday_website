
document.addEventListener("DOMContentLoaded", function() {
    var name = localStorage.getItem("name");
    if (name) {
        document.getElementById("name-display").innerText = name;
    }

    var confettiSettings = {
        target: 'my-canvas',
        max: 200,
        size: 1,
        rotate: false
    };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

});

