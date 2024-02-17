// instantiate an object from API class
API_KEY = "dcd88305-1253-4fba-9e18-10f10724d07e";
const api = new BandSiteApi(API_KEY);
// use async function to get all comments using the BandSiteAPI

async function getAndDisplayComments() {
  try {
    const response = await api.getComments();
    console.log(response);
    response.forEach((element) => {
      displayComments(element);
    });
  } catch (error) {
    console.log(error);
  }
}
// invoke getAndDisplayComments() function to display comments on the page
getAndDisplayComments();
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

  commentsContainer.appendChild(document.createElement("hr"));
  commentsContainer.appendChild(commentElement);
}

//helper function to formateDate timestamp to MM/DD/YY
function formatDate(timestamp) {
  let date = new Date(timestamp).toLocaleDateString("en-US");
  console.log(date);
  return date;
}
