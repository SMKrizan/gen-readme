const inquirer = require('inquirer');
// const fs = require('fs');
// array of questions for user
// const appRepoData = [
    // WHEN I enter my project title THEN this is displayed as the title of the README
    // Title: project/repo title
    // Description: description, 
    // Table-of-Contents: contents,
    // Installation: installation instructions, 
    // Usage: usage information, 
    // License: open source/ CCommons (badge added near top of README w notice explaining which license project is covered under)
    // Contributing: contribution guidelines, and 
    // Tests: test instructions
    // Questions: questions re...?
    
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter your name."
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
            name: 'contact',
            message: "Please provide your contact email."
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter your project description here:'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'With what languages did you build this project? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node', 'Other']
        },
        {
            type: 'confirm',
            name: 'licenseConfirm',
            message: 'Is your project licensed?',
            default: false
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please indicate which license will cover your project.',
            choices: ['FSF', 'GNU', 'OSI', 'FOSS', 'CC', 'Other'],
            when: ({ licenseConfirm }) => {
                if (licenseConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};
questions().then(answers => console.log(answers));

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
