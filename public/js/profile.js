const createNewPost = async (event) => {
  event.preventDefault();
  const title = document.getElementById("new-post-title").value;
  const body = document.getElementById("new-post-body").value;
  let activePost;

  const response = await fetch("/api/blogpost", {
    method: "POST",
    body: JSON.stringify({ title, body }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.reload("/profile");
  }
};

const editPost = async (event) => {
  event.preventDefault();
  console.log("edit post js");
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    console.log(id);

    const title = document
      .querySelector(`#updated-post-title-${id}`)
      .value.trim();
    const body = document
      .querySelector(`#updated-post-body-${id}`)
      .value.trim();

    const response = await fetch(`/api/blogpost/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, body }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.getElementById(id).classList.add("d-none");
      document.location.reload();
    } else {
      console.log(error);
    }
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

const showEdit = async (event) => {
  const id = event.target.getAttribute("data-id");
  document.getElementById(id).classList.remove("d-none");
  document.getElementById(`save-post-button-${id}`).classList.remove("d-none");
  document.getElementById(`blog-title-${id}`).classList.add("d-none");
  document.getElementById(`blog-post-${id}`).classList.add("d-none");
  document.getElementById(`delete-post-button-${id}`).classList.add("d-none");
  document.getElementById(`edit-post-button-${id}`).classList.add("d-none");
};

document.getElementById("submit-post").addEventListener("click", createNewPost);
document
  .querySelectorAll(".remove-post")
  .forEach((el) => el.addEventListener("click", deletePost));
document
  .querySelectorAll(".save-edit")
  .forEach((el) => el.addEventListener("click", editPost));
document
  .querySelectorAll(".show-edit")
  .forEach((el) => el.addEventListener("click", showEdit));
