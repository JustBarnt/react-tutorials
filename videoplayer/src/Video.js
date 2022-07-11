import React from 'react';

export class Video extends React.Component 
{
  render(props) 
  {
    return (
      <div>
        <video src={this.props.src} controls autostart="true" autoPlay muted />
      </div>
    );
  }
}