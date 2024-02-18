import api from "./band-site-api.js";

async function getShowsAndDisplay() {
  const response = await api.getShows();
  displayShows(response.data);
}
function displayShows(showList) {
  console.log(showList);
  showList.forEach((show) => {
    console.log(show);
    // get the container of the show item in html
    const showContainer = document.querySelector(".show-list");
    // get the value for each property
    const { date, place, location } = show;
    // create elements to display a show item
    const showElement = document.createElement("div");
    const dateLabel = document.createElement("p");
    dateLabel.innerText = "DATE";
    const dateContent = document.createElement("p");
    dateContent.innerText = new Date(date).toDateString();

    const venueLabel = document.createElement("p");
    venueLabel.innerText = "VENUE";
    const venueContent = document.createElement("p");
    venueContent.innerText = place;
    const locationLabel = document.createElement("p");
    locationLabel.innerText = "LOCATION";
    const locationContent = document.createElement("p");
    locationContent.innerText = location;
    const cta = document.createElement("button");
    cta.innerText = "BUY TICKETS";
    const divider = document.createElement("hr");

    // add classnames to each newly created element
    dateLabel.classList.add("show__label");
    venueLabel.classList.add("show__label");
    locationLabel.classList.add("show__label");
    dateContent.classList.add("show__content", "show__content--bold");
    venueContent.classList.add("show__content");
    locationContent.classList.add("show__content");
    cta.classList.add("primary-cta");
    showElement.classList.add("show");
    divider.classList.add("show__divider");

    // create html structure for the show item
    showElement.appendChild(dateLabel);
    showElement.appendChild(dateContent);
    showElement.appendChild(venueLabel);
    showElement.appendChild(venueContent);
    showElement.appendChild(locationLabel);
    showElement.appendChild(locationContent);
    showElement.appendChild(cta);
    showElement.appendChild(divider);

    // append to the container html element for display
    showContainer.appendChild(showElement);
  });
}
getShowsAndDisplay();
