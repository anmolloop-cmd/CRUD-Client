import React from 'react';
import Header from '../Components/header';

const create = () => {
    return (
        <div>
            <Header/>
            <div class="container mt-5">
            <div class="row justify-content">
            <div class="col-md-12">
            <form action="http://localhost:5000/create" method="post">
            <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="name" name="name" required/>
            </div>
            <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" name="email" required/>
            </div>
            <div class="form-group">
            <label for="age">Age:</label>
            <input type="number" class="form-control" id="age" name="age" required/>
            </div>
            <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" class="form-control" id="password" name="password" required/>
            </div>
            <div class="form-group">
            <label for="designation">Designation:</label>
            <input type="text" class="form-control" id="designation" name="designation"/>
            </div>
            <br/>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <div id="message" class="mt-3">
            </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default create;