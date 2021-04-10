

// create node modules

// add inquirer to ask questions 
const inquirer = require('inquirer');
const fs = require('fs');

const readme_style = require("./readme_style");

inquirer
    .prompt([
        {
            type: '',
            message: 'What is the title of your Project?',
            name: '',
            
        },
        {
            
        }
    ]);
