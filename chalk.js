import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([{
        type: "number",
        name: "age",
        message: "enter your age:"
    }]);
console.log(chalk.yellow("inshallah , in " + (50 - answer.age) + " years you will be 60 years old"));
