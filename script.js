const icon = document.getElementById("icon");
const message = document.getElementById("message");
const popupN = document.getElementById("NarniaPopup");
const close = document.getElementsByClassName("close-button");

icon.onclick = function() {
    popupN.style.display = "block";
}

close.onclick = function() {
    popupN.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popupN) {
        popupN.style.display = "block";
    } 
}



// https://www.w3schools.com/howto/howto_css_modals.asp#:~:text=Converters,padding:%2020px;//