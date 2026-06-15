(function () {
  var root = document.documentElement;
  var mq = window.matchMedia("(prefers-color-scheme: dark)");

  function stored() {
    try {
      return localStorage.getItem("theme");
    } catch (e) {
      return null;
    }
  }

  function isDark() {
    var choice = stored();
    return choice ? choice === "dark" : mq.matches;
  }

  function label(btn) {
    var dark = isDark();
    btn.textContent = dark ? "Light" : "Dark";
    btn.setAttribute("aria-label", "Switch to " + (dark ? "light" : "dark") + " mode");
    btn.setAttribute("aria-pressed", String(dark));
  }

  function apply() {
    var choice = stored();
    if (choice) {
      root.setAttribute("data-theme", choice);
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function init() {
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      label(btn);
      btn.addEventListener("click", function () {
        try {
          localStorage.setItem("theme", isDark() ? "light" : "dark");
        } catch (e) {}
        apply();
        label(btn);
      });
    }
    mq.addEventListener("change", function () {
      if (!stored()) {
        apply();
        if (btn) label(btn);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
