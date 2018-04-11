import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Grid extends Component {
    render() {
      return (
        <div className="Grid">
            <div className="logo">
            
                <img src={logo} style={{width: '100%'}}/>
            </div>
            <div className="nav">nav</div>
            <div className="banner">banner</div>
            <div className="h1">h1</div>
            <div className="sect1">sect1</div>
            <div className="sect2">sect2</div>
            <div className="sect3">sect3</div>
            <div className="footer">foot</div>
        </div>
        );
    }
}

export default Grid;