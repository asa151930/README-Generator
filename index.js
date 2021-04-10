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

<img src="(https://img.shields.io/badge/License-${license}-red.svg)](https://opensource.org/licenses/${license})"></img>
<br></br>

<h2>Description</h2> 
When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. A command-line application will allow for quick and easy generation of a project README to get started quickly.
 This will allow a project creator to spend more time working on finishing the project and less time creating a good README.
<p>${description}</p>
<br></br>

<h2>Table of Contents</h2>
  <ul> 
   <li><a href="#Installation">Installation</a></li> 
   <li><a href="#Usage">Usage</a></li>   
   <li><a href="#License">License</a></li>   
   <li><a href="#Contributor">Contributor</a></li>   
   <li><a href="#Tests">Tests</a></li>   
   <li><a href="#Contact">Contact</a></li>                         
  </ul>

  <h2 id="Installation">Installation</h2>  
  GIVEN a command-line application that accepts user input 
  WHEN I am prompted for information about my application repository, 
  THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions. 
  WHEN I enter my project title, THEN this is displayed as the title of the README. 
  WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions, 
  THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests. 
  WHEN I choose a license for my application from a list of options, THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under. 
  WHEN I enter my GitHub username, THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile. 
  WHEN I enter my email address, THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions. 
  WHEN I click on the links in the Table of Contents, THEN I am taken to the corresponding section of the README.       

  <p>${installation}</p>
  <h2 id="Usage">Usage</h2>
  <p>${usage}</p> 
  <h2 id="License">License</h2>
  <p>The license used for the project is <a href="./README.md">${license}</a> license.</p>
  <h2 id="Contributor">Contributor</h2>
  <p>${contributor}</p>
  <h2 id="Tests">Tests</h2>
  <p>${test}</p>
  <h2 id="Contact">Contact</h2> 
  <p>If you have any questions, please contact me with the information provided below. </p> <br>
  GitHub: @${username} <br>
  Email: ${email}`; 

        newFile(title, readme_style);

    });

// function to write the readme file
function newFile(filename, data) {
    fs.writeFile(`${filename.toLowerCase().split(' ').join('')}.md`, data,
        (err) => err ? console.log(err) :
            console.log('\n Success!')
    )
};





































































