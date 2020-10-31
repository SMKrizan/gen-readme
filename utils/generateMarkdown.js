const fs = require('fs');

// function will create a new file, 'readme.md'
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./dist/readme.md', fileContent, err => {
          // if there's an error, Promise will be rejected and an error sent to Promise's '.catch()' method.
          if (err) {
              reject(err);
              // return out of function to make sure the Promise does not execute subsequent resolve() function.
              return;
          }
          // if everything goes well, resolve Promise and return data to the `.then()` method.
          resolve({
              ok: true,
              message: "File created! Your README has been created! Navigate to 'readme.md' within the dist directory for review."
          });
      });
  });
};

// using shorthand property name to export 'writeFile' function output to index.js
module.exports = { writeFile };