// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("utilsgenerateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message:
      "Let's create a ReadME for your project! What is the name of this project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a brief description of your project.",
    name: "description",
  },
  {
    type: "input",
    message:
      "If installation is required to utilize this project, please provide install steps here",
    name: "installation",
  },
  {
    type: "input",
    message:
      "Please provide instructions or examples of how a User should use your project.",
    name: "usage",
  },
  {
    type: "input",
    message: "Who has contributed to this projects creation?",
    name: "contributing",
  },
  {
    type: "input",
    message:
      "If any tests were written for your project, please list them here and provide instructions on how to run them",
    name: "tests",
  },
  {
    type: "input",
    message: "What coding languages were used in your project?",
    name: "languages",
  },
  {
    type: 'input',
    message: 'Are there any FAQs for your project? If so, please include them with answers for each included',
    name: 'questions',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
