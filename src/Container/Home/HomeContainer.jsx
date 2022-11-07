import React, { Component } from 'react'
import AddNumbers from '../../Components/AddNumbers';
import Home from '../../Components/Home'

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: 0,
     
    };
   
  }
  Increment=()=>{
    console.log("increment");
    this.props.increment();
  }
  Decrement=()=>{
    console.log("decrement");
    if(this.props.counterNum>0){
      this.props.decrement();
    }
  }
  ResetCount=()=>{
    console.log("resetCount");
      this.props.resetCount();
    
  }
  IncrementByAmount=(IncBy)=>{
    console.log("incrementByAmount",IncBy);
    this.props.incrementByAmount(IncBy);
  }
  DecrementByAmount=(IncBy)=>{
    console.log("decrementByAmount",IncBy);
    if(this.props.counterNum>0){
      this.props.decrementByAmount(IncBy);
    }

  }


  render() {
   console.log(this.props.resetCount);
    return (
      <div>       
        <Home
        Number={this.props.counterNum}
        />
        <AddNumbers 
        Increment={this.Increment}
        Decrement={this.Decrement}
        ResetCount={this.ResetCount}
        IncrementByAmount={this.IncrementByAmount}
        DecrementByAmount={this.DecrementByAmount}
        />
      </div>
    )
  }
}
