// function to generate markdown for README
module.exports = templateData => {
    console.log(templateData);
  
    const { title, description, ...data} = templateData;
    
    return `
    #${title}

    ##Description
    ${description}

    ##Table of Contents:
        **[Installation](#installation)
        **[Usage](#usage)
        **[License](#license)
        **[Contributing](#contributing)
        **[Tests](#tests)
        **[Questions](#questions)

    ##Installation
    ${data.installation}

    ##Usage
    ${data.usage}

    ##License
    ${data.license}

    ##Contributing
    ${data.contributing}

    ##Tests
    ${data.tests}

    ##Questions?
    If you have questions regarding this repo or opportunities to contribute please contact me:
    ${data.name}
    [github.com/${data.github}](#https://github.com/${data.github})
    ${data.email}

    `
};
  
// generate h2 step-by-step instructions for how to get the development environment running

// generate h2 instructions/examples for use with screenshot
```md
![alt text](assets/images/screenshot.png)
```

// generate h2 'Credits' to include collaborators with links to GItHub profiles, any 3rd party assets including links to their primary web presence, and any tutorials used including links

// generate h2 'license' 

// MINIMUM REQS ABOVE
// generate h2 badges section (badge added near top of README w notice explaining which license project is covered under)

// generate h2 list of features if project has a lot of features

// generate h2 listing of ways in which others can contribute to this project

// generate h2 tests for the application and examples for how to run them



