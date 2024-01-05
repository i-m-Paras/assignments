const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) throw err;

  let res = data.replace(/\s+/g, " ").trim();

  console.log(res);
});
