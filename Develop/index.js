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
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
// const generateREADME = ({ name, location, github, linkedin }) =>
//   `Hi! My name is ${name}</h1>
//     I am from ${location}.</p>
//       <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
//       <ul class="list-group">
//         <li class="list-group-item">My GitHub username is ${github}</li>
//         <li class="list-group-item">LinkedIn: ${linkedin}</li>`;
// TODO: Create a function to initialize app
//function init() {}
    // .then((answers) => {
    // const htmlPageContent = generateHTML(answers);
// Function call to initialize app
//init();
// fs.writeFile('README.md', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
//   });