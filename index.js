const inquirer = require('inquirer');
const Department = require('./public/assets/js/department');
const Role = require('./public/assets/js/role');
const Employee = require('./public/assets/js/employee');

function menu() {
    console.log("Welcome to Your Employee Tracker!")
    inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do?",
                choices: ["view/add a department", "view/add/edit an employee role", "view/add an employee", "exit"],
                name: "intro",
            }
        ]).then(response => {
            if (response.intro === "view/add a department") {
                inquirer.prompt([
                    {
                        type: "list",
                        message: "What would you like to do?",
                        choices: ["view departments", "add a department", "exit"],
                        name: "choiceDept",
                    },
                ]).then(response => {
                    if(response.choiceDept === "view departments") {
                        //VIEW department table from sql.
                    }
                    else if(response.choiceDept === "add a departments") {
                        //run function to ADD data to dept table in sql.
                    }
                    else {
                        console.log("You have chosen to exit the app");
                        return
                    }
                })
            }
            else if (response.intro === "view/add/edit an employee role") {
                inquirer.prompt([
                    {
                        type: "list",
                        message: "What would you like to do?",
                        choices: ["view employee roles", "add an employee role", "edit an employee role", "exit"],
                        name: "choiceRole",
                    },
                ]).then(response => {
                    if(response.choiceDept === "view employee roles") {
                        //VIEW employee role table from sql.
                    }
                    else if(response.choiceDept === "add an employee role") {
                        //run function to ADD data to employee role table in sql.
                    }
                    else if(response.choiceDept === "edit an employee role"){
                        //run function to EDIT data to employee role table in sql.
                    }
                    else{
                        console.log("You have chosen to exit the app");
                        return
                    }
                })
            }
            else if (response.intro === "view/add an employee") {
                inquirer.prompt([
                    {
                        type: "list",
                        message: "What would you like to do?",
                        choices: ["view all employees", "add an employee", "exit"],
                        name: "choiceEmployee",
                    },
                ]).then(response => {
                    if(response.choiceDept === "view all employees") {
                        //VIEW employee table from sql.
                    }
                    else if(response.choiceDept === "add an employee") {
                        //run function to ADD data to employee table in sql.
                    }
                    else{
                        console.log("You have chosen to exit the app");
                        return
                    }
                })
            }
            else {
                console.log("You have chosen to exit the app");
                return
            }
        })
};

const addDepartment = () => {
};

const addRole = () => {

}
