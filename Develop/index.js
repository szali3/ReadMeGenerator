// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const {generateMarkdown,renderLicenseSection,renderLicenseLink, renderLicenseBadge} = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = ["Enter project title",
                    "Enter project description",
                    "Enter installation instructions",
                    "Enter usage information",
                    "Enter contribution guidelines",
                    "Enter test instructions",
                    "Enter GitHub username",
                    "Enter email address",
                    "Enter License"
                ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

function promptUser (questions) {
    inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: questions[0]
        },
        {
          type: 'input',
          name: 'projDescription',
          message: questions[1]
        },
        {
          type: 'input',
          name: 'projInstall',
          message: questions[2]
        },
        {
          type: 'input',
          name: 'projUsage',
          message: questions[3]
        },
        {
          type: 'input',
          name: 'projContribute',
          message: questions[4]
        },
        {
          type: 'input',
          name: 'projInstruction',
          message: questions[5]
        },
        {
          type: 'input',
          name: 'projGithub',
          message:  questions[6]
        },
        {
          type: 'input',
          name: 'projEmail',
          message:  questions[7]
        },
        {
          type: 'checkbox',
          name: 'license',
          message:  questions[8],
          choices: ['Apache 2.0', 
            'GNU General Public V3.0', 
            'MIT',
            'BSD 3-Clause',
            'Creative Commons Zero', 
            'Eclipse Public License', 
            'GNU Lesser General Public License', 
            'Mozilla Public License', 
            'The Unlicense']
        }
      ]).then(function(data){
            generateMarkdown(data)
      }).catch(err => console.log(err));
}

// TODO: Create a function to initialize app
function init() {
    promptUser(questions);
}

// Function call to initialize app
init();
