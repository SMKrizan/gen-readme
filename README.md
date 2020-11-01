# Professional README Generator

[How to create a Professional README](./readme-guide.md)

## DESCRIPTION
A command-line application that prompts the user for input about their GitHub repository project and generates a high-quality, professional README.md file. The generated readme will display the project title and sections entitled: Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

## TABLE of CONTENTS
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## INSTALLATION INSTRUCTIONS
1. Install [Node.js](https://nodejs.org/en/)
2. Clone this repository to your computer
3. Within your terminal, navigate to the file location of the cloned repository
4. Enter "node index.js" into the terminal.

## USAGE
Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

```md
![alt text](assets/images/screenshot.png)
```


## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.


## License

The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)


---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


## Features

If your project has a lot of features, consider adding a heading called "Features" and listing them there.


## Contributing

If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them.



Grading Requirements
This Challenge is graded based on the following criteria:

Deliverables: 20%
A sample README generated using the application must be submitted.

Your GitHub repository containing your application code.

Walkthrough Video: 27%
A walkthrough video that demonstrates the functionality of the README generator must be submitted and a link to the video should be included in your README file.

The walkthrough video must demonstrate how a user would invoke the application from the command line.

The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.

Technical Acceptance Criteria: 40%
Satisfies all of the above acceptance criteria plus the following:

Uses the Inquirer package (Links to an external site.).
Repository Quality: 13%
Repository has a unique name.

Repository follows best practices for file structure and naming conventions.

Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

Repository contains multiple descriptive commit messages.

Repository contains a high-quality README with description and a link to walkthrough video.

How to Submit the Challenge
You are required to submit the following for review:

A walkthrough video demonstrating the functionality of the application.

A sample README.md file for a project repository generated using your application.

The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.