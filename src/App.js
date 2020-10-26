import React, { Component } from 'react';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';


const sampleQuote =
  {
  "quote": "In theory, Communism works! In theory.",
  "character": "Homer Simpson",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  "characterDirection": "Right"
  }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: sampleQuote
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    const num = 1;
    axios.get(`https://simpsons-quotes-api.herokuapp.com/quotes?count=${num}`)
    .then(res => res.data)
    .then(data => {
      console.log(data)
      this.setState({
        quote: data[0]
      })
    })
  }
  render () {
    return (
      <div className="App">
        <QuoteCard quote={this.state.quote}/>
        <button type="button" onClick={this.getQuote}>Get quote</button>
      </div>
    );
  }
    
}

export default App;