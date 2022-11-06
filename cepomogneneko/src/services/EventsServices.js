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

export const CreateEventttttt = async (ev) => {
    try 
    { 
        const {data} = await axios.post(`http://localhost:5000/Events/CreateEvents?userId=${ev.id}`, ev );
        return data; 
    }
    catch(e)
    { 
        console.log(e.message);
    }
} 

export const Loginnn = async (auth) => {
    try 
    { 
        const {data} = await axios.post(`http://localhost:5000/User/IsUserAuth`, auth );
        return data; 
    }
    catch(e)
    { 
        console.log(e.message);
    }
} 