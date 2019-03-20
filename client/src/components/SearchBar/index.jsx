import React, { Component } from 'react';
import './style.css'

class App extends Component {

 constructor(props){
    super(props)
    this.state = {
      limit: '',
      offset: '',
      name:'',
      city:'',
      funds:''
    };
  }

  onHandleChange =  e => {
    const {name, value} = e.target
  	this.setState({[name]: value},
  	);
  }

  getFilteredData = () =>{
      this.props.getData(this.state)
  }

  render() {
    const { 
      limit,
      offset,
      name,
      city,
      funds } = this.state;
    return (
      <div className='SearchBar'>
      	<input value={limit} onChange={this.onHandleChange} name='limit' placeholder='limit'/>
        <input value={offset} onChange={this.onHandleChange} name='offset' placeholder='offset'/>
        <input value={name} onChange={this.onHandleChange} name='name' placeholder='name'/>
        <input value={city} onChange={this.onHandleChange} name='city' placeholder='city'/>
        <input value={funds} onChange={this.onHandleChange} name='funds' placeholder='funds'/>    
        <button onClick={this.getFilteredData}>Get data</button>	
      </div>
    )

  }
}

export default App;
