import React, { Component } from 'react';
import axios from 'axios'
import './style.css'
import Row from './components/Row'
import TableTitle from './components/TableTitle'

class App extends Component {

 constructor(props){
    super(props)
    this.state = {
      data: [],
      input: '',
      filteredList: []
    };
    this.getData();
  }

  getData = () => {
    axios.get('http://localhost:8080/')
    .then(res => {
      const data = res.data.data;
      this.setState({ 
      	data: data,
      	filteredList: data
       });
    })
    .catch(error=>{console.error(error)})
  };

  onHandleChange = e => {
  	this.setState({input: e.target.value},
  		() => this.filter()
  	);
  }

  filter = () => {
  	const { data, input } = this.state; 
  	if(input){
	  	const filtered = data.filter(item => 
	 			Object.values(item).some( element => 
	    		element.toString().toUpperCase().indexOf(input.toString().toUpperCase()) >= 0
	  		)
			)
			this.setState	({filteredList: filtered});
  	}
  }

  editValue = e => {
  	const	{ data } =this.state;
  	const [key, id] = e.target.id.split('_');
  	const editTo = prompt('Enter Value', '');
  	axios.put(`http://localhost:8080/update/:${id}`, {
  		...data[id-1],
  		[key]: editTo	
  	})
  	.then( resp => {
  		const newData = [...data]
  		newData[resp.data.id-1] = resp.data; 
  		this.setState({data: newData});
  	})
  }

  render() {
    const { input, filteredList, data } = this.state;
    const listOfItem = input ? filteredList	: data;
  	return (
      <div className='App'>
      	<div className='Search'>
      		<input value={input} onChange={this.onHandleChange} placeholder='Search'/>
      	</div>
      	<TableTitle/>
      	{
        	listOfItem.map(item =>
          	<Row handleClick={this.editValue} key={item.id} item={item}/>
       	  )
      	}
      </div>
    )

  }
}

export default App;
