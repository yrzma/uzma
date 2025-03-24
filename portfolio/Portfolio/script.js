const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode");
});
const skills = ["HTML", "CSS", "JavaScript"];
const skillsList = document.getElementById("skills-list");
skills.forEach((skill) => {
  let li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault;
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      document.getElementById("form-status").textContent =
        "Please fill all fields";
      return;
    }
    document.getElementById("form-status").textContent =
      "Form sent successfully!";
    this.reset();
  });

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    const targetId = this.getAttribute("href"); // Get section ID
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80, // Adjust offset for fixed header
        behavior: "smooth", // Smooth scrolling effect
      });
    }
  });
});
