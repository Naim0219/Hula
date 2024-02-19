const axios = require("axios");
const apiUrl = "https://www.boredapi.com/api/activity";

for (let i = 0; i <= 70; i++) {
  var list = [];

  axios
    .get(apiUrl)
    .then((response) => {
      const jsonData = response.data.activity;
      let datares = jsonData.toString();
      list.push(datares);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

console.log(list)