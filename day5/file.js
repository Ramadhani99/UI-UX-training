const fs = require("fs");

let filewrite = () => {
  let str = "I'm the file to be written, make sure you write me";
  fs.writeFile("./log.txt", str + new Date(), (err) => {
    if (!err) {
      console.log("successfuly write to the file");
    } else {
      console.log(err);
      throw err;
    }
  });
};

filewrite();

//read file

fs.readFile("./log.txt", "utf-8", (err, data) => {
  console.log(data);
});
