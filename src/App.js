import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = { 
    length : 0,
    value : {id : 0, text : ''}
   };

  inputChangeHandler = (event) => {
    this.setState( { length : event.target.value.length,
                     value : {id : 0, text : event.target.value}
    } )
  }

  deleteCharHandler = (index) => {
    const chars = [...this.state.value.text.split('')];
    chars.splice(index, 1);
    this.setState({ value : {text : chars.join('')} });
  }
  
  render() {

    let id = 0;
    let chars =  this.state.value.text.split('').map((letter, index) => {
      return (
         <CharComponent char={letter} 
         key={id++}
         delete={(event) => this.deleteCharHandler(index)} />
      );
    }) 

    return (
      <div className="App">
        <input onChange={this.inputChangeHandler} value={this.state.value.text} />
        <ValidationComponent length={this.state.length}/>
        {chars}
      </div>
    );
  }
}

export default App;
