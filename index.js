const fs = require('fs');
const filePath = require('path');
const inquirer = require('inquirer');
//importing our functionality from createReadMeFile.js file:
const createReadMeFile = require('./createReadMeFile');
//this is an example of email validation finction:
const validateEmail = (email)  =>
{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

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
      //note for validation you can use either npm packages e.g. joi or your own finction (this is optional)
      {
        type: "input",
        name: "email",
        message: "Please type your email?",
        default: "thisIsMyEmail@myOwnDomain.com",
        validate: validateEmail
      },
      {
        type: "input",
        name: "URL",
        message: "the URL to your project?"
      },
      {
        type: "input",
        name: "title",
        message: "Please type your project's name?",
        default: "Good README.md generator"
      },
       {
        type: "input",
        name: "description",
        message: "Please write a short description of your project",
        default: 'this is an app I developed so I can automate read me file development'
      },
      {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
      },
      {
        type: "list",
        name: "color",
        message: "What's your favorite color?",
        choices: ["red", "green", "purple", "black", "magenta"]
      },
      {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i"
      },
      {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
      },
      {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
        default: "It is an open project and everyone can contribute - please send and email requesting to be added as a contributor!"
      },
      {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
      },

]

function makeReadMe(name, data) {
    return fs.writeFileSync(filePath.join(process.cwd(), name), data);
}
//initial finction that launches inquirer questions then getting responses and passes them over to makeReadMe function which in terms launches our mardown logis from createReadMeFile.js
function letsGo() {
    inquirer.prompt(input).then(responses => makeReadMe(`${responses.fName}.md`, createReadMeFile(responses))
    )
}
letsGo()
