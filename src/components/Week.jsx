import React from 'react';
import Day from './Day';
export default class Week extends React.Component{    

constructor(props){
  super(props)
  this.state = {
    weekDay: ['Mon', 'Tue', 'Wen', 'Thur','Fri','Sat', 'Sun'],
    celsius: Math.floor(Math.random() * 50)
  }
}

render(){  
    return(     
       <Day value={this.state.weekDay[1]}></Day>  
    );
  }
}
 