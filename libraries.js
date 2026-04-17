document.body.addEventListener("click", (ev) => {
    const isExpandableTitle = !!ev.target.closest(".expandable_head");
    const expandable = ev.target.closest(".expandable");
    if (!isExpandableTitle) {
        return;
    }

    expandable.classList.toggle("expandable-open");

    // console.log(expandable);

});

document.body.addEventListener("click", (ev) => {
    const isQuicklinksTitle = !!ev.target.closest(".quicklinks_head");
    const quicklinks = ev.target.closest(".quicklinks");
    if (!isQuicklinksTitle) {
        return;
    }

    quicklinks.classList.toggle("quicklinks-open");

    // console.log(quicklinks);

});

