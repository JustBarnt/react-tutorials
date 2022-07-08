import React from 'react';
import { NavBar } from './NavBar';

export class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" alt="Profile" />
      </div>
    );
  }
}