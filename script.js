let form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Email validation
  if (!email.includes("@")) {
    alert("Enter valid email!");
    return;
  }

  let data = {
    name: name,
    email: email,
    message: message,
    time: new Date().toLocaleString()
  };

  let messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.push(data);

  localStorage.setItem("messages", JSON.stringify(messages));

  alert("Message saved!");

  form.reset();
});


// Dark mode
function toggleDark() {
  document.body.classList.toggle("dark");
}


// Admin login
function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if (u === "admin" && p === "1234") {
    document.getElementById("admin").style.display = "block";

    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    let output = "";

    messages.forEach(m => {
      output += `<p>${m.name} | ${m.email} | ${m.message} | ${m.time}</p>`;
    });

    document.getElementById("data").innerHTML = output;
  } else {
    alert("Wrong login!");
  }
}