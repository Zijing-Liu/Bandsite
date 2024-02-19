import api from "./band-site-api.js";

// use async function to get all comments using the BandSiteAPI
async function getAndDisplayComments() {
  try {
    const response = await api.getComments();
    // sort the response data based on timestamp in descending order (from most recent to the least recent)
    const sortedComment = response.data.sort(
      (obj1, obj2) => obj2.timestamp - obj1.timestamp
    );
    console.log("unsorted", response);
    console.log("sorted", response);
    sortedComment.forEach((element) => {
      displayComments(element);
    });
  } catch (error) {
    console.log(error);
  }
}

// function that takes a comment object and display its content on screen
function displayComments(comment) {
  const commentsContainer = document.getElementById("comment-list");
  // comment avatar

  // create comment item
  const commentElement = document.createElement("div");
  commentElement.classList.add("comment-item");

  // create comment title
  const titleElement = document.createElement("div");
  titleElement.classList.add("comment-item__title"); // container for the name and date

  const nameElement = document.createElement("p");
  nameElement.classList.add("comment-item__name");
  nameElement.textContent = comment.name;

  const timestampElement = document.createElement("p");
  timestampElement.textContent = formatDate(comment.timestamp);
  timestampElement.classList.add("comment-item__date");

  const textElement = document.createElement("p");
  textElement.textContent = comment.comment;
  textElement.classList.add("comment-item__text");

  const rightColumn = document.createElement("div");
  rightColumn.classList.add("comment-item__rightColumn");
  const avatar = document.createElement("div");
  avatar.classList.add("avatar");

  commentElement.appendChild(avatar);
  commentElement.appendChild(rightColumn);
  rightColumn.appendChild(titleElement);
  rightColumn.appendChild(textElement);
  titleElement.appendChild(nameElement);
  titleElement.appendChild(timestampElement);

  commentsContainer.appendChild(commentElement);
  commentsContainer.appendChild(document.createElement("hr"));
}

//helper function to formateDate timestamp to MM/DD/YY
function formatDate(timestamp) {
  let date = new Date(timestamp).toLocaleDateString("en-US");
  console.log(date);
  return date;
}

// invoke getAndDisplayComments() function to display comments on the page
getAndDisplayComments();

// function to display new comment on top of existing one when a new comment is added
const ctaElement = document.querySelector(".primary-cta");
// when users clicks on ths submit function, check if the comment form is filled and invoke the display a comment funciton;
ctaElement.addEventListener("click", async (event) => {
  // prevent the bio page to reload when a new comment is added
  event.preventDefault();

  // Get the values of the input fields
  const nameValue = document.getElementById("user-name").value;
  const commentValue = document.getElementById("user-comment").value;

  // Check if both input fields are completed
  if (nameValue && nameValue) {
    // If both fields are completed, post the newly added comment to the api
    const commentNew = {
      name: String(nameValue),
      comment: String(commentValue),
    };
    const response = await api.postComment(commentNew);
    console.log(response);
  } else {
    // If any field is empty, display an error message or take appropriate action
    alert("Please fill in both fields.");
  }
});
