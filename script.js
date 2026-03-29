
const icon = document.getElementById("icon");
const message = document.getElementById("message");
const close = document.getElementById("close-button");
const npopup = document.getElementById("NarniaPopup")

function handleClick() {
    npopup.style.display = "block";
}

function handleClose() {
    npopup.style.display = "none";
}

icon.addEventListener('click', handleClick);
close.addEventListener('click',handleClose);



// var icon = document.getElementById("icon").innerHTML;
// var message = document.getElementById("message").innerHTML;
// var popupN = document.getElementById("NarniaPopup").innerHTML;
// var close = document.getElementsById("close-button");

// icon.addEventListener("click", function(){ alert("Hello World!"); });
//  icon.addEventListener('click',handleClick);
// icon.onclick = function() {
// //     popupN.style.display = "block";
// message.textContent = "the button was cliked";
 //}
// function myfunction() {
//     message.textContent = "this button was clicked";

 //}
//  function handleClick() {
//      message.textContent = "the button was clicked";
// }



// close.onclick = function() {
//     popupN.style.display = "none";
// }

// window.onclick = function(event) {
//      if (event.target == popupN) {
//          popupN.style.display = "block";
//      } 
//  }



// https://www.w3schools.com/howto/howto_css_modals.asp#:~:text=Converters,padding:%2020px;