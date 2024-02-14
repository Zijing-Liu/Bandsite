const show1 = {
  date: "Mon Sept 09 2024",
  venue: "Ronald Lane",
  location: "San Francisco, CA",
};

const show2 = {
  date: "Tue Sept 17 2024",
  venue: "Pier 3 East",
  location: "San Francisco, CA",
};
const show3 = {
  date: "Sat Oct 12 2024",
  venue: "View Lounge ",
  location: "San Francisco, CA",
};
const show4 = {
  date: "Sat Nov 16 2024",
  venue: "Hyatt Agency",
  location: "San Francisco, CA",
};

const show5 = {
  date: "Fri Nov 29 2024",
  venue: "Moscow Center ",
  location: "San Francisco, CA",
};
const show6 = {
  date: "Wed Dec 18 2024",
  venue: "Press Club ",
  location: "San Francisco, CA",
};
const shows = [show1, show2, show3, show4, show5, show6];

function displayShows(showList) {
  console.log(showList);
  showList.forEach((show) => {
    // get the container of the show item in html
    const showContainer = document.querySelector(".show-list");
    // get the value for each property
    const { date, venue, location } = show;
    // create elements to display a show item
    const showElement = document.createElement("div");
    const dateLabel = document.createElement("p");
    dateLabel.innerText = "DATE";
    const dateContent = document.createElement("p");
    dateContent.innerText = date;

    const venueLabel = document.createElement("p");
    venueLabel.innerText = "VENUE";
    const venueContent = document.createElement("p");
    venueContent.innerText = venue;
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
displayShows(shows);
