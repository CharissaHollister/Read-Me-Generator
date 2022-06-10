// TODO: Include packages needed for this application
var fs = require("fs");
// var staticSite = require("static-site");
var inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown.js");
const generateMarkdown = require("./utils/generateMarkdown");

generatePage.writeFile(content);
generatePage.copyFile("filename.txt");
/////////////////working questions list////////////
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

////////////mock data///////////////////
var answers = [
  {
    title: "Project Wake Up",
    description: "I am sleepy.",
    installation: "Installation is done by eating chocolate",
    usage: "anyone",
    contribute: "anyone",
    test: "Eat the chocolate and see if it helps",
    license: ["MIT"],
    github: "charissahollister",
    email: "hollister.charissa@gmail.com",
  },
];
const { content } = generateMarkdown(answers);
console.log(answers);
//////////end of mock data & mock function/////////////

/////////// prompt user function//////////////
// const promptUser = () => {
//   return inquirer.prompt(questions);
// };

// promptUser()
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//     console.log(answers);
//     const content = generateMarkdown(answers);
//     writeToFile("filename-here.md", content);
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {}

// // Function call to initialize app
init();

// function writeToFile(fileName, data) {}
// inquirer
//   .prompt(questions)

// promptUser()
//   .then(promptProject)
//   .then((portfolioData) => {
//     const pageHTML = generatePage(portfolioData);

//     fs.writeFile("./index.html", pageHTML, (err) => {
//       if (err) throw new Error(err);

//       console.log(
//         "Page created! Check out index.html in this directory to see it!"
//       );
//     });
//   });

/////ronny's example of if I wanted to pass 2 items. deconstruct frist then pass

// promptUser().then((answers) => {
//   const { property_one, property_two } = answers;

//   const content = generateMarkdown({ property_one, property_two });

//   writeToFile("filename-here.md", content);
// });

///// map is like for each but makes a new array
// promptUser()
//   //   .then(promptProject)
//   .then((license) => {
//     return generateMarkdown(license);
//   })
//   .then((pageReadme) => {
//     return writeFile(pageReadme);
//   })
//   .then((writeFileResponse) => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then((copyFileResponse) => {
//     console.log(copyFileResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
