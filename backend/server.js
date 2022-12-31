const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const fs = require("fs");
const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.ipdb.org/machine.cgi?id=4441");

  // Take Screenshot
  // await page.screenshot({ path: "example.png", fullPage: true });

  // PDF of Screenshot
  // await page.pdf({ path: "example.pdf", format: "A4" });

  // Return all HTML
  const html = await page.content();
  console.log(html);

  // Return title of page
  // const title = await page.evaluate(() => document.title);
  // console.log(title);

  // Return al links in page
  // const links = await page.evaluate(() =>
  //   Array.from(document.querySelectorAll("a"), (e) => e.href)
  // );

  // // Return all courses in page
  // const courses = await page.evaluate(() =>
  //   Array.from(document.querySelectorAll("#courses .card"), (e) => ({
  //     title: e.querySelector(".card-body h3").innerText,
  //     level: e.querySelector(".card-body .level").innerText,
  //     url: e.querySelector(".card-footer a").href,
  //     promo: e.querySelector(".card-footer .promo-code .promo").innerText,
  //   }))
  // );

  // const coursesAlternate = await page.$$eval("#courses .card", (elements) =>
  //   elements.map((e) => ({
  //     title: e.querySelector(".card-body h3").innerText,
  //     level: e.querySelector(".card-body .level").innerText,
  //     url: e.querySelector(".card-footer a").href,
  //     promo: e.querySelector(".card-footer .promo-code .promo").innerText,
  //   }))
  // );

  // console.log(coursesAlternate);

  // Save data to JSON file
  // fs.writeFile("courses.json", JSON.stringify(coursesAlternate), (err) => {
  //   if (err) throw err;
  //   console.log("File saved");
  // });

  await browser.close();
}

run();

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
