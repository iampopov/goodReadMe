const fs = require('fs');
const filePath = require('path');
const inquirer = require('inquirer');
const createReadMeFile = require('./createReadMeFile');

/* these  are some basic iquirer question. Watch the format! Here is a good article
on asking questions with inquirer: https://github.com/sameeri/Code-Inquirer/wiki/Asking-questions-away-with-Inquirer!*/
const input = [
    {
        type: "input",
        name: "GH",
        message: "Please type your GitHub username?"
      },
      {
        type: "input",
        name: "fName",
        message: "Please provide the name for a .md file?"
      },
    //   {
    //     type: "input",
    //     name: "email",
    //     message: "Please type your email?"
    //   },
    //   {
    //     type: "input",
    //     name: "URL",
    //     message: "the URL to your project?"
    //   },
    //   {
    //     type: "input",
    //     name: "title",
    //     message: "Please type your project's name?"
    //   },
    //   {
    //     type: "input",
    //     name: "description",
    //     message: "Please write a short description of your project"
    //   },
    //   {
    //     type: "list",
    //     name: "license",
    //     message: "What kind of license should your project have?",
    //     choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    //   },
    //   {
    //     type: "input",
    //     name: "installation",
    //     message: "What command should be run to install dependencies?",
    //     default: "npm i"
    //   },
    //   {
    //     type: "input",
    //     name: "test",
    //     message: "What command should be run to run tests?",
    //     default: "npm test"
    //   },
    //   {
    //     type: "input",
    //     name: "usage",
    //     message: "What does the user need to know about using the repo?",
    //     default: "It is an open project and everyone can contribute - please send and email requesting to be added as a contributor!"
    //   },
    //   {
    //     type: "input",
    //     name: "contributing",
    //     message: "What does the user need to know about contributing to the repo?",
    //   },

]

function makeReadMe(name, data) {
    return fs.writeFileSync(filePath.join(process.cwd(), name), data);
}

function letsGo() {
    inquirer.prompt(input).then(responses => makeReadMe(`${responses.fName}.md`, createReadMeFile(responses))
    )
}
letsGo()
