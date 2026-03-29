const icon = document.getElementById("icon");
const message = document.getElementById("message");
const popupN = document.getElementById("NarniaPopup");
const close = document.getElementsById("close-button");

// icon.onclick = function() {
// //     popupN.style.display = "block";
// message.textContent = "the button was cliked";
//  }

function handleClick {
    message.textContent = "the button was clicked";
}

 icon.addEventListener('click',handleClick)

// close.onclick = function() {
//     popupN.style.display = "none";
// }

// window.onclick = function(event) {
//      if (event.target == popupN) {
//          popupN.style.display = "block";
//      } 
//  }



// https://www.w3schools.com/howto/howto_css_modals.asp#:~:text=Converters,padding:%2020px;