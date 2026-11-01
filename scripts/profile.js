// Task 7: Profile dropdown
const avatarButton = document.querySelector(".avatar");
const profileDropdown = document.querySelector(".profile-dropdown");

avatarButton.addEventListener("click", () => {
    profileDropdown.classList.toggle("show");
});