import React, { useEffect,useState } from 'react';
import Header from '../Components/header';
import { Form } from 'react-bootstrap';
import axios from 'axios';

const Update = () => {
    const [users, setUsers] = useState([]);
    const [flag,setflag]=useState(false);
    const [flag1,setflag1]=useState(false);   
    const [selectedField, setSelectedField] = useState('');
    const [selectedUser, setSelectedUser] = useState('');
    const [inputValue, setInputValue] = useState('');

    useEffect(()=>{
        fetchUser();    
    },[])
    
    const parameters=[{name:'name'},{name:'email'},{name:'age'}];

    const handleUserChange = (event) => {
        setSelectedUser(event.target.value);
        if(event.target.value=='')
        setflag(false);
        else
        setflag(true);
        console.log(event.target.value);
    };
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };


    const handleParamterChange = (event) => {
        setSelectedField(event.target.value);
        if(event.target.value=='')
        setflag1(false);
        else
        setflag1(true);
    };

    const handleButton=async()=>{
        const status=await axios.get('http://localhost:5000/details', {
            params: {
              user: selectedUser,
            },
          })
        if(status.status===200)
        {
          if(selectedField==='name')
          alert(status.data.name);
          else
          if(selectedField==='email')
          alert(status.data.email);
          else
          if(selectedField==='age')
          alert(status.data.age);
        }  
        else{
          alert('Something went wrong')
        }
    }
    async function handleUpdateButton()
    {
    
    const status=await axios.put(`http://localhost:5000/update/${selectedUser}/${selectedField}/${inputValue}`)
    if(status.status===200)
        {
            alert('Updation Done');
            window.location.reload();
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

            {flag&&
            <Form.Group controlId="userDropdown">
            <Form.Label>Select a paramtter to Update Details</Form.Label>
            <Form.Control as="select" onChange={handleParamterChange} value={selectedField}>
            <option value="">--Select a Parameter--</option>
            {parameters.map((user) => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
            ))}
            </Form.Control>
            </Form.Group>
            }
            {flag1&&<div class="form-group">
            <label for="name">Enter New Value</label>
            <input type="text" class="form-control" value={inputValue} onChange={handleChange}/>
            </div>}


            <br/>
            <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button" onClick={handleButton}>Fetch</button>
            </div>
            <br/>
            <div class="d-grid gap-2">
            <button class="btn btn-danger" type="button" onClick={handleUpdateButton}>Update</button>
            </div>

            </div> 
        </div>
    );
};

export default Update;