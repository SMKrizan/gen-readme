const inquirer = require('inquirer');
const genPage = require('./src/markdown-template.js');
const writeFile = require('./utils/generateMarkdown.js');

// gather repo info through array of questions to user
const questions = () => {
    console.log(`
====================================================
Answer these questions to generate a new ReadMe file
====================================================
`)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter your name."
        },
        {
            type: 'input',
            name: 'email',
            message: "Please provide your contact email."
        },
        {
            type: 'input',
            name: 'github'
            message: 'Please enter your GitHub username'
        }
        {
            type: 'input',
            name: 'title',
            message: "What is your project title? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project title.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter your project description here (Required):',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: "Please enter any installation instructions."
        },
        {
            type: 'input',
            name: 'usage',
            message: "Please enter any usage information."
        },
        {
            type: 'input'
            name: 'image-link'
            message: "Please provide the link to a screenshot of your project"
        }
        {
            type: 'checkbox',
            name: 'languages',
            message: 'With what languages did you build this project? (Check all that apply)',
            choices: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Node', 'ES6']
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please select one of the following open source licenses:',
            choices: ['MIT', 'GNU', 'Mozilla', 'CC', 'Unlicense', 'Boost', 'Apache'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: "Please enter any contributors to this project (your contribution will be included based on information already provided)."
        },
        {
            type: 'input',
            name: 'tests',
            message: "Please enter any tests you would like to include."
        },
    ])
    .then(answers => {
        return answers;
    });
};

// 'questions' function output...
questions().then(answers => {
    console.log(answers)
    return generateMarkdown(answers);
})

// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
