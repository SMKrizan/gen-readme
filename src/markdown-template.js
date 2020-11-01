const listLanguages = selectedLanguages => {
    const langArray = selectedLanguages.map((language) => {
        '<br>* [${' + language + '}](#${' + language + '})'
    });
        languagesList = langArray.join(' ');
        console.log(languagesList)
        return `
            ${languagesList}
        `;
}

const displayLicense = selectedLicense => {
    // const license = selectedLicense;
    switch (selectedLicense) {
        case 'CC':
            return `the [Creative Commons Attribution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/)`;
        case 'GPL-3.0-or-later':
            return `the [GNU General Public License v3.0](https://opensource.org/licenses/GPL-3.0)`;
        case 'MPL-2.0':
            return `the [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)`;
        case 'MIT':
            return `the [MIT](https://opensource.org/licenses/MIT) license.`;
        case 'Unlicense':
            return `[The Unlicense](https://unlicense.org/).`;
        case 'BSL-1.0':
            return `the [Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt).`;
    };
}


// function to generate markdown for README
module.exports = templateData => {
    console.log(templateData);
  
    const { title, description, languages, ...data} = templateData;
    
    return `
    # ${title}
    ![license badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
    
    ## Description
    ${description}

    ### Languages used:
    ${listLanguages(languages)}

    ## Table of Contents:
    - [Instructions for Installation](#instructions-for-installation)
    - [Usage](#usage)
    - [Contribution Guidelines](#contribution-guidelines)
    - [License](#license)
    - [Tests](#tests)
    - [Questions?](#questions?)

    ## <a name="instructions-for-installation">Instructions for Installation</a>:
    ${data.installation}

    ## <a name="usage">Usage</a>:
    ${data.usage}
    
    ## <a name="contribution-guidelines">Contribution Guidelines</a>:
    ${data.contributing}

    ## <a name="license">License</a>:
    Licensed under ${displayLicense(data.license)}.

    ## <a name="tests">Tests</a>:
    ${data.tests}

    ## <a name="questions?">Questions?</a>
    ${data.contact}
    ${data.name}
    ${data.email}
    [GitHub](#https://github.com/${data.github})

    `
};
  

// generate h2 instructions/examples for use with screenshot
// ```md
// ![alt text](assets/images/screenshot.png)
// ```



