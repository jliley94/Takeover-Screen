import React from 'react';
import './Login.scss'
export default function ActionButton(props) {

  const buttonStyle = (props.style) ? props.style.toLowerCase() : "";

  return (
    <div className={`actionButton ${buttonStyle}`} onClick={props.action}>
      {props.text}
    </div>
  );
}
