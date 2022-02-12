import React, { useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { navigate } from '@reach/router';


const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [review, setReview] = useState('');
    const [image, setImage] = useState('');
    const [errors, setErrors] = useState({});
    
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
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
            console.log(err.response.data.errors);
            if (err.response.data.errors) {
                setErrors(err.response.data.errors);
            } else if (err.response.data.code === 401){
                navigate('/login')
            }
        })
    }

    return (
    <CreatePostContainer>
        <div className='container'>
            <h3 style={{color: "#7393B3"}}>ReVue your latest travel</h3>
            <div>
                
            </div>
            <form className='border p-4' onSubmit={ onSubmitHandler } encType="multipart/form-data">
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" onChange = {(e)=>setTitle(e.target.value)} placeholder='Title'/>
                    {
                        errors.title ?
                        <p className="text-danger" > {errors.title.message} </p>
                        : null
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label">Location</label>
                    <input type="text" className="form-control" onChange = {(e)=>setLocation(e.target.value)} placeholder='Location'/>
                    {
                        errors.location ?
                        <p className="text-danger" > {errors.location.message} </p>
                        : null
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label">Review</label>
                    <textarea className="form-control" rows="3" onChange = {(e)=>setReview(e.target.value)}></textarea>
                    {
                        errors.review?
                        <p className="text-danger" > {errors.review.message} </p>
                        : null
                    }
                </div>  
                    
                <div className="mb-3">
                    <label className="form-label">Upload Photos</label>
                    <input className="form-control form-control-sm" type="file" name="image" onChange = { onChangeImage }/>
                    {
                        errors.image ?
                        <p className="text-danger" > {errors.image.message} </p>
                        : null
                    }
                </div>
                <button type="submit" className="btn btn-primary">Submit Review</button>
            </form>
        </div>
    </CreatePostContainer>
  )
}

export default CreatePost;


const CreatePostContainer = styled.div`
    margin: 3rem auto;
    padding: 4rm;
    width: 31.25rem;
    font-family: 'Poppins', sans-serif;
    


`;
