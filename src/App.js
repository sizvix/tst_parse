import React, { Component } from 'react';
import Parse from 'parse';
import IoSlider from './ioSlider';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {link:{} , ioVal:-1i, valId:''}
  }
  componentWillMount(){
    this.initStore()
    .then(valId=>this.initObserver(valId))
  }

  initStore(){
    return new Promise(function(resolve, reject) {
      Parse.initialize("parse_test");
      Parse.serverURL = 'http://79.137.85.60:1337/parse'
      (new (Parse.Object.extend("IoSlider"))())		// new IoSlider store instance
      .save({ value : 1 })
      .then( link=> this.setState(
        { link , valId: link.id },
        ()=> resolve(link.id) 
      ) )
      .catch(err=>{ console.log(err), reject(err) })
    }
  }

  initObserver( valId ){
    Parse.initialize("parse_test");
    Parse.serverURL = 'http://79.137.85.60:1337/parse'
    var query = new Parse.Query( Parse.Object.extend("IoSlider") )	 	// new IoSlider store to query
    query.get( valId )
    .then((ioVal) => {
      this.setState({ioVal})
    }, (error) => {
      console.log( error )  
    });
  }

  render() {
    return (
      <div className="App">
	<IoSlider min={1} max={200} link={this.state.link}  />
	<IoVal ioVal={this.state.ioVal} valId={this.state.valId} />
      </div>
    );
  }
}

export default App;
