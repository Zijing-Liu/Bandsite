let default_comments = [];

const comment1 = {
  name: "Victor Pinto",
  timestamp: "11/02/2023",
  text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
};
const comment2 = {
  name: "Christina Cabrera",
  timestamp: "10/28/2023",
  text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
};
const comment3 = {
  name: "Isaac Tadesse",
  timestamp: "10/20/2023",
  text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
};

default_comments.push(comment1);
default_comments.push(comment2);
default_comments.push(comment3);
// function to display a comment on screen
function displayComments(comment) {
  const commentsContainer = document.getElementById("comment-list");
  // comment avatar

  // comment item
  const commentElement = document.createElement("div");
  commentElement.classList.add("comment-item");

  // comment title
  const titleElement = document.createElement("div");
  titleElement.classList.add("comment-item__title"); // container for the name and date

  const nameElement = document.createElement("p");
  nameElement.classList.add("comment-item__name");
  nameElement.textContent = comment.name;

  const timestampElement = document.createElement("p");
  timestampElement.textContent = comment.timestamp;
  timestampElement.classList.add("comment-item__date");

  const textElement = document.createElement("p");
  textElement.textContent = comment.text;
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
// display default comments;
default_comments.forEach((element) => {
  displayComments(element);
});
