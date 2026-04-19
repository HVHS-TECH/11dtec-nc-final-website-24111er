// This connects all the html classes and ids regarding the popup as a 
// constant (a varible that can not be changed) to javascript 
const NarniaIcon = document.getElementById("NarniaIcon");
const NarniaClosebutton = document.getElementById("NarniaClosebutton");
const npopup = document.getElementById("NarniaPopup");

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


// These are custom functions that set a specific popup's display to 
// either grid or none depending on whether the close button or information icon was pressed
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

// The event listeners listen out for a specific event (in this class a click) 
// of either the information icon (to open the popup) or the close button. They then
//  direct they computer to execute the stated custom function. (e.g if the NarniaIcon 
// was clicked the computer would execute the custom NarniaClick fucntion and set the 
// NarniaPopup's display to grid, making it visible) 
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



// This tutorial helped me to understand and implement this code https://www.w3schools.com/howto/howto_css_modals.asp#:~:text=Converters,padding:%2020px;
