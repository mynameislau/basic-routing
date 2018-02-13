(function() {
  const $ = str => window.document.querySelector(str);
  const $$ = str => window.document.querySelectorAll(str);
  const each = (array, fn) => {
    for (var index = 0; index < array.length; index++) {
      fn(array[index]);
    }
  };

  each($$("[data-link-to]"), entry => {
    entry.addEventListener("click", event => {
      window.location.hash = event.target.getAttribute("data-link-to");
    });
  });

  const updateConditionedElement = () => {
    each($$("[data-condition-route]"), entry => {
      const condition = entry.getAttribute("data-condition-route");
      const regex = new RegExp("^#" + condition.replace("*", ".*"));
      const result = regex.test(window.location.hash);
      const boundAttribute = entry.getAttribute("data-condition-bind");
      entry.setAttribute(boundAttribute, result);
    });

    var customEvent = new Event("basicRoutingConditionedElementsUpdated");

    window.dispatchEvent(customEvent);
  };

  window.addEventListener("hashchange", () => {
    updateConditionedElement();
  });

  if (window.location.hash !== "") {
    updateConditionedElement();
  } else {
    window.location.hash = "#" + $("body").getAttribute("data-default-route");
  }
})();
