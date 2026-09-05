(function () {
  function initAccordion(selector) {
    var list = document.querySelector(selector);
    if (!list) return;
    var items = Array.prototype.slice.call(list.querySelectorAll(":scope > details"));
    items.forEach(function (item) {
      item.addEventListener("toggle", function () {
        if (!item.open) return;
        items.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      });
    });
  }

  initAccordion(".pol-faq__list");
})();
