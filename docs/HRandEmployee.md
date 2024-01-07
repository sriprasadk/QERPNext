# ERP HR and Payroll Module

This documentation provides an overview of the HR (Human Resources) and Payroll module functionalities within our ERP system.

## Employee Management

### Employees Table

The `employees` table stores information about employees within the organization.

#### Fields:

- `employee_id`: Unique identifier for the employee (Primary Key)
- `full_name`: Full name of the employee
- `email`: Employee's email address
- `phone`: Employee's contact phone number
- `address`: Employee's residential address
- `department`: Department to which the employee belongs
- `position`: Employee's job position or title
- `date_of_birth`: Employee's date of birth
- `hire_date`: Date when the employee was hired
- `termination_date`: Date when the employee was terminated (if applicable)
- `status`: Current status of the employee (e.g., active, on leave, terminated)

### Employee Attendance

The ERP system tracks employee attendance and leave records.

#### Fields:

- `attendance_id`: Unique identifier for attendance records (Primary Key)
- `employee_id`: Foreign key referencing the employee associated with the attendance record
- `attendance_date`: Date of attendance
- `clock_in`: Time when the employee clocked in
- `clock_out`: Time when the employee clocked out
- `leave_type`: Type of leave taken by the employee (if applicable)

## Payroll Management

### Payroll Information

The system manages payroll information for employees.

#### Fields:

- `payroll_id`: Unique identifier for payroll records (Primary Key)
- `employee_id`: Foreign key referencing the employee related to the payroll record
- `pay_period`: Period for which the payroll is processed (e.g., monthly, bi-weekly)
- `gross_salary`: Employee's gross salary before deductions
- `deductions`: Various deductions (taxes, benefits, etc.) from the gross salary
- `net_salary`: Employee's net salary after deductions
- `payment_date`: Date when the salary is paid to the employee

### Payroll Processing

The ERP system automates payroll processing.

- **Calculation:** Calculates salaries, deductions, and taxes based on configured rules.
- **Approval:** Allows for review and approval of payroll before processing.
- **Generation:** Generates payslips and initiates salary disbursement.

## HR Functions

- **Recruitment:** Manages the recruitment process, job postings, and candidate tracking.
- **Training and Development:** Records employee training programs and career development.
- **Performance Management:** Tracks employee performance reviews and evaluations.

This documentation provides an outline of the HR and Payroll module functionalities within our ERP system. Additional features and configurations may exist to support HR and Payroll management processes tailored to our organization's needs.
