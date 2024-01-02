"use strict";

const fsP = require('fs/promises');

/**
 * Read a file a specified path by console loggin the output
 * @param {string} path - The path to the file you want to read
 */

async function cat(path) {
  let content;
  // read the file
  try {
    content = await fsP.readFile(path, "utf8");
  } catch (err) {
    // give an error if file not found
    console.error(`Error read ${path}: ${err}`);
    process.exit(1);
  }
  // console log the contents of the file
  console.log(content);
}

async function webCat(url) {
  let response;
  try {
    response = await fetch(url);
  } catch (err) {
    console.error(`Error read ${url}: ${err}`);
    process.exit(1);
  }
  console.log(await response);
  // console.log(await response.text());

}

if (process.argv[2].includes('http')) {
  webCat(process.argv[2]);
} else {
  cat(process.argv[2]);
}