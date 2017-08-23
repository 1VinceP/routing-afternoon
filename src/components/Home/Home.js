import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../../App.css';


class Home extends Component {

  render() {
    return (
      <div className="App">
        <h1>WestSide University</h1>
        <Link to='/classlist'><button className='btn'>Math 1010</button></Link>
        <button className='btn'>English 2010</button>
        <button className='btn'>Biology 2020</button>
      </div>
    );
  }
}

export default Home;
