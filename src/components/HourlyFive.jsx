import React from 'react';
import HourlyOne from './HourlyOne';
export default class HourlyFive extends React.Component{

constructor(props){
  super(props)
  this.state = {
    hour: ['1', '2', '3', '4', '5', '6'],
    celsius: 0,
   }
}
render(){
  return(
    <div>
      <HourlyOne
      valueHour={this.state.hour[0]}
      valueCelsius={this.state.celsius}
      />
       <HourlyOne
      valueHour={this.state.hour[1]}
      valueCelsius={this.state.celsius}
      />
       <HourlyOne
      valueHour={this.state.hour[2]}
      valueCelsius={this.state.celsius}
      />
       <HourlyOne
      valueHour={this.state.hour[3]}
      valueCelsius={this.state.celsius}
      />
       <HourlyOne
      valueHour={this.state.hour[4]}
      valueCelsius={this.state.celsius}
      />
    </div>
  )
}



}