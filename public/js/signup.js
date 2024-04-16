const userSignup = async (event) => {
  event.preventDefault();

  const first_name = document.getElementById("new-first-name").value.trim();
  const last_name = document.getElementById("new-last-name").value.trim();
  const username = document.getElementById("new-username").value.trim();
  const email = document.getElementById("new-email").value.trim();
  const password = document.getElementById("new-password").value.trim();
  const verifyPassword = document
    .getElementById("verify-password")
    .value.trim();

  if (password !== verifyPassword) {
    return;
  }

  if (
    first_name &&
    last_name &&
    username &&
    email &&
    password &&
    verifyPassword
  ) {
    const response = await fetch("/api/blogger", {
      method: "POST",
      body: JSON.stringify({
        first_name,
        last_name,
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      console.log("error creating user");
    }
  }
};

document.getElementById("signup-submit").addEventListener("click", userSignup);
