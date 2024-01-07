const fs = require("fs");
const http = require("http");
const url = require("url");
///////////////////////////////////////
// // Blocking
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// // console.log(textIn);
// const textOut = `This My first ever back end development course. ${textIn}\n. Created on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// // console.log(textOut);

// //Non-blocking
// fs.readFile("./txt/input.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//   });
// });
//////////////////////////////////////////
// Creating Surver
////////////////////////////////////////

const replaceTemplate = function (temp, product) {
  let output = temp.replace(/{%TITLE%}/g, product.title);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%DATE%}/g, product.date);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);
  return output;
};

//////////////////////////////////////////
const projectCard = fs.readFileSync(`${__dirname}project-cards.html`, "utf-8");
// const productDetails = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
const productData = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const cardsHtml = productData.map((el) => replaceTemplate(tempCard, el));
    console.log(cardsHtml);
    res.end(projectCard);
  } else if (pathName === "/project") {
    res.end("Hellow i am from server");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hellow-world",
    });
    res.end("<h1>Page not fount</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Response from server");
});
