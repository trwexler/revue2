import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const GetAllUserReviews = (props) => {
    const { userReviews, setUserReviews } = props;
    // const [allUserReviews, setAllUserReviews] = useState(reviews)
    

    const onDeleteReview = (reviewIdFromBelow) => {

        axios.delete('http://localhost:8000/api/review/delete/' + reviewIdFromBelow, 
            { withCredentials: true}
        )
            .then((res) => {
              console.log('inside delete method:' + (reviewIdFromBelow));
            //   navigate("/");
                let filterReviews = userReviews.filter((oneReview) => {
                    return oneReview._id !== reviewIdFromBelow
                })
                setUserReviews(filterReviews);
            })
            .catch((err) => {
              console.log(err)
              console.log('Error occured while during delete request')
            })
      };

  return (
    <div className='container'>
        {userReviews.map((eachReview, index)=> {
                return(
                    <div  key={index}>
                        <div >
                            <img src= {`http://localhost:8000/${eachReview.imagePath}`} alt="..." style={
                            {
                            width: "50%"
                            }}/>
                            
                        </div>
                        <h2>{eachReview.title}</h2>
                        <span style={{color: "#36454F"}}> Location: {eachReview.location}</span>
                        <p className='text-wrap'>{eachReview.review}</p>   
                        <div className='row my-5'>
                            <div className='col-sm-2'>
                                <Link to={`/update/${eachReview._id}`}>
                                    <button className='btn btn-outline-sucess'> Update </button>
                                </Link>
                            </div>
                            <div className='col-sm-2'>
                                <button className='btn btn-outline-sucess' onClick={(e) => onDeleteReview(eachReview._id)}>Delete</button>
                            </div>
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

export default GetAllUserReviews;


