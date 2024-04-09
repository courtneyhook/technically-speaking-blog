const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("this is the signup js");
  console.log(event);
  const first_name = document.querySelector("#user_first_name").value.trim();
  const last_name = document.querySelector("#user_last_name").value.trim();
  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#user_email").value.trim();
  const password = document.querySelector("#user_password").value.trim();
  const verify_password = document
    .querySelector("#verify_password")
    .value.trim();

  console.log(
    first_name,
    last_name,
    username,
    email,
    password,
    verify_password
  );
  if (password !== verify_password) {
    console.log("passwords do not match");
  }

  if (
    first_name &&
    last_name &&
    username &&
    email &&
    password &&
    verify_password
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
    console.log(response);
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      console.log("error creating blogger");
    }
  }
};
document
  .getElementById("signup_submit")
  .addEventListener("click", signupFormHandler);

password;
