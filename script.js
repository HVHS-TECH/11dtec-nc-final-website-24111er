const icon = document.getElementById("icon");
const message = document.getElementById("message");

function handleClick() {
    message.textContent = 'The button was clicked';
}

icon.addEventListener('click', handleClick);