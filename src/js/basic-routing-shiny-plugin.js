const updateEntriesDisplay = () => {
  $("[data-condition-shiny]").each((i, entry) => {
    const boundAttribute = $(entry).attr("data-condition-bind");
    if ($(entry).attr(boundAttribute) == "true") {
      $(entry)
        .show()
        .trigger("shown");
    } else {
      $(entry)
        .hide()
        .trigger("hidden");
    }
  });
};

window.addEventListener("basicRoutingConditionedElementsUpdated", () => {
  updateEntriesDisplay();
});

updateEntriesDisplay();
