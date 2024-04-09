const loginUser = async (event) => {
  event.preventDefault();

  const user_email = document.getElementById("user_email").value.trim();
  const user_password = document.getElementById("user_password").value.trim();

  if (user_email && user_password) {
    const response = await fetch("/api/blogger/login", {
      method: "POST",
      body: JSON.stringify({ user_email, user_password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      document.location.assign("/profile");
    } else {
      console.log("could not display profile page");
    }
  }
};

document.getElementById("submit_login").addEventListener("click", loginUser);
