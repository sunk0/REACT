import React from 'react';
import Day from './Day';
export default class Week extends React.Component{    

constructor(props){
  super(props)
  this.state = {
    weekDay: ['Mon', 'Tue', 'Wen', 'Thur','Fri','Sat', 'Sun'],
    celsius: 0
  }
  this.celsiusChanger = this.celsiusChanger.bind(this);
}
// Math.floor(Math.random() * 50)

celsiusChanger() {
  this.setState({
      celsius : Math.floor(Math.random() * 50)
  });
}


render(){  
  
    return( 
      <div> 
      <Day 
      valueDay={this.state.weekDay[0]}
      valueCelsius={this.celsiusChanger}
      /> 
   


      <Day 
      valueDay={this.state.weekDay[1]}
      valueCelsius={this.state.celsius}
      /> 
         <Day 
      valueDay={this.state.weekDay[2]}
      valueCelsius={this.state.celsius}
      /> 
         <Day 
      valueDay={this.state.weekDay[3]}
      valueCelsius={this.state.celsius}
      /> 
         <Day 
      valueDay={this.state.weekDay[4]}
      valueCelsius={this.state.celsius}
      /> 
     </div> 
    );
  }
}

function renderFunc(){
  const timesToRender = [0,1,2,3,4]
  return(
    null
  )
}

 