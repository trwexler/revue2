import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const UserForm = (props) => {
    const {updatedState, setUpdatedState} = props;

    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmReg, setConfirmReg] = useState("");
    const [errors, setErrors] = useState({});

    
    const onSubmitHandler = (e) => {
    
        e.preventDefault();
        const newUser = {
            firstName,   
            lastName,
            email,
            password,
            confirmPassword
        }
        axios.post('http://localhost:8000/api/users/register', 
        newUser )
      
          .then((res) =>{
              console.log(newUser)
              console.log(res); 
              console.log(res.data);
              // add a navigate to the home page
              setFirstName("");
              setLastName("");
              setEmail("");
              setPassword("");
              setConfirmPassword("");
              setErrors({});
              setConfirmReg("You have successfully registered.")
              localStorage.setItem("userId", res.data.user._id )
              // setUpdatedState(!updatedState)

              // const userId = localStorage.getItem("userId") || "not logged in"
            
              // 
          })
          .catch((err) => {
              console.log(err);
              console.log(err.response.data);
              if (err.response.data.errors) {
                  setErrors(err.response.data.errors);
              } 
             
          });

    
            
    }

    return (
        
    <div className="container">
      <h3 style={{color: "#7393B3"}}> Register </h3>
      {
        confirmReg ?
        <h6 style= {{color: "green"}}> {confirmReg} </h6>
        : null
      }
      <form className="d-flex justify-content-evenly border border-secondary p-3" onSubmit={ onSubmitHandler }>
        <div className="col-6">
            <label className="form-label">First Name:</label>
            <div className="ptsb-3">
              {
                errors.firstName ?
                  <p className="text-danger" > {errors.firstName.message} </p>
                  : null
              }
              <input 
              className="form-control" 
              type="text"
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            
            <label className="form-label">Last Name:</label>
            <div className="ptsb-3">
              {
                errors.lastName ?
                  <p className="text-danger" > {errors.lastName.message} </p>
                  : null
              }

              <input 
              className="form-control" 
              type="text" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}/>
            </div>

            <label className="form-label">Email:</label>
            <div className="ptsb-3">
              {
                errors.email ?
                  <p className="text-danger" > {errors.email.message} </p>
                  : null
              }
              <input 
              className="form-control" 
              type="text" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <label className="form-label">Password:</label>
            <div className="ptsb-3">
              {
                errors.password ?
                  <p className="text-danger" > {errors.password.message} </p>
                  : null
              }
              <input 
              className="form-control" 
              type="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}/>
            </div>
            
            <label className="form-label">Confirm Password:</label>
            <div className="ptsb-3">
                {
                  errors.confirmPassword ?
                    <p className="text-danger" > {errors.confirmPassword.message} </p>
                      : null
                }
              <input 
              className="form-control" 
              type="password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}/>
              
            </div>
            <button type="submit" className="bi bi-upload mt-3" > Register</button>
        </div>
        </form>
    </div>
        
    )
}
export default UserForm;
