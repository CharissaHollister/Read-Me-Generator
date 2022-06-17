// packages needed for this application
var fs = require("fs");
var inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

/////////////////working questions list////////////
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
    //get Project Authors
    type: "input",
    name: "authors",
    message: "Who are the Project authors?",
    validate: (authorsInput) => {
      if (authorsInput) {
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
    message: "what is the description of your project?",
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
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],

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
    //get github user name and create link
    type: "input",
    name: "github",
    message: "what is your gitHub user name?",
    validate: (githubInput) => {
      if (githubInput) {
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
    name: "email",
    message: "what is your e-mail address?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Entry required!");
        return false;
      }
    },
  },
];
/////////////////end of questions list////////////

/////////// prompt user and write file function//////////////
const promptUser = () => {
  return inquirer.prompt(questions);
};

promptUser()
  .then((data) => {
    // console.log(data);
    const content = generateMarkdown(data);
    console.log(content);
    fs.writeFile("./temp/README.md", content, (err2) => {
      if (err2) {
        console.log(err2);
        return;
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment")
    } else {
      console.log("Error has occured");
    }
  });
/////////end of function////////////////






////////////mock data for testing///////////////////
// var answers = [
//   {
//     title: "Project Wake Up",
//     authors: "Charissa Hollister",
//     description: "I am sleepy.",
//     installation: "Installation is done by eating chocolate",
//     usage: "anyone",
//     contribute: "anyone",
//     test: "Eat the chocolate and see if it helps",
//     license: ["MIT"],
//     github: "charissahollister",
//     email: "hollister.charissa@gmail.com",
//   },
// ];
// const data = answers[0];
// // console.log(data);
// const content = generateMarkdown(data);
// console.log(content);
// fs.writeFile("./temp/README.md", content, (err2) => {
//   if (err2) {
//     console.log(err2);
//     return;
//   }
// });
//////////end of mock data & mock function/////////////
