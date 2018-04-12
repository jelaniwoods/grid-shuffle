import React, { Component } from 'react';
import Grid from './components/Grid';

class App extends Component {
  state = {
    shuffled: false,
    logo: {
      gridColumn: 1,
      gridRow: 1,
      backgroundColor: 'rgb(214, 114, 33)'
    }
  }
  shuffle = async (e) => {
    e.preventDefault();
    this.setState({
            logo: {
                gridColumn: 3,
                gridRow: 1,
                backgroundColor: 'rgb(214, 114, 33)'
            }
        }
    );
    this.setState({shuffled: true});
    console.log(this.state.shuffled+ ' ~XXX~');
    // this.setState({
    //     logoC: 3,
    //     logoR: 1,
    //     logoBGC: 'rgb(214, 114, 33)'
    // });
  }
  render() {
    return (
      <div className="App" onClick={this.shuffle}>
        <Grid logo={this.state}/>
      </div>
    );
  }
}

export default App;
