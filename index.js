const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const requests = [
  {
    type: "input",
    name: "project_title",
    message: "Enter your project title:",
  },
  {
    type: "input",
    name: "project_descr",
    message: "Enter your project description:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installtion instructions",
  },
  {
    type: "input",
    name: "usage_info",
    message: "Enter usage information:",
  },
  {
    type: "list",
    name: "license",
    message: "Enter your license:",
    choices: [
      "MIT",
      "GPLv2",
      "Apache",
      "GPLv3",
      "BSD 2-clause",
      "BSD 3-clause",
      "LGPLv3",
      "AGPLv3",
      "Unlicense",
      "Other",
    ],
    filer(val) {
      return val.toLowerCase();
    },
  },
  {
    type: "input",
    name: "guidelines",
    message: "Enter the contribution guidelines:",
  },
  {
    type: "input",
    name: "test",
    message: "Enter your test instructions:",
  },
  {
    type: "input",
    name: "username",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

function startInquirer() {
  inquirer
    .prompt(requests)
    .then((data) => {
      console.log(data);
      writeToFile("./readme/README.md", data);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.error(error);
      }
    });
}
// TODO: Create a function to write README file
function writeToFile(filePath, data) {
  fs.writeFile(filePath, generateContent(data), (err) => {
    if (err) throw err;
    console.log("File saved successfully.");
  });
}

function generateContent(data) {
  return `
<style>
  h2, h3 {
    border-bottom: 1px solid #d3d3d3;
  }
</style>
<h2>${data.project_title}</h2>
-->badges here <br>
${data.project_descr}
<h3>Table of Contents</h3>
<ul>
  <li><a href="#install">Installation</a></li>
  <li><a href="#usage">Usage information</a></li>
  <li><a href="#contribution">Contribution guidelines</a></li>
  <li><a href="#test">Test instructions</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
<h3 id="install">Installation</h3>
${data.installation}
<h3 id="usage">Usage Information</h3>
${data.usage_info}
<h3 id="contribution">Contribution guidelines</h3>
${data.guidelines}
<h3 id="test">Test instructions</h3>
${data.test}
<h3 id="license">License</h3>
${data.license}
<h3 id="contact">Contact</h3>
Contact me if you have any questions:<br>
My guthub link: <a href="https://www.github.com/${data.username}">https://www.github.com/${data.username}</a><br>
My email: ${data.email}
`;
}

// TODO: Create a function to initialize app
function init() {
  startInquirer();
}

// Function call to initialize app
init();
