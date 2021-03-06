// Returns a license badge according to the license input
function renderLicenseBadge(license) {
  const licenseBadges = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    Apache:
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]",
    GPLv2:
      "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]",
    GPLv3:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
    "BSD 2-clause":
      "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)]",
    "BSD 3-clause":
      "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]",
    LGPLv3:
      "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)]",
    AGPLv3:
      "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]",
    Unlicense:
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]",
  };
  return license in licenseBadges ? licenseBadges[license] : "";
}
// Returns a license link according to the license input
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: "https://opensource.org/licenses/MIT",
    Apache: "https://opensource.org/licenses/Apache-2.0",
    GPLv2: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
    GPLv3: "https://www.gnu.org/licenses/gpl-3.0",
    "BSD 2-clause": "https://opensource.org/licenses/BSD-2-Clause",
    "BSD 3-clause": "https://opensource.org/licenses/BSD-3-Clause",
    LGPLv3: "https://www.gnu.org/licenses/lgpl-3.0",
    AGPLv3: "https://www.gnu.org/licenses/agpl-3.0",
    Unlicense: "http://unlicense.org/",
  };
  return license in licenseLinks ? licenseLinks[license] : "";
}

// Returns the badge with anchored link
function renderLicenseSection(license) {
  return license
    ? `${renderLicenseBadge(license)}(${renderLicenseLink(license)})`
    : "";
}

function generateMarkdown(data) {
  const license = data.license;
  const licenseInfo = renderLicenseSection(license);
  // Template literal only works smoothly with no identation for each line
  return `
<h1>${data.project_title}</h1>

${licenseInfo}

<h2>Description</h2>
${data.project_descr}
<h2>Table of Contents</h2>
<ul>
  <li><a href="#install">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribution">Contributing</a></li>
  <li><a href="#test">Tests</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#contact">Questions</a></li>
</ul>
<h2 id="install">Installation</h2>
${data.installation}
<h2 id="usage">Usage</h2>
${data.usage_info}
<h2 id="contribution">Contributing</h2>
${data.guidelines}
<h2 id="test">Tests</h2>
${data.test}
<h2 id="license">License</h2>

[${license}](${renderLicenseLink(license)})

<h2 id="contact">Questions</h2>

Contact me if you have any questions:<br>
My guthub link: <a href="https://www.github.com/${
    data.username
  }">https://www.github.com/${data.username}</a><br>
My email: ${data.email}
`;
}

module.exports = generateMarkdown;
