
const NarniaIcon = document.getElementById("NarniaIcon");
const message = document.getElementById("message");
const NarniaClosebutton = document.getElementById("NarniaClosebutton");
const npopup = document.getElementById("NarniaPopup")

const OzIcon = document.getElementById("OzIcon");
const OzClosebutton = document.getElementById("OzClosebutton");
const OzPopup = document.getElementById("OzPopup");

const CharlotteIcon = document.getElementById("CharlotteIcon");
const CharlotteClosebutton = document.getElementById("CharlotteClosebutton");
const CharlottePopup = document.getElementById("CharlottePopup");

const FiveIcon = document.getElementById("Famous5Icon");
const FiveClosebutton = document.getElementById("FiveClosebutton");
const FivePopup = document.getElementById("FivePopup");

const AliceIcon = document.getElementById("AliceIcon");
const AliceClosebutton = document.getElementById("AliceClosebutton");
const AlicePopup = document.getElementById("AlicePopup");

const LittleWomenIcon = document.getElementById("LittleWomenIcon");
const LittleWomenClosebutton = document.getElementById("LittleWomenClosebutton");
const LittleWomenPopup = document.getElementById("LittleWomenPopup");

const PeterIcon = document.getElementById("PeterRIcon");
const PeterClosebutton = document.getElementById("PeterClosebutton");
const PeterPopup = document.getElementById("PeterPopup");

const WinnieIcon = document.getElementById("WinnieIcon");
const WinnieClosebutton = document.getElementById("WinnieClosebutton");
const WinniePopup = document.getElementById("WinniePopup");

const AnneIcon = document.getElementById("AoGGIcon");
const AnneClosebutton = document.getElementById("AnneClosebutton");
const AnnePopup = document.getElementById("AnnePopup");

const HobbitIcon = document.getElementById("HobbitIcon");
const HobbitClosebutton = document.getElementById("HobbitClosebutton");
const HobbitPopup = document.getElementById("HobbitPopup");

NarniaIcon.addEventListener('click', NarniaClick);
NarniaClosebutton.addEventListener('click',NarniaClose);

OzIcon.addEventListener('click', OzClick);
OzClosebutton.addEventListener('click',OzClose);

CharlotteIcon.addEventListener('click', CharlotteClick);
CharlotteClosebutton.addEventListener('click',CharlotteClose);

FiveIcon.addEventListener('click', FiveClick);
FiveClosebutton.addEventListener('click',FiveClose);

AliceIcon.addEventListener('click', AliceClick);
AliceClosebutton.addEventListener('click',AliceClose);

LittleWomenIcon.addEventListener('click', LittleWomenClick);
LittleWomenClosebutton.addEventListener('click',LittleWomenClose);

PeterIcon.addEventListener('click', PeterClick);
PeterClosebutton.addEventListener('click',PeterClose);

WinnieIcon.addEventListener('click', WinnieClick);
WinnieClosebutton.addEventListener('click',WinnieClose);

AnneIcon.addEventListener('click', AnneClick);
AnneClosebutton.addEventListener('click',AnneClose);

HobbitIcon.addEventListener('click', HobbitClick);
HobbitClosebutton.addEventListener('click',HobbitClose);


function NarniaClick() {
    npopup.style.display = "grid";
}

function NarniaClose() {
    npopup.style.display = "none";
}

function OzClick() {
    OzPopup.style.display = "grid";
}

function OzClose() {
    OzPopup.style.display = "none";
}

function CharlotteClick() {
    CharlottePopup.style.display = "grid";
}

function CharlotteClose() {
    CharlottePopup.style.display = "none";
}

function FiveClick() {
    FivePopup.style.display = "grid";
}

function FiveClose() {
    FivePopup.style.display = "none";
}

function AliceClick() {
    AlicePopup.style.display = "grid";
}

function AliceClose() {
    AlicePopup.style.display = "none";
}

function LittleWomenClick() {
    LittleWomenPopup.style.display = "grid";
}

function LittleWomenClose() {
    LittleWomenPopup.style.display = "none";
}

function PeterClick() {
    PeterPopup.style.display = "grid";
}

function PeterClose() {
    PeterPopup.style.display = "none";
}

function WinnieClick() {
    WinniePopup.style.display = "grid";
}

function WinnieClose() {
    WinniePopup.style.display = "none";
}

function AnneClick() {
    AnnePopup.style.display = "grid";
}

function AnneClose() {
    AnnePopup.style.display = "none";
}

function HobbitClick() {
    HobbitPopup.style.display = "grid";
}

function HobbitClose() {
    HobbitPopup.style.display = "none";
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