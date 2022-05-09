import React from 'react';
//import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import '../css/ProfilePage.css'

class ProfilePage extends React.Component {
  render() {
    return (
      <div className='profile-container'>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img id="mokeyselfie" src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" alt="monkeyselfie" />
      </div>
    );
  }
}

export default ProfilePage;