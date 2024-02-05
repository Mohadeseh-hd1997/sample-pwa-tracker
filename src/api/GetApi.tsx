import axios from "axios";

export const usePhoto = async () =>
  await axios
    .get("https://fakestoreapi.com/products")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return console.log(error);
    });
