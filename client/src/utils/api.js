import axios from "axios";

export default {
    // Gets all books
    getCities: function () {
        return axios.get("/api/cities");
    },
    // Gets the book with the given id
    getCity: function (id) {
        return axios.get("/api/cities/" + id);
    }
};