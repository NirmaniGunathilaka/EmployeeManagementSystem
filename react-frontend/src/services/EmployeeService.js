import axios from 'axios';
import CreateEmployeeComponent from '../components/CreateEmployeeComponent';

const EMPLOYEE_API_BASE_URL = "http://localhost:8090/api/v1/employees";

class EmployeeService {
    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }


    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }   
}

export default new EmployeeService();