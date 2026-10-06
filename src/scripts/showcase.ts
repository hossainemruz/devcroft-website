const play = document.querySelector<HTMLButtonElement>(".poster-play");
const message = document.querySelector<HTMLElement>(
  "#video-placeholder-message",
);
const closeMessage = document.querySelector<HTMLButtonElement>(
  "#close-video-message",
);
function hideVideoMessage() {
  if (!message || !play) return;
  message.hidden = true;
  play.hidden = false;
  play.setAttribute("aria-expanded", "false");
  play.focus();
}
play?.addEventListener("click", () => {
  if (!message) return;
  message.hidden = false;
  play.hidden = true;
  play.setAttribute("aria-expanded", "true");
  message.focus();
});
closeMessage?.addEventListener("click", hideVideoMessage);
message?.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideVideoMessage();
});
document
  .querySelectorAll<HTMLButtonElement>("[data-screenshot]")
  .forEach((button) => {
    const dialog = document.querySelector<HTMLDialogElement>(
      `#screenshot-${button.dataset.screenshot}`,
    );
    button.addEventListener("click", () => dialog?.showModal());
    dialog?.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      )
        dialog.close();
    });
  });
document
  .querySelectorAll<HTMLAnchorElement>("[data-download]")
  .forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const status = document.querySelector("#download-status");
      if (status)
        status.textContent = `${link.dataset.download} downloads are coming soon. You can build Devcroft from source today.`;
    });
  });
