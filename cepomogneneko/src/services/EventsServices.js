import axios from 'axios';

export const GetAllEvents = async () => {
    try 
    { 
        const {data} = await axios.get(`http://localhost:5000/Events/GetAllEvents`);
        return data; 
    }
    catch(e)
    { 
        console.log(e.message);
    }
} 