import React from 'react';
/* Add any imports you think you might need here! */
import Color from './Color';

const Menu = (props) => { 
    return (
      <div className="colorOptions">
          {/* TODO */}
          <Color color='red' handleClick = {(color) => props.newPost(color)}/>
          <Color color='pink' handleClick = {(color) => props.newPost(color)}/>
          <Color color='blue' handleClick = {(color) => props.newPost(color)}/>
          <Color color='green' handleClick = {(color) => props.newPost(color)}/>
      </div>
    );
}

export default Menu;