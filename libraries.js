 
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
// is registered as constant variable isExpandable title



