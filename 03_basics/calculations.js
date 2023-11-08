const inquirer = require('inquirer');
const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?",
  },
];
inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers.name}!`);
});