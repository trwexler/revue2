import React, { useState } from 'react'
import styled from 'styled-components';



const Footer = () =>{

    return (
        
            
        <FooterContainer>
            <span className="d-flex justify-content-center">
                @ {new Date().getFullYear()} All Rights Reserved. ReVue
            </span>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
    background: #7393B3;
    font-family: 'Poppins', sans-serif;
    height: 2rem;
    left: 0;
    bottom: 0;
    width: 100%;
`;
