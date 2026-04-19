 
// This is the java code for the expandable content on the library pages
document.body.addEventListener("click", (ev) => {
    const isExpandableTitle = !!ev.target.closest(".expandable_head");
    const expandable = ev.target.closest(".expandable");
    if (!isExpandableTitle) {
        return;
    }

    expandable.classList.toggle("expandable-open");

});

// When an expanadable title is clicked, the closest title to the event (the one that was clicked) 
// is registered as constant "isExpandable title" and the closest expandable content to the click 
// event is registered as the constant "expandable". If the target of the click wasn't a "isExpandableTitle" 
// (the user clicked the page or another element) than it stops executing the function. Otherwise

// I used this tutorial to help teach me how to do this (https://www.youtube.com/watch?v=9nJxybp7CEc)



