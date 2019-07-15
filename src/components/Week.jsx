import React from 'react';
import Day from './Day';
import './Week.css';
export default class Week extends React.Component{    

constructor(props){
  super(props)
  this.state = {
    weekDay: ['Mon', 'Tue', 'Wen', 'Thur','Fri','Sat', 'Sun'],
    celsiusHigh: 0,
    celsiusLow: 1,
    isClicked: false
  }
  // this.celsiusChanger = this.celsiusChanger.bind(this);
  // this.clickEvent = this.clickEvent.bind(this);
}
// Math.floor(Math.random() * 50)

// celsiusChanger() {
//   this.setState({
//       celsiusHigh : Math.floor(Math.random() * 50)
//   });
// }
// clickEvent(){

// }
render(){  
    return( 
      <div onClick={this.clickEvent}> 
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


 