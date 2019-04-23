import React, { Component } from 'react';
import Slider from './slider'

/*	@params : min , max , id, url , store	*/

class IoSlider extends Component {
  onChange(e){
    this.props.link.set("value",e.value)
  }
  render(){
    return <Slider min={this.props.min} max={this.props.max} onChange={this.onChange.bind(this)} />
  }
}

export default IoSlider ;
