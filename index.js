//console.log("Hello node.js");

// create node modules

// add inquirer to ask questions 
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: '',
            name: '',
            message: 'What is the title of your Project?',
        },
        {
            type: '',
            message: '',
            name: '',
            message: 'What is your name?',
        }
    ])
