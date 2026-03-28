const icon = document.getElementById("icon");
const message = document.getElementById("message");
const popupN = document.getElementById("NarniaPopup")

function handleClick() {
    message.textContent = 'The button was clicked';
}

icon.addEventListener('click', handleClick);