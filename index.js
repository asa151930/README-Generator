
// add inquirer to ask questions 
const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of the project: ',
        },

        {
            type: 'input',
            name: 'description',
            message: 'What does the project do? Enter a brief description: ', 
        }, 

        {
            type: 'input',
            name: 'installation',
            message: 'In a few words, describe the installation process: ',
        },

        {
            type: 'input',
            name: 'usage',
            message: 'What is the project used for: ',
        },

        {
            type: 'input',
            name: 'contributor',
            message: 'Name the contributors if any: ',
        },

        {
            type: 'input',
            name: 'test',
            message: 'Any test instructions available? ',
        },

        {
            type: 'list',
            name: 'license',
            message: 'Enter the type of licenses used using the given options: ',
            choices: [
                
            ]
        }
    ]);
