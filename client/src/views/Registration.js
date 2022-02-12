import React from 'react'
import UserForm from '../components/UserForm';
import styled from 'styled-components';



const Registration = () => {
  return (
    <HomeContainer>
      <UserForm/>
    </HomeContainer>
  )
}

export default Registration;


const HomeContainer = styled.div`
    margin: 7rem 0;
    font-family: 'Poppins', sans-serif;
    img {
        width: 2rem;
        display: block;
        margin: 0 auto;
    }
`;