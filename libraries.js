document.body.addEventListener("click", (ev) => {
    const isExpandableTitle = !!ev.target.closest(".expandable_head");
    const expandable = ev.target.closest(".expandable");
    if (!isExpandableTitle) {
        return;
    }

    expandable.classList.toggle("expandable-open")

    // console.log(expandable);

});

document.body.addEventListener("click", (ev) => {
    const IconButton = !!ev.target.closest(".icon");
    const PopUp = ev.target.closest(".popup-content");
    if (!IconButton) {
        return;
    }

    PopUp.classList.toggle("expandable-open")

    // console.log(expandable);

});
