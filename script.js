
const NarniaIcon = document.getElementById("NarniaIcon");
const message = document.getElementById("message");
const NarniaClosebutton = document.getElementById("NarniaClosebutton");
const npopup = document.getElementById("NarniaPopup")
var coll = document.getElementsByClassName("collapsible_title");
var i;



// for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener('click', function() {
//         this.classList.toggle("active");
//         var content = this.nextElementSibling;
//         if (content.style.maxheight) {
//             content.style.maxheight = null;
//         } else {
//             content.style.maxheight = content.scrollHeight + "px";
//         }
//     });
// }

function NarniaClick() {
    npopup.style.display = "grid";
}

function NarniaClose() {
    npopup.style.display = "none";
}


// for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         var content = this.nextElementSibling;
//         if (content.style.display === "block") {
//             content.style.diplay = "none";
//         } else {
//             content.style.display = "block";
//         }
    
//     });
// }
// for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener('click', Collapsible);
// }

// function Collapsible() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "grid") {
//         content.style.display = "none";
//     } else {
//         content.style.display = "grid";
//     }

// }



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