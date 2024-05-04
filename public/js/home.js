const saveNewComment = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute("data-id");

  const comment = document.querySelector(`#added-comment-${id}`).value;

  const response = await fetch("/api/comment", {
    method: "POST",
    body: JSON.stringify({ comment, id }),
    headers: { "Content-Type": "application/json" },
  });

  console.log(response);
  if (response.ok) {
    document.getElementById(id).classList.add("d-none");
    document.getElementById(`comment-button-${id}`).classList.remove("d-none");
    document.location.reload("/profile");
  }
};

const createNewComment = async (event) => {
  const id = event.target.getAttribute("data-id");
  document.getElementById(id).classList.remove("d-none");
  document.getElementById(`comment-button-${id}`).classList.add("d-none");
};

document
  .querySelectorAll(".comment-button")
  .forEach((el) => el.addEventListener("click", createNewComment));

document
  .querySelectorAll(".save-button")
  .forEach((el) => el.addEventListener("click", saveNewComment));
