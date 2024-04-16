const userLogout = async () => {
  const response = await fetch("/api/blogger/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    console.log("error logging out");
  }
};

document.getElementById("logout-btn").addEventListener("click", userLogout);
