document.body.addEventListener("click", (ev) => {
    const isExpandableTitle = !!ev.target.closest(".expandable_head");
    console.log(isExpandableTitle);
});