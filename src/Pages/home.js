import React from 'react';
import Header from '../Components/header';
import './styles.css';
import c from "../images/C.png"
import r from "../images/R.png"
import u from "../images/U.png"
import d from "../images/D.png"


const home = () => {
    return (
        <div>
            <Header/>
            <div className='main-body'>
            <h1>Welcome to CRUD System</h1>
            </div>
            {/* 1st */}
            <div className='container'>
            <div class="card">
            <img src={c} id='card1' class="card-img-top" alt="Create"/>
            <div class="card-body">
            <h5 class="card-title">Create</h5>
            <p class="card-text">Create a new User</p>
            <a href="/create" id="btn-1" class="btn btn-primary">Create User</a>
            </div>
            </div>

            {/* 2nd */}
            
            <div class="card">
            <img src={r} class="card-img-top" alt="Create"/>
            <div class="card-body">
            <h5 class="card-title">Read</h5>
            <p class="card-text">Get Users Present in DB</p>
            <a href="/user" id="btn-2" class="btn btn-primary">Get User</a>
            </div>
            </div>
            
            
            {/* 3rd */}
            
            <div class="card">
            <img src={u} class="card-img-top" alt="Create"/>
            <div class="card-body">
            <h5 class="card-title">Update</h5>
            <p class="card-text">Update Users Present in DB</p>
            <a href="/update" id="btn-3" class="btn btn-primary">Update</a>
            </div>
            </div>
            
            
            {/* 4th */}
            
            <div class="card">
            <img src={d} class="card-img-top" alt="Create"/>
            <div class="card-body">
            <h5 class="card-title">Delete</h5>
            <p class="card-text">Get Users Present in DB</p>
            <a href="/delete" id="btn-4" class="btn btn-primary">Delete User</a>
            </div>
            </div>
            </div>

            </div>
    );
};

export default home;