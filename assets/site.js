const copyButton = document.querySelector("[data-copy-target]");
const availabilityMessage = document.getElementById("availability-message");
const noticeButtons = document.querySelectorAll("[data-notice]");

async function copyBibtex(targetId) {
  const target = document.getElementById(targetId);

  if (!target) {
    return;
  }

  try {
    await navigator.clipboard.writeText(target.textContent);
    copyButton.textContent = "Copied";
    copyButton.classList.add("is-copied");

    window.setTimeout(() => {
      copyButton.textContent = "Copy";
      copyButton.classList.remove("is-copied");
    }, 1800);
  } catch (error) {
    copyButton.textContent = "Copy failed";

    window.setTimeout(() => {
      copyButton.textContent = "Copy";
    }, 1800);
  }
}

if (copyButton) {
  copyButton.addEventListener("click", () => {
    copyBibtex(copyButton.dataset.copyTarget);
  });
}

if (availabilityMessage && noticeButtons.length > 0) {
  noticeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      availabilityMessage.textContent = button.dataset.notice;
      availabilityMessage.hidden = false;
    });
  });
}
