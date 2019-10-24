import React, { Component } from 'react';
import { Card } from './components/card/card.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';



class App extends Component {
  constructor(){
    super();

    this.state = {
      marvelCharaters: [],
      searchField: ''
    }
  };

  componentDidMount(){
    
    fetch(`http://gateway.marvel.com/v1/public/characters?ts=123456&apikey=77634dfe6430efece10c5fb55582e6bd&hash=e235971ea0b63862cf4de5a3d04d518e`)
    .then(response => response.json())
    .then(data => this.setState({marvelCharaters: data.data.results}))
    .then()
  }

    handleChange = e => {
      this.setState({searchField: e.target.value})
    }



render() {
  const { marvelCharaters, searchField } = this.state;
  console.log(marvelCharaters);
 
  const filteredCharacters = marvelCharaters.filter(character =>
    character.name.toLowerCase().includes(searchField.toLowerCase())
  );
   
  
    return(
     
    <div className="App">

      <h1>FIND YOUR MARVEL CHARACTER</h1>
      <SearchBox
        placeholder="search for Marvel"
        handleChange={this.handleChange}
      />
      <Card marvelCharaters={filteredCharacters}/>
    
    </div>
  );

}
}
export default App;
