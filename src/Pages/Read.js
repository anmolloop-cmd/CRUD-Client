import React, { useEffect,useState } from 'react';
import Header from '../Components/header';
import { Form } from 'react-bootstrap';
import axios from 'axios';

const Read = () => {
    
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
    useEffect(()=>{
        fetchUser();    
    },[])
    
    const handleUserChange = (event) => {
        setSelectedUser(event.target.value);
    };

    const handleButton=async()=>{
       const status=await axios.get('http://localhost:5000/details', {
            params: {
              user: selectedUser,
            },
          })
        if(status.status===200)
        {
          alert(JSON.stringify(status.data))
          console.log(status)
        }  
        else{
          alert('Something went wrong')
        }
    }

    async function fetchUser()
    {
      try{
        const data=await axios.get('http://localhost:5000/users');
        setUsers(data.data);
         }
         catch(err)
         {
         console.log(err);
         }
     }
    return (
        <div>
            <Header/>
            <div className="container-fluid">
            <Form.Group controlId="userDropdown">
            <Form.Label>Select a user to Get Details</Form.Label>
            <Form.Control as="select" onChange={handleUserChange} value={selectedUser}>
            <option value="">--Select a user--</option>
            {users.map((user) => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
            ))}
            </Form.Control>
            </Form.Group>
            <br/>
            <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button" onClick={handleButton}>Get Details</button>
            </div>
            </div>
        </div>
    );
};

export default Read;