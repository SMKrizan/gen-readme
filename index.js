const inquirer = require('inquirer');
const generateMarkdown = require('./src/markdown-template.js');
const { writeFile } = require('./utils/generateMarkdown.js');

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
            name: 'title',
            message: "Project title (required):",
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
            message: 'Project description (required):',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project:');
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
            type: 'input',
            name: 'installation',
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running:"
        },
        {
            type: 'input',
            name: 'usage',
            message: "Provide instructions and examples for use. Include screenshots as needed."
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select one of the following open source licenses:',
            choices: ['MIT', 'GPL', 'MPL', 'CC', 'Unlicense', 'BSL'],
        },
        {
            type: 'input',
            name: 'tests',
            message: "This space may be used to add any tests you would like to include with your application readme along with examples for how to run them."
        },
        {
            type: 'input',
            name: 'contributing',
            message: "Please enter guidance for those interested in making contributions to this application."
        },
        {
            type: 'input',
            name: 'contact',
            message: "Use this space to let others know how to best contact you with any further questions:"
        },
        {
            type: 'input',
            name: 'name',
            message: "Name:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Contact email:"
        },
        {
            type: 'input',
            name: 'github',
            message: 'GitHub username:'
        },
    ])
};

// the 'questions' function is called to then send its resulting data to the page-generating function
questions()
    // this function's output, 'answers', is sent to the 'generateMarkdown' function...
    .then(answers => {
        return generateMarkdown(answers);
    })
    // ...which will return an .md file, 'mdFile', within which the markdown template code will be written.
    .then(mdFile => {
        return writeFile(mdFile);
    })
    .catch(err => {
        console.log(err);
    });