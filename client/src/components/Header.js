import React, { useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { navigate } from '@reach/router';
import Navbar from './Navbar';


const Header = () =>{
    
    return (
        <MainContainer>
        <div className="container">
            <h1>Welcome to ReVue</h1>
        </div>
        <Navbar/>
        </MainContainer>
        
    )
}
export default Header;


const MainContainer = styled.header`
    background: url(../../images/cover_photo2.jpg)no-repeat center/cover;
    height: 12rem;
    padding-top: 20px;
    font-family: 'Sedgwick Ave', cursive;
    color: #7393B3;

    button{
        border-radius: 5px;
        margin-right: 10px;
        margin-top:10px;
        font-family: 'Sedgwick Ave', cursive;
        color: #36454F;
    }
    * {
        transform: translate(-50%, -50%)
        
        color: 
    }
`;
