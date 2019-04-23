import React, { Component } from 'react';
import Parse from 'parse';

class IoVal extends Component {
  state = {val:-1 , valId:''}
  componentWillReceiveProps(props){
    props.ioVal.on('update', rep => 
      this.setState({val: rep.get('value')})
    );
  }
  toUpdate(){			// pour pallier au fail de websocket ...
    Parse.initialize("parse_test");
    Parse.serverURL = 'http://79.137.85.60:1337/parse'
    var query = new Parse.Query( Parse.Object.extend("IoSlider") )	 	// new IoSlider store to query
    query.get( this.state.valId )
    .then((ioVal) => {
      this.setState({val})
    }, (error) => {
      console.log( error )  
    });
    
  }
  render(){
    <div>
      <button onCLick={this.toUpdate.bind(this)} >update</button>
      <div>{this.state.val}</div>
    </div>
  }
}
