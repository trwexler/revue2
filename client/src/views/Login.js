import React, { useState } from 'react'
import styled from 'styled-components';
import UserLogin from '../components/UserLogin';

const Login = (props) => {

    // pass down props 
    return (
        <LoginContainer>
            <UserLogin/>
        </LoginContainer>
        
    )
}

export default Login;


const LoginContainer = styled.div`
    margin: 3rem auto;
    padding: 4rm;
    width: 31.25rem;
    font-family: 'Poppins', sans-serif;

    h1 {
        color: #7393B3;
        font-weight: 500;
    }
`;