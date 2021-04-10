
// add inquirer to ask questions 
const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your Project?',
            name: '',
            
        },
        {
            
        }
    ]);
