import React, {Component} from 'react';
import logo from '../logo.svg';

const Logo = props => (
  <div className="logo" style={props.styleType}>
    <img src={logo} className="App-logo" style={{width: '100%'}}/>
  </div>
);


  
  export default Logo;
  