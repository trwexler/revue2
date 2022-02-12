import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { navigate } from '@reach/router';


const UpdateReview = (props) => {

    
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [review, setReview] = useState('');
    const [image, setImage] = useState('');

    useEffect(()=>{
      axios.get("http://localhost:8000/api/review/" + props.id)
          .then((res) => {
              console.log(res.data)
              setTitle(res.data.title);
              setLocation(res.data.location);
              setReview(res.data.review);
              setImage(res.data.image);

          })
          .catch((err) =>{ 
              console.log(err);
          })
  }, [])


    const onChangeImage = (e) =>{
        setImage(e.target.files[0])
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();

        const formData = new FormData();

        formData.append("title", title);
        formData.append("location", location);
        formData.append("review", review);
        formData.append("image", image);


        axios.post('http://localhost:8000/api/review/post', 
            formData,
        {
            withCredentials: true
        })
        .then((res)=>{
            console.log(res)
            console.log("successfully created review")
            navigate("/myreviews");
        })
        .catch((err) => {
            console.log(err)
            if (err.response.data.code === 401){
                navigate('/login')
            }
        })
    }

    return (
    <div>
        <div className='container'>
            <h3 style={{color: "#7393B3"}}>ReVue your latest travel</h3>
            <form className='border p-4' onSubmit={ onSubmitHandler } encType="multipart/form-data">
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" onChange = {(e)=>setTitle(e.target.value)} placeholder={title}/>
        
                </div>
                <div className="mb-3">
                    <label className="form-label">Location</label>
                    <input type="text" className="form-control" onChange = {(e)=>setLocation(e.target.value)} placeholder={location}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Review</label>
                    <textarea className="form-control" rows="3" onChange = {(e)=>setReview(e.target.value)} placeholder={review}/>
                </div>  
               
                <div className="mb-3">
                    <label className="form-label">Upload Photos</label>
                    <input className="form-control form-control-sm" type="file" name="image" onChange = { onChangeImage } placeholder={image}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit Review</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateReview;
