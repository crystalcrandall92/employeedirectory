import axios from "axios";

// Basic call to API, using US as the userbase and displaying 20 results
export default {
  search: function () {
    return axios.get("https://randomuser.me/api/?results=20&nat=us");
  }
};
