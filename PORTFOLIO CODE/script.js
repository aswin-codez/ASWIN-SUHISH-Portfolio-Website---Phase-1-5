
const typing = document.querySelector(".typing");
const roles = ["Full Stack Developer", "Web Designer", "Creative Coder"];
let roleIndex = 0, charIndex = 0;

function type() {
  if (charIndex < roles[roleIndex].length) {
    typing.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typing.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 500);
  }
}
document.addEventListener("DOMContentLoaded", type);

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  if (!email.includes("@")) {
    alert("Please enter a valid email address!");
  } else {
    alert("Message sent successfully!");
    this.reset();
  }
});

const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.innerHTML = document.body.classList.contains("dark-mode")
    ? '<i class="bi bi-sun"></i>'
    : '<i class="bi bi-moon-stars"></i>';
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));
