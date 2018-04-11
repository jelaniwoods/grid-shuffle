import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {
    TransitionGroup,
    CSSTransition,
  } from 'react-transition-group';
import Logo from './Logo';
import Nav from './Nav';
import Banner from './Banner';
import H1 from './H1';
import Sect from './Sect';
import Footer from './Footer';

let styles = {};
  
styles.logo = {
    gridColumn: 1,
    gridRow: 1,
    backgroundColor: 'rgb(214, 114, 33)'
}
styles.nav = {
    gridColumn: '2 / span 2',
    gridRow: 1,
    backgroundColor: 'rgb(33, 132, 214)'
}
styles.banner = {
    gridColumn: '1 / span 2',
    gridRow: '2 / span 2',
    backgroundColor: 'rgb(5, 49, 8)'
}
styles.H1 = {
    gridColumn: 3,
    gridRow: '2 / span 2 ',
    backgroundColor: 'rgb(255, 0, 0)'
}
styles.sect1 = {
    gridRow: 4,
    backgroundColor: 'rgb(230, 220, 87)'
}
styles.sect2 = {
    gridColumn: 2,
    gridRow: 4,
    backgroundColor: 'rgb(85, 61, 80)'
}
styles.sect3 = {
    gridColumn: 3,
    gridRow: 4,
    backgroundColor: 'rgb(30, 189, 136)'
}
styles.footer = {
    gridColumn: '1 / span 3',
    gridRow: 5,
    backgroundColor: 'rgb(99, 47, 4)'
}
class Grid extends Component {
    
    shuffle() {
        alert('shuffle');
    }
    render() {
      return (
        <div className="Grid" onClick={this.shuffle}>
            <Logo styleType={styles.logo} />
            <Nav styleType={styles.nav} />
            <Banner styleType={styles.banner} />
            <H1 styleType={styles.h1} />
            <Sect styleType={styles.sect1}/>
            <Sect styleType={styles.sect2}/>
            <Sect styleType={styles.sect3}/>
            <Footer styleType={styles.footer}/>
            {/* <div className="logo">
                <img src={logo} className="App-logo" style={{width: '100%'}}/>
            </div>
            <div className="nav">nav</div>
            <div className="banner">banner</div>
            <div className="h1">h1</div>
            <div className="sect1">sect1</div>
            <div className="sect2">sect2</div>
            <div className="sect3">sect3</div>
            <div className="footer">foot</div> */}
        </div>
        );
    }
}

export default Grid;