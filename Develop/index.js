// TODO: Include packages needed for this application
var fs = required("fs");
var staticSite = require("static-site");
var inquirer = require("inquirer");
// const generatePage = require("./src/page-template");
// const { writeFile, copyFile } = require("./utils/generate-site.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    //get Project Title
    type: "input",
    name: "title",
    message: "what is the title of your project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Entry required!");
        return false;
      }
    },
  },
  {
    //get description
    type: "input",
    name: "description",
    message: "what is the title of your project?",
    validate: (descInput) => {
      if (descInput) {
        return true;
      } else {
        console.log("Entry required!");
        return false;
      }
    },
  },
  {
    //get installation instructions
    type: "input",
    name: "installation",
    message: "what are the installation instructions?",
    validate: (installInput) => {
      if (installInput) {
        return true;
      } else {
        console.log("Entry required!");
        return false;
      }
    },
  },
  {
    //get Usage information
    type: "input",
    name: "usage",
    message: "what is the project used for?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Entry required!");
        return false;
      }
    },
  },
  {
    //get contribution guidelines
    type: "input",
    name: "contribute",
    message: "what are the contribution guidelines?",
    validate: (contributeInput) => {
      if (contributeInput) {
        return true;
      } else {
        console.log("Entry required!");
        return false;
      }
    },
  },
  {
    //get test instructions
    type: "input",
    name: "test",
    message: "what are the test instructions?",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Entry required!");
        return false;
      }
    },
  },
  {
    //get license option from list
    type: "checkbox",
    name: "license",
    message: "what is the title of your project?",
    choices: ["license1", "license2", "No License"],
    validate: (licenseInput) => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Entry required!");
        return false;
      }
    },
  },
  {
    //get github user name nad link
    type: "input",
    name: "github",
    message: "what is your gitHub user name?",
    validate: (descInput) => {
      if (descInput) {
        return true;
      } else {
        console.log("Entry required!");
        return false;
      }
    },
  },
  {
    //get email address
    type: "input",
    name: "description",
    message: "what is the title of your project?",
    validate: (descInput) => {
      if (descInput) {
        return true;
      } else {
        console.log("Entry required!");
        return false;
      }
    },
  },
];

const promptUser = () => {
  return inquirer
    .prompt([questions])
    .then((answers) => {
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
// inquirer
//   .prompt(questions)

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
