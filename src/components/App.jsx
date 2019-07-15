import React from 'react';
import Week from './Week';
import HourlyFive from './HourlyFive';
export default class App extends React.Component{
constructor(props){
    super(props)
    this.state = {
        isClicked: false
    }
}

render(){
    return(
        <div>
        <Week />
        <HourlyFive/>
        </div>
    )
}
}