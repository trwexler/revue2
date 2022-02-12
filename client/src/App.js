import React, { useState, useEffect } from 'react';
import { Router, Link } from '@reach/router';
import axios from 'axios';
import Header from './components/Header';
import Login from './views/Login';
import HomePage from './views/HomePage';
import Footer from './components/Footer';
import UpdatePost from './views/UpdatePost';
import CreatePost from './views/CreatePost';
import Registration from './views/Registration';
import UserPosts from './views/UserPosts';

function App() {
  const [updatedState, setUpdatedState] = useState(false);
  const [reviews, setReviews] = useState([]);
  

  



  return (
    <div className="App">
      <Header/>
      <Router>
        <HomePage path='/' />
        <Login path='/login' updatedState={updatedState} setUpdatedState={setUpdatedState}/>
        <UpdatePost path='/update/:id'/>
        <CreatePost path="/review"/>
        <Registration path='/register'/> 
        <UserPosts path='/myreviews' />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
