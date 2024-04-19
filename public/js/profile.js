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

const deletePost = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/blogpost/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      document.location.reload();
    }
  }
};

document.getElementById("submit-post").addEventListener("click", createNewPost);
document
  .querySelectorAll(".remove-post")
  .forEach((el) => el.addEventListener("click", deletePost));
