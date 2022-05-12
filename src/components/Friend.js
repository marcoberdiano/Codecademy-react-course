import React from 'react';

export const Friend = () => {
  return <img width='500' src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" alt="octopus"/>;
  
};

export const NewFriend = (props) => {
    return (
      <div>
          <img src={props.src} alt="squid"/>
      </div>
    );
}