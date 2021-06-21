// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license =='Apache 2.0' ){
      return ` ![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  } else if (license == 'GNU General Public V3.0') {
      return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (license == 'MIT') {
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license =='BSD 3-Clause') {
      return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`
  } else if (license =='Creative Commons Zero') {
      return `![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)`
  } else if (license =='Eclipse Public License') {
      return  `![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)`
  } else if (license =='GNU Lesser General Public License') {
      return `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`
  } else if (license =='Mozilla Public License') {
      return  `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
  }else if (license =='The Unlicense') {
      return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
  } else {
      return "";
  }

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license =='Apache 2.0'){
      return `[${license}]((https://opensource.org/licenses/Apache-2.0))`
  } else if (license == 'GNU General Public V3.0') {
      return `[${license}]((https://www.gnu.org/licenses/gpl-3.0.en.html)`
  } else if (license == 'MIT') {
      return `[${license}]((https://opensource.org/licenses/MIT))`
  } else if (license == 'BSD 3-Clause') {
      return `[${license}]((https://opensource.org/licenses/BSD-3-Clause))`
  } else if (license == 'Creative Commons Zero') {
      return `[${license}]((http://creativecommons.org/publicdomain/zero/1.0/))`
  } else if (license == 'Eclipse Public License') {
      return `[${license}]((https://opensource.org/licenses/EPL-1.0)`
  } else if (license == 'GNU Lesser General Public License') {
      return `[${license}]((https://www.gnu.org/licenses/lgpl-3.0.en.html))`
  } else if (license == 'Mozilla Public License') {
      return `[${license}]((https://opensource.org/licenses/MPL-2.0))`
  } else if (license == 'The Unlicense') {
      return `[${license}]((http://unlicense.org/))`
  } else {
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
## License

${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

return `
# ${data.title} ${renderLicenseBadge(data.license)}

## Description

${data.projDescription}

## Table of contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Question](#question)

## Installation

${data.projInstall}

## Usage

${data.projUsage}

## Contributing

${data.projContribute}

## Tests

${data.projTest}

${renderLicenseSection(data.license)}

## Question

Github: [${data.projGithub}](https://github.com/${data.projGithub}) </br>
Reach me with additional question <${data.projEmail}>
    `
}

module.exports = generateMarkdown;
