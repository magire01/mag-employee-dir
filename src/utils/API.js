import axios from "axios";

const randomURL = "https://randomuser.me/api/?results=10";

export default {
    getData: function() {
        return axios.get(randomURL);
    }
}