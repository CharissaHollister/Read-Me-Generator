// var answers = [
//   {
//     title: "X",
//     description: "X",
//     installation: "X",
//     usage: "X",
//     contribute: "X",
//     test: "X",
//     license: ["X"],
//     github: "X",
//     email: "X",
//   },
// ];

// https://github.com/CharissaHollister

var fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");










module.exports = { writeFile, copyFile };






// // title of my project and Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// const projectData = {
//   title: "testing title",
//   description: "testing description",
// };

// // const generateTitle = (projectData) => {
// //   $(projectData).map(({ title, description }) => {
// //     if (!title || !description) {
// //       return "";
// //     }
// //     return `
// //     #Project Title: ${title}
// //     <br />
// //     ##Project Description: ${description}
// //     <br />
// //   `;
// //   });
// // };
// console.log(projectData);
// const generateTitle = (projectData) => {
//   if (!projectData) {
//     return "";
//   }
//   return `
//     #Project Title: ${projectData.title}
//     <br />
//     ##Project Description: ${projectData.description}
//     <br />
//   `;
// };
// ///add rest of data and formatting

// const writeFile = (fileContent) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile("./README.md", fileContent, (err) => {
//       // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
//       if (err) {
//         reject(err);
//         // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
//         return;
//       }

//       // if everything went well, resolve the Promise and send the successful data to the `.then()` method
//       resolve({
//         ok: true,
//         message: "File created!",
//       });
//     });
//   });
// };

// const copyFile = (fileContent) => {
//   return new Promise((resolve, reject) => {
//     fs.copyFile("./README.md", fileContent, (err) => {
//       // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
//       if (err) {
//         reject(err);
//         // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
//         return;
//       }

//       // if everything went well, resolve the Promise and send the successful data to the `.then()` method
//       resolve({
//         ok: true,
//         message: "File copied!",
//       });
//     });
//   });
// };

// // generateTitle(){
// //   //   .then((pageReadme) => {
// //   //     return writeFile(pageReadme);
// //   //   })
// //   .then((writeFileResponse) => {
// //     console.log(writeFileResponse);
// //     return copyFile();
// //   })
// //   .then((copyFileResponse) => {
// //     console.log(copyFileResponse);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// const data = new Uint8Array(Buffer.from("Hello Node.js"));
// fs.writeFile("./README.md", data, (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });
// // module.exports = {
// //   writeFile: writeFile,
// //   copyFile: copyFile,
// // };

// // if name and value is the same:  module.exports = { writeFile, copyFile }
