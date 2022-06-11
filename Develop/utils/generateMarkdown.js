// TODO: Create a function that returns a license badge based on which license is passed in
// license choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
// If there is no license, return an empty string

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
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseType) {
  //take you to license section in TOC //- [License](#license)
  if (licenseType === "none") {
    return "";
  } else if (!licenseType) {
    return "";
  } else {
    return `- [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseType) {
  if (licenseType === "none") {
    return "";
  } else if (!licenseType) {
    return "";
  } else {
    return `##License<br  />  <br  /> info: a notice that explains which license the application is covered under`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data);
  let licenseType = data.license;
  return `# ${data.title}
${renderLicenseBadge(licenseType)}<br  />
Authored by ${data.authors}<br  />
<br  />
##Table of Contents:
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  ${renderLicenseLink(licenseType)}
  - [Contribution](#Contribution)
  - [Test](#Test)
  - [Questions](#Questions)

<br  />
##Description<br  />
  ${data.description}<br  />
  <br  />
##Installation<br  />
  ${data.installation}<br  />
  <br  />
##Usage<br  />
${data.usage}<br  />
<br  />
##Contribution<br  />
  ${data.contribute}<br  />
  <br  />
##Tests<br  />
  ${data.test}<br  />
  <br  />
##Questions<br  />
If you have any with additional questions reach out to me at:<br  />
  [${data.email}}](${data.email})  <br  /> 
  [github.com/${data.github}}](https://github.com/${data.github})<br  />
  <br  />
  ${renderLicenseSection(licenseType)}<br  />

`;
}

module.exports = generateMarkdown;

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
