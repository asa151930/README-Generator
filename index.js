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
        const readme_style = `# ${title}
[![License: ${license}]
<br></br>

<p>Description</p> 
${description}
<br></br>

<h2>Table of Contents</h2>
  <ul> 
   <li><a href="#Installation">Installation</a></li> 
   <li><a href="#Usage">Usage</a></li>   
   <li><a href="#License">License</a></li>   
   <li><a href="#Contributor">Contributor</a></li>   
   <li><a href="#Tests">Tests</a></li>   
   <li><a href="#Questions">Questions</a></li>                         
  </ul>

  <h2 id="Installation">Installation</h2>                         
  <p>${installation}</p>
  <h2 id="Usage">Usage</h2>
  <p>${usage}</p> 
  <h2 id="License">License</h2>
  <p>The license used for the project is <a href="./README.md">${license} license. </a></p>
  <h2 id="Contributor">Contributor</h2>
  <p>${contributor}</p>
  <h2 id="Tests">Tests</h2>
  <h3>To test this project, follow these directions:</h3>
  <p>${test}</p>
  <h2 id="Questions">Questions</h2>
  <p style="strong">If you have any questions, contact ${email} directly.</p>`

        newFile(title, readme_style);

    });

// function to write the readme file
function newFile(filename, data) {
    fs.writeFile(`${filename.toLowerCase().split(' ').join('')}.md`, data,
        (err) => err ? console.log(err) :
            console.log('\n Success!')
    )
};





































































