const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
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
    message: "Enter installation instructions:",
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
      "Apache",
      "GPLv2",
      "GPLv3",
      "BSD 2-clause",
      "BSD 3-clause",
      "LGPLv3",
      "AGPLv3",
      "Unlicense",
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

function writeToFile(filePath, data) {
  fs.writeFile(filePath, generateMarkdown(data), (err) => {
    if (err) throw err;
    console.log("File saved successfully.");
  });
}

function startInquirer() {
  inquirer
    .prompt(requests)
    .then((data) => {
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
function init() {
  startInquirer();
}

init();
