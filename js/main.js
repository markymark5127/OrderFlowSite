(function () {
  const nav = document.querySelector(".nav-links");
  const toggle = document.querySelector(".nav-toggle");
  const form = document.querySelector(".contact-form");
  const success = document.querySelector(".form-success");

  function closeNav() {
    if (!nav || !toggle) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-open", open);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeNav();
  });

  if (form && success) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const button = form.querySelector('button[type="submit"]');
      const data = new FormData(form);

      if (button) {
        button.disabled = true;
        button.textContent = "Sending…";
      }

      fetch("https://formsubmit.co/ajax/mmayne@orderflow-erp.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
        .then(function (response) {
          if (!response.ok) throw new Error("Request failed");
          return response.json();
        })
        .then(function () {
          form.hidden = true;
          success.hidden = false;
          success.focus();
        })
        .catch(function () {
          window.location.href =
            "mailto:mmayne@orderflow-erp.com?subject=" +
            encodeURIComponent("OrderFlow inquiry") +
            "&body=" +
            encodeURIComponent(buildMailtoBody(data));
        })
        .finally(function () {
          if (button) {
            button.disabled = false;
            button.textContent = "Submit";
          }
        });
    });
  }

  function buildMailtoBody(data) {
    return [
      "Name: " + (data.get("name") || ""),
      "Company: " + (data.get("company") || ""),
      "Email: " + (data.get("email") || ""),
      "ERP: " + (data.get("erp") || ""),
      "How orders arrive: " + (data.get("ordersArrive") || ""),
    ].join("\n");
  }
})();
