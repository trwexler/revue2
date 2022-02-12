import React, { useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { navigate, Link } from '@reach/router';
// import logo from '../logo.png';

const Navbar = () =>{
    const logout = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/logout", {

        }, {
            withCredentials: true,
        })
        .then((res) => {
            console.log(res.data);
            localStorage.clear()
            navigate('/login')
        })
        .catch(err => {
            console.log(err);
            
        });
    };

    return(
        <div className='container'>
            <nav className="navbar">
                <div className="container-fluid justify-content-between">
                    {/* <Link>
                        <img src={logo} alt="logo"/>
                    </Link>     */}
                    <div>
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => navigate('/')}> Home </button>
                        {/* <button className="btn btn-sm btn-outline-secondary"  onClick={() => navigate('/')}> About ReVue</button> */}
                    </div>
                    <div>
                        <button className="btn btn-sm btn-outline-secondary"  onClick={() => navigate('/review')}> Post a ReVue</button>
                        <button className="btn btn-sm btn-outline-secondary"  onClick={() => navigate('/myreviews')}> My ReVues</button>
                    </div>
                    <div>
                        <button className="btn btn-sm btn-outline-secondary"  onClick={() => navigate('/login')}> Login </button>
                        <button className="btn btn-sm btn-outline-secondary"  onClick={(e) => logout(e)}> Logout</button>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar;