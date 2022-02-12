import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';


const GetAllReviews = (props) => {
    
    const [allReviews, setAllReviews] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api')
            .then((res) => {
                console.log(res.data)
                setAllReviews(res.data);
            })
            .catch((err) =>{ 
                console.log(err);
            })
    }, [])

    return(
        <div className='container'>
            
            {allReviews.map((eachReview, index)=> {
                return(
                    
                    <div  key={index}>
                        <div className='d-flex'>
                            <img src= {`http://localhost:8000/${eachReview.imagePath}`}  style={{width: 350}} alt="img" />
                            
                        </div>
                        <h2>{eachReview.title}</h2>
                        <span style={{color: "#36454F"}}> Location: {eachReview.location}</span>
                        <br/>
                        <span style={{color: "#36454F"}}> Posted By: {eachReview.createdBy.firstName} </span>
                        <p className='text-wrap'>{eachReview.review}</p>   
                        <div className='row my-5'>
                        <div>
                            <hr/>
                        </div>
                        </div>

                    </div>  
                )
            })
            }
        </div>
    )
}


export default GetAllReviews;