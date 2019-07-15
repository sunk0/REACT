import React from 'react';
import image from './image.png';
import './Hour.css';

export default class HourlyOne extends React.Component{

    render(){
        return(
            <div className="hour" >
                <h1 className="hour-hour">{this.props.valueHour}</h1>
                <img src={image} alt="img" className="hour-img" />
                <h1 className="hour-celsius">{this.props.valueCelsius}°C</h1>
            </div>
        )
      }
}