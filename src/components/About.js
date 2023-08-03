import React from "react";
import Links from "./Links"

function About(props) {
  let isString
  if(props.bio===undefined){
    isString = false
  } else if(props.bio===""){
    isString = false
  } else {
    isString = true
  }
  

  return (
    <div id="about">
      <h2>About Me</h2>
      {isString ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>
  );
}

export default About;
