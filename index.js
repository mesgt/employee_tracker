const inquirer = require('inquirer');
// const Department = require('./public/assets/js/department');
// const Role = require('./public/assets/js/role');
// const Employee = require('./public/assets/js/employee');

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
                        console.log("see dept")
                        //VIEW department table from sql.
                    }
                    else if(response.choiceDept === "add a department") {
                        console.log("add dept")
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
                    if(response.choiceRole === "view employee roles") {
                        console.log("see roles")
                        //VIEW employee role table from sql.
                    }
                    else if(response.choiceRole === "add an employee role") {
                        console.log("add roles")
                        //run function to ADD data to employee role table in sql.
                    }
                    else if(response.choiceRole === "edit an employee role"){
                        console.log("edit roles")
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
                    if(response.choiceEmployee === "view all employees") {
                        console.log("see employees")
                        //VIEW employee table from sql.
                    }
                    else if(response.choiceEmployee === "add an employee") {
                        console.log("add employees")
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

// const viewDept = () => {};

// const addDept = () => {};

// const viewRole = () =>{};

// const addRole = () => {};

// const editRole = () => {};

// const viewEmployee = () => {};

// const addEmployee = () => {};

menu();