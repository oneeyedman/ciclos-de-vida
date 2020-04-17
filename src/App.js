import React from 'react';
import Lista from './Lista';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      initial: ['a','b','c','d','e'],
      nums: [1,3,4]
    };
  }

  componentDidMount() {
    
    fetch('http://www.mocky.io/v2/5e99dbfd3300003e267b2d10')
      .then(res=>res.json())
      .then(data=>{

        this.setState({
          nums: data.nums
        });
      });
  }

  render() {
    
    return (
      <div className="app">
        <Lista 
          initial={this.state.initial} 
          nums={this.state.nums} />
      </div>
    );
  }
}

export default App;
