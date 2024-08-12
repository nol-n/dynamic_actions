export function initDropdown() {
  function toggleDropdown(event) {
    event.preventDefault();

    let dropdownContent = event.target.nextElementSibling;

    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  }

  document.querySelectorAll(".dropbtn").forEach((button) => {
    button.addEventListener("click", toggleDropdown);
  });
}
