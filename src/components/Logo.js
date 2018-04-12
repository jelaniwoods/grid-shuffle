import React, {Component} from 'react';
import logo from '../logo.svg';

const styles = {
  gridColumn: 1,
  gridRow: 1,
  backgroundColor: 'rgb(214, 114, 33)'
}
function log() {
  if (styles.gridColumn === 1)
    styles.gridColumn = 3;
  else 
    styles.gridColumn = 1;
  styles.gridRow = 1;
  console.log('ss');
}
const Logo = props => (
  <div className="logo" onClick={log} style={{
    gridColumn: styles.gridColumn, 
    gridRow: styles.gridRow, 
    backgroundColor: styles.backgroundColor,
    transition: 'all .5s ease'
    }}>
    {props.shuffled}ee
    <img src={logo} className="App-logo" style={{width: '100%'}}/>
    {props.shuffled && 
                <p> shuffle </p> }
  </div>
);


  
  export default Logo;
  