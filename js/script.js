    var content = document.getElementById("content");
    var button = document.getElementById("show-more");
    button.onclick = function() {
        if (content.className == "open") {
            // shrink the box
            content.className = "";
            button.innerHTML = "Show More";
        } else {
            // open the box
            content.className = "open";
            button.innerHTML = "Show Less";
        }
    }
    $(document).ready(function() {
        console.log("start");
        $('.image').addClass('visible');
    });