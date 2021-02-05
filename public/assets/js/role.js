const Department = require('./department');

class Role extends Department {
    constructor(id, title, salary, department_id) {
        super(id) = department_id;
        this.id = id;
        this.title = title;
        this.salary = salary;
    }
};
module.exports = Role;