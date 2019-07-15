import React from 'react';
import Day from './Day';
import './Week.css';
export default class Week extends React.Component{    

constructor(props){
  super(props)
  this.state = {
    weekDay: ['Mon', 'Tue', 'Wen', 'Thur','Fri','Sat', 'Sun'],
    celsiusHigh: 0,
    celsiusLow: 1
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
      <div > 
      <Day 
      valueDay={this.state.weekDay[0]}
      valueCelsiusHigh={this.state.celsiusHigh}
      valueCelsiusLow={this.state.celsiusLow}
      /> 
      <Day 
      valueDay={this.state.weekDay[1]}
      valueCelsiusHigh={this.state.celsiusHigh}
      valueCelsiusLow={this.state.celsiusLow}
      /> 
         <Day 
      valueDay={this.state.weekDay[2]}
      valueCelsiusHigh={this.state.celsiusHigh}
      valueCelsiusLow={this.state.celsiusLow}
      /> 
         <Day 
      valueDay={this.state.weekDay[3]}
      valueCelsiusHigh={this.state.celsiusHigh}
      valueCelsiusLow={this.state.celsiusLow}
      /> 
         <Day 
      valueDay={this.state.weekDay[4]}
      valueCelsiusHigh={this.state.celsiusHigh}
      valueCelsiusLow={this.state.celsiusLow}
      /> 
     </div> 
    );
  }
}

// function renderFunc(){
//   const timesToRender = [0,1,2,3,4]
//   return(
//     null
//   )
// }

 