import React from 'react';
import image from '../components/image.png'
import Week from './Week'
export default class Day extends React.Component {  

render(){
    return(
        <div>
            <h1>{this.props.value}</h1>
            <img src={image} alt="img" className="img" />
            <h1>{} °C</h1>
        </div>
    )
  }
}
