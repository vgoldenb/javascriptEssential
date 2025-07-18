const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    //... More employee records can be added here
  ];

function displayResult (output) {
    document.getElementById('employeesDetails').innerHTML = output;
}

   // Function to display all employees
function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    displayResult (totalEmployees);
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    displayResult(`Total Salaries: $${totalSalaries}`);
  }

  function displayDeptEmployees() {
    const deptName = document.getElementById('deptName').value;
    if (deptName == "All") {
        displayEmployees();
    } else {
        const hrEmployees = employees.filter(employee => employee.department === deptName);
        const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
        displayResult (hrEmployeesDisplay);
    }
}

function findEmployeeById() {
    const employeeId = Number(document.getElementById('empId').value);
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    let output;
    if (foundEmployee) {
        output =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
        output = 'no employee has been found with this ID';
     }
     displayResult(output);
 }