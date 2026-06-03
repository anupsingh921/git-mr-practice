function showMessage() {
    alert("Hello Git Practice!");
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button")
        .addEventListener("click", showMessage);
});