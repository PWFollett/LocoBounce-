import axios from "axios";

export default {
  // Gets all books
  getCities: function() {
    return axios.get("/routes/cities");
  },
  // Gets the book with the given id
  getCity: function(id) {
    return axios.get("/api/books/" + id);
  }
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
};
