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
            message: 'Enter your project description here (Required):'
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
            type: 'confirm',
            name: 'tocConfirm',
            message: 'Would you like to include a table of contents?',
            default: true
        },
        {
            type: 'checkbox',
            name: 'toc',
            message: 'Which sections would you like to include within your table of contents?',
            choices: ['Installation', 'Instructions', 'License', 'Credits', 'Contribution Guidelines', 'Tests', 'Questions'],
            when: ({ tocConfirm }) => {
                if (tocConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'With what languages did you build this project? (Check all that apply)',
            choices: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Node', 'ES6']
        },
        {
            type: 'confirm',
            name: 'licenseConfirm',
            message: 'Would you like to license your project?',
            default: true
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please select one of the following open source licenses:',
            choices: ['MIT', 'GNU', 'Mozilla', 'CC', 'Unlicense', 'Boost', 'Apache'],
            when: ({ licenseConfirm }) => {
                if (licenseConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
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
