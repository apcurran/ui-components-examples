"use strict";

/** @type {HTMLDialogElement} */
const dialog = document.querySelector(".dialog");
const dialogOpenButton = document.querySelector(".dialog-open-btn");
const dialogCloseButton = document.querySelector(".dialog__close-btn");

dialogOpenButton.addEventListener("click", function openDialog() {
    dialog.showModal();
    dialog.classList.add("dialog--fade-in");
});

dialogCloseButton.addEventListener("click", function closeDialog() {
    dialog.close();
    dialogRemoveFadeInClass();
});

dialog.addEventListener("click", function lightDismissDialog(event) {
    const dialogDimensions = dialog.getBoundingClientRect();

    if (
        event.clientX < dialogDimensions.left ||
        event.clientX > dialogDimensions.right ||
        event.clientY < dialogDimensions.top ||
        event.clientY > dialogDimensions.bottom
    ) {
        dialogRemoveFadeInClass();
        dialog.close();
    }
});

function dialogRemoveFadeInClass() {
    dialog.classList.remove("dialog--fade-in");
}
