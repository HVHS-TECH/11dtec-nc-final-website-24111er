document.body.addEventListener("click", (ev) => {
    const isExpandableTitle = !!ev.target.closest(".expandable_head");
    const expandable = ev.target.closest(".expandable");

    console.log(expandable);

});