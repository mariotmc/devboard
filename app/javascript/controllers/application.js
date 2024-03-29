import { Application } from "@hotwired/stimulus";

const application = Application.start();

// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;

Turbo.setConfirmMethod((message, element) => {
  const dialog = document.getElementById("turbo-confirm");

  dialog.querySelector("p").textContent = message;
  dialog.showModal();

  return new Promise((resolve, reject) => {
    dialog.addEventListener(
      "close",
      () => {
        resolve(dialog.returnValue == "confirm");
      },
      { once: true }
    );
  });
});

export { application };
