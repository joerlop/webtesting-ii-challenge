import React from 'react';
import '../App.css';

function Display(props) {
  return (
    <div className="Display">
      <p>{`Balls: ${props.balls}`}</p>
      <p>{`Strikes: ${props.strikes}`}</p>
    </div>
  );
}

export default Display;
