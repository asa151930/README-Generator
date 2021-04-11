// added inquirer to ask questions 
const inquirer = require('inquirer');

// function to write the readme file
const fs = require('fs');

// added for user to answer the questions to generate the Readme 
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the project: ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What does the project do?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'In a few words, describe the installation process:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the project used for:',
    },
    {
        type: 'input',
        name: 'contributor',
        message: 'Name the contributors if any:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Any test instructions available?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Enter the type of license used from the given choices:',
        choices: ['Apache', 'Boost', 'BSD', 'GNU', 'IBM', 'MIT', 'ISC']
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub Username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your Email Address:',
    }
])
    .then(({
        title,
        description,
        installation,
        usage,
        contributor,
        test,
        license,
        username,
        email
    }) => {
        const readme_style = `# ${title} <br>

<img src="https://img.shields.io/badge/License-${license}-red.svg">
<br></br>

<h2>Description</h2> 
When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. A command-line application will allow for quick and easy generation of a project README to get started quickly.
 This will allow a project creator to spend more time working on finishing the project and less time creating a good README.
<p>${description}</p>
<br>

<h2>Table of Contents</h2>
  <ul> 
   <li><a href="#Installation">Installation</a></li> 
   <li><a href="#Usage">Usage</a></li>   
   <li><a href="#License">License</a></li>   
   <li><a href="#Contributor">Contributor</a></li>   
   <li><a href="#Tests">Tests</a></li>   
   <li><a href="#Questions">Questions</a></li>                         
  </ul> <br>

  <h2 id="Installation">Installation</h2>  
  To generate your own README, first run npm install in order to install the following npm package dependencies as specified in the package.json:
  - inquirer that will prompt you for your inputs from the command line
  - The application itself can be invoked with node index.js.     
  <p>${installation}</p>
 
  <h2 id="Usage">Usage</h2>
  <p> When you run node index.js, the application uses the inquirer package to prompt you in the command line with a series of questions about your GitHub and about your project. </p>
  How-to-video: https://github.com/asa151930/README-Generator/blob/main/readme_generator_video/readme_generator.mp4 <br></br>
  <p>${usage}</p>

  <h2 id="License">License</h2>
  <p>The license used for the project is <a href="./README.md">${license}</a> license.</p>
  
  <h2 id="Contributor">Contributor</h2>
  <p> Feel free to fork. </p>
  <p>${contributor}</p>

  <h2 id="Tests">Tests</h2>
  <p>${test}</p>
  
  <h2 id="Questions">Questions?</h2> 
  <p>If you have any questions, please reach out to the information provided below. </p> <br>
  
  GitHub: @${username} <br>
  Email: ${email}`

        newFile(title, readme_style);

    });

// function to write the readme file
function newFile(filename, data) {
    fs.writeFile(`${filename.toLowerCase().split(' ').join('')}.md`, data,
        (err) => err ? console.log(err) :
            console.log('\n Success!')
    )
};





































































