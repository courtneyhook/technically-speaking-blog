const loginUser = async (event) => {
  event.preventDefault();

  const email = document.getElementById("user_email").value.trim();
  const password = document.getElementById("user_password").value.trim();

  if (email && password) {
    const response = await fetch("/api/blogger/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.assign("/");
    } else {
      console.log("error logging in");
    }
  }
};

document.getElementById("submit-login").addEventListener("click", loginUser);
