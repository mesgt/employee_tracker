var mysql = require('mysql');
const inquirer = require('inquirer');
// const { index } = require('./public/assets/js/index.js')

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employeeTracker_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    menu();
});

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
                        displayDept();
                    }
                    else if(response.choiceDept === "add a department") {
                        console.log("add dept")
                        addDept()
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
                        displayRole();
                    }
                    else if(response.choiceRole === "add an employee role") {
                        console.log("add roles")
                        addRole();
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

function addDept() {
    inquirer
        .prompt({
            type: 'input',
            message: 'Please enter new Department name:',
            name: 'newDept'
        }).then(function(response) {
            connection.query(`INSERT INTO department (name) VALUES ('${response.newDept}');`, function(err, res) {
                if (err) throw err;
                else {console.log(res.affectedRows);
                displayDept();
                }
            })
        })
    };

function displayDept() {
    connection.query('SELECT * FROM department', function (err, res) {
        if (err) throw err;
        console.table(res);
    })
};

function addRole() {
    inquirer
        .prompt([
            {
            type: 'input',
            message: 'Please enter new role TITLE:',
            name: 'newRoleTitle'
        },
        {
            type: 'input',
            message: 'Please enter new role SALARY:',
            name: 'newRoleSalary'
        },
        {
            type: 'input', //make this a list of current departments.
            message: 'Please enter new role DEPARTMENT ID:',
            name: 'newRoleDept'
        }
        ]).then(function(response) {
            connection.query(`INSERT INTO roleTb (title, salary, department_id) 
            VALUES ('${response.newRoleTitle}', ${response.newRoleSalary}, '${response.newRoleDept}');`, function(err, res) {
                if (err) throw err;
                console.log(res.affectedRows);
                displayRole();
            })
        })
    };

function displayRole() {
    connection.query('SELECT * FROM roleTb', function (err, res) {
        if (err) throw err;
        console.table(res);
    })
};

// const editRole = () => {};

// const addEmployee = () => {};

// const viewEmployee = () => {};






