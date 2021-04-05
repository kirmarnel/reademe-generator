const inquirer = require('inquirer')
const fs = require('fs')

inquirer
.prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?',
      },
    {
        type: 'input',
        name: 'installation',
        message: 'What is needed to install your application?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is your application used for?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license are you using?',
        choices: ['MIT', 'IBM', 'Mozilla', 'Eclipse'],
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What tests are needed are needed for this application?',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'How should the user contact you if they have questions?',
      },
])



.then((data) => {
   

fs.writeFile('README.md', 
`# ${data.title}
![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
## Description 
${data.description}
## Table of Contents 
    
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
    
## Installation Instructions <a id="installation"></a>
${data.installation}
## Usage <a id="usage"></a>
${data.usage}
## License <a id="license"></a>
This project is licensed with ${data.license} license
## Contributing <a id="contributing"></a>
${data.contributors}
## Tests <a id="tests"></a>
${data.tests}
## Questions <a id="questions"></a>
 ${data.tests}`
 ,(error) => {
        if (error) {
            console.log(error)
        }
    });
});

