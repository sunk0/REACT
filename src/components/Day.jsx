import React from 'react';
import image from '../components/image.png';
import './Day.css';
export default class Day extends React.Component {  

render(){
    return(
        <div className="day">
            <h1 className="day-day">{this.props.valueDay}</h1>
            <img src={image} alt="img" className="day-img" />
            <h1 className="day-celsius">{this.props.valueCelsiusHigh}°C {this.props.valueCelsiusLow}°C</h1>
        </div>
    )
  }
}
