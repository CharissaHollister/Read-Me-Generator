// license choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
// If there is no license, return an empty string
//generate license Badge
function renderLicenseBadge(licenseType) {
  //if none then null return, else this
  if (licenseType === "none") {
    return "";
  } else if (!licenseType) {
    return "";
  } else {
    //add code to make it an image
    return `![License Badge ${licenseType}](https://img.shields.io/badge/license-${licenseType}-blue)`;
  }
}
// generate license link in TOC //- [License](#license)
function renderLicenseLink(licenseType) {
  if (licenseType === "none") {
    return "";
  } else if (!licenseType) {
    return "";
  } else {
    return `- [License](#license)`;
  }
}
// generate license section 
function renderLicenseSection(licenseType) {
  if (licenseType === "none") {
    return "";
  } else if (!licenseType) {
    return "";
  } else {
    return `## License  
    Notice: This application utilizes the license ${licenseType}.
    
    `;
  }
}

function generateMarkdown(data) {
  // console.log(data);
  let licenseType = data.license;
  return `# ${data.title}
${renderLicenseBadge(licenseType)}  
Authored by ${data.authors}  

## Table of Contents:
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  ${renderLicenseLink(licenseType)}
  - [Contribution](#Contribution)
  - [Test](#Test)
  - [Questions](#Questions)


## Description  
  ${data.description}

## Installation  
  ${data.installation}
 
## Usage  
  ${data.usage}

## Contribution  
  ${data.contribute}
 
## Tests  
  ${data.test}
  
## Questions  
If you have any with additional questions reach out to me at:  
  * [${data.email}](${data.email})  
  * [github.com/${data.github}](https://github.com/${data.github})  
  
  ${renderLicenseSection(licenseType)}
`;
}

module.exports = generateMarkdown;

// console.log(generateMarkdown(answers))

////////////Layout and Answer Array set up/////////////

///////// read me file Layout//////////
//Title: Project title  title: "X",
//License Badge displayed
//section: Description  description: "X",
//info: Description
//section: Table of Contents
//<click> move to installation  - [Installation](#installation)
//<click> move to usage
//<click> move to license
//<click> move to contributing
//<click> move to tests
//<click> move to questions
//section:Installation
//info: Installation instructions
//section: Usage
//info: Usage Information
//section: License
//info: a notice that explains which license the application is covered under
//Section: contributing
//info: Contribution guidelines
//section: tests
//info: Test instructions
//section: Questions
//info: GitHub Username
//info: Github link created from username (i.e. https://github.com/CharissaHollister)
//info: email address
//info: instructions on how to reach me with additional questions

// title: "X",
//     description: "X",
//     authors: "X"
//     installation: "X",
//     usage: "X",
//     contribute: "X",
//     test: "X",
//     license: ["X"],
//     github: "X",
//     email: "X",
