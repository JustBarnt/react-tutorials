import React from 'react';
import { styles } from '../styles';

const images = {
    copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
    quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};

export class CopyCat extends React.Component 
{
    render(props) 
    {
        const copying = this.props.copying;
        const toggleTape = this.props.toggleTape
        
        return (
          <div style={styles.div}>
            <h1 style={{marginBottom: 80}}>Copy Cat</h1>
                <input type='text' value={this.props.input}  onChange={this.props.handleChange}/>
            <img style={styles.img} 
              alt='cat'
              src={copying ? images.copycat : images.quietcat}
              onClick={toggleTape}
            />
            {copying && <p>{this.props.input}</p>}
          </div>
        );
    };
}