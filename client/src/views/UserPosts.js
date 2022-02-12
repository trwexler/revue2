import React, {useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import GetAllUserReviews from '../components/GetAllUserReviews';


const UserPosts = (props) => {
    
    const [userReviews, setUserReviews ] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/review/user',  {withCredentials: true})
            .then((res) => {
                console.log(res.data)
                setUserReviews(res.data);
            })
            .catch((err) =>{ 
                console.log(err);
            })
      }, [])
      
  return (
    <HomeContainer>
            <div style={{color: "#7393B3"}} className='container'>
                <h3>My Reviews</h3>
            </div>
            <hr/>
        <GetAllUserReviews userReviews={userReviews} setUserReviews={setUserReviews}/>
    </HomeContainer>
  )
}

export default UserPosts;


const HomeContainer = styled.div`
    margin: 7rem 0;
    font-family: 'Poppins', sans-serif;
    
`;