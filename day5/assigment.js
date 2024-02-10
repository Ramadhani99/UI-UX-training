const fs = require("fs");

let logUser = (username) => {
  fs.readFile("./names.txt", "utf8", (err, data) => {
    console.log(data);
    let users = data.split(",");
    console.log(users);
    if (users.includes(username)) {
      console.log("The name already exists");
    } else {
      fs.appendFile("./names.txt", "," + username, (err, data) => {
        if (!err) {
          console.log(data);
        } else {
          console.log("error in appending files");
        }
      });
    }
  });
};
logUser("Abdala");
