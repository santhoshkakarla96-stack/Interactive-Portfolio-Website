console.log("JS Connected");


const toggleBtn = document.getElementById("toggleAbout");
const aboutText = document.getElementById("aboutText");

toggleBtn.addEventListener("click", () => {
  aboutText.style.display =
    aboutText.style.display === "none" ? "block" : "none";
});


const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

function addTask() {
  const input = document.getElementById("taskInput");
  const list = document.getElementById("taskList");

  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  li.addEventListener("click", () => li.remove());

  list.appendChild(li);
  input.value = "";
}


document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const output = document.getElementById("formMessage");

  if (!email.includes("@")) {
    output.textContent = "❌ Invalid email address";
    output.style.color = "red";
    return;
  }

  if (message.length < 10) {
    output.textContent = "❌ Message too short";
    output.style.color = "red";
    return;
  }

  output.textContent = "✅ Message sent successfully!";
  output.style.color = "green";
});
