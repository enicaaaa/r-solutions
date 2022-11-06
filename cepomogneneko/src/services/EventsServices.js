import axios from 'axios';

export const GetAllUserEvents = async (type) => {
    try 
    { 
        const {data} = await axios.get(`http://localhost:5000/Events/GetSpecificEvents?type=${type}`);
        return data; 
    }
    catch(e)
    { 
        console.log(e.message);
    }
} 