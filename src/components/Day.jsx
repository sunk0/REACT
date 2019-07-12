import React from 'react';
import image from '../components/image.png'
export default class Day extends React.Component {  

render(){
    return(
        <div>
            <h1>{this.props.valueDay}</h1>
            <img src={image} alt="img" className="img" />
            <h1>{this.props.valueCelsius} °C</h1>
        </div>
    )
  }
}
