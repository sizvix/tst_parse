import React, { Component } from 'react';
import './slider.css'

/*	@params : min , max , onChange()	*/

class Slider extends Component {
  constructor(props){
    super(props)
    this.state = {pcent:0, activ:false}
  }
  down(e){
    console.log(e)
    this.setState({activ:true})
  }
  up(e){
    console.log(this.slider)
    this.setState({activ:false})
    const {min, max, onChange} = this.props
    const value = Math.round( this.state.pcent*(max-min)/100 ) +min
    onChange({value})
  }
  move(e){
    if(!this.state.activ) return
    const val = (e.clientX - this.slider.clientLeft)/this.slider.offsetWidth 
    const pcent = Math.round( val*100 )
    this.setState({pcent})
  }

  render() {
    return (
      <div className="slider" ref={e=>this.slider=e} onMouseMove={this.move.bind(this)}>
        <div style={{left:this.state.pcent+'%'}} onMouseDown={this.down.bind(this)} onMouseUp={this.up.bind(this)} /> 
      </div>
    );
  }
}

export default Slider ;

