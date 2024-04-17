const createNewPost = async (event) => {
  event.preventDefault();
  const title = document.getElementById("new-post-title").value;
  const body = document.getElementById("new-post-body").value;

  const response = await fetch("/api/blogpost", {
    method: "POST",
    body: JSON.stringify({ title, body }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.reload("/profile");
  }
};

document.getElementById("submit-post").addEventListener("click", createNewPost);
