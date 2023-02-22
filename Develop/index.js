// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
//const questions = [];
const generateREADME = ({title, description, installation, usage, contribution, test }) =>
  `# ${title}
  
  ## ${description}

  ## Table of contents: 
  
  ## ${installation}

  ## ${usage}

  ## ${contribution}
  
  ## ${test}
  
  ---

  © 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
  `;

inquirer
  .prompt([   
    {
      type: 'input',
      name: 'title',
      message: 'Enter Ttitle: ',
    }, 
    {
      type: 'input',
      name: 'description',
      message: 'Enter description: ',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation steps:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage information:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Contribution guidelines:',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Test instructions:',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateREADME(answers);

    fs.writeFile('README.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });