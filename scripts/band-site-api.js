console.log("line1");
// Create a api class
// With methods for getting data

class BandSiteApi {
  constructor(apiKey) {
    // add baseUrl to constructor
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    this.apiKey = apiKey;
  }

  // method to post a comment
  async postComment(comment) {
    try {
      // send a common post to the api with the comment object as the body
      const response = await axios.post(
        `${this.baseUrl}/comments/?api_key=${this.apiKey}`,
        comment
      );
    } catch (error) {
      console.log(error);
    }
  }
  // method to get current comments
  async getComments() {
    try {
      const response = await axios.get(
        `${this.baseUrl}comments/?api_key=${this.apiKey}`
      );
      const data = response.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  // getShows: send a GET request to the provided shows API,return the array of show data objects returned from the API.
  async getShows() {
    try {
      const response = await axios.get(
        `${this.baseUrl}/showdates/?api_key=${this.apiKey}`
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }
}
