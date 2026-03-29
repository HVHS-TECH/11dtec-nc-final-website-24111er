var icon = document.getElementById("icon");
var message = document.getElementById("message");
var popupN = document.getElementById("NarniaPopup");
var close = document.getElementsById("close-button");

 icon.addEventListener('click',handleClick);
// icon.onclick = function() {
// //     popupN.style.display = "block";
// message.textContent = "the button was cliked";
//  }

function handleClick() {
    message.textContent = "the button was clicked";
}



// close.onclick = function() {
//     popupN.style.display = "none";
// }

// window.onclick = function(event) {
//      if (event.target == popupN) {
//          popupN.style.display = "block";
//      } 
//  }



// https://www.w3schools.com/howto/howto_css_modals.asp#:~:text=Converters,padding:%2020px;