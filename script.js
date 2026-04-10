
const NarniaIcon = document.getElementById("NarniaIcon");
const message = document.getElementById("message");
const NarniaClosebutton = document.getElementById("NarniaClosebutton");
const npopup = document.getElementById("NarniaPopup")

function NarniaClick() {
    npopup.style.display = "grid";
}

function NarniaClose() {
    npopup.style.display = "none";
}



NarniaIcon.addEventListener('click', NarniaClick);
NarniaClosebutton.addEventListener('click',NarniaClose);



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

//window.onclick = function(event) {
//     if (event.target == npopup) {
//         npopup.style.display = "grid";
//     }
    
//     if (event.target !== npopup) {
//       npopup.style.display = "none";
//     }
// }




// https://www.w3schools.com/howto/howto_css_modals.asp#:~:text=Converters,padding:%2020px;