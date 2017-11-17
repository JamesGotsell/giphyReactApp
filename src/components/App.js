/*  no-restricted-globals */
import React, { Component } from 'react';
import rickAndMorty from 'rick-and-morty';

import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar/SearchBar'
import GiphyContainer from './Giphy/GiphyContainer'

class App extends Component {
 
  constructor() {
    super();
    this.state = {
        searchText: 'stuff',
    }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }
 



  handleSubmit = (e) => {
      e.preventDefault() // eslint-disable-line no-restricted-globals
      console.log(e.target.children[1].value)
      const searchValue = e.target.children[1].value
      this.setState({
        searchText: searchValue// eslint-disable-line no-restricted-globals
      })
      console.log("value of input field : " + this.state.searchText);
     
     }
   
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ searchText: e.target.value })// eslint-disable-line no-restricted-globals

    }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={rickAndMorty.random()} className="App-logo" alt="logo" />
          <h1 className="App-title">Giphy App</h1>
        </header>
        <p className="App-intro">
            Basic Giphy Search App with search bar 
        </p>
         <SearchBar onSubmit={ this.handleSubmit} onChange={ this.handleChange } />
         <GiphyContainer searchItem={this.state.searchText}/>
      </div>
    );
  }
}

export default App;
