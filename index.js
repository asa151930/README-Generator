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
        message: 'Enter your Git-Hub Username:',
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

    # Table of Contents
    
    # [Description] (#description)
    # [Installation](#installation)
    # [Usage](#Usage)
    # [Contribution] (#contribution)
    # [Test] (#test)
    # [License] (#license)

    # Installation
    ${installation}
    ## Usage
    ${usage}
    ## Contribution
    ${contributor}
    ## Description
    ${description}
    ## Test
    ${test}
    ## License
    ${license}
    
    # Contact

    # GitHub: ${username}
    # Email: ${email}`;

        newFile(title, readme_style);

    });

// function to write the readme file
function newFile(filename, data) {
    fs.writeFile(`${filename.toLowerCase().split(' ').join('')}.md`, data,
        (err) => err ? console.log(err) :
            console.log('\n Success!')


    )
};

