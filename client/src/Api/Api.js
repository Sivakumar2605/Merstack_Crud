import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const getEmploye = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/employees/allemployees`);
        console.log(response.data); 
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};


export const addEmploye = async (employeeData) => {
    try {
        const response = await axios.post(`${BASE_URL}/employees/addemp`, employeeData);
        console.log('Employee added:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error adding employee:', error);
        return null; 
    }
};

export const deleteEmploye = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/employees/delete/${id}`);
        console.log('Employee deleted:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error adding employee:', error);
        return null; 
    }
};

export const updateEmploye= async(id,employeeData)=>{


    try{
        await axios.put(`${BASE_URL}/employees/update/${id}`,employeeData)


    }
    catch(error)
    {
        console.log(error)
    }
 }