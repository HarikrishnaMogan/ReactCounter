import React from "react";
import "./index.css";

class App extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            count:1,
        };
        this.counter=0;
    }

    reset = ()=>
    {
        this.counter=0;
        this.setState({count:this.counter});
    }
    increment =()=>
    {
        this.counter = this.counter+1;
        this.setState({count: this.counter});
    }
    decrement =()=>
    {
        this.counter = this.counter-1;
        this.setState({count:this.counter});
    }
    render()
    {
        return (
           <React.Fragment>
               <p>Name:{this.props.name}</p>
               <p>Age:{this.props.age}</p>
               <p>Region:{this.props.region.state}</p>
               <p >CardNumber:{this.state.count}</p>
               <div className="but">
               <button onClick={this.increment}>increment</button>
               <button onClick={this.decrement}>Decrement</button>
               <button onClick={this.reset}>Reset</button>
               </div>
           </React.Fragment>
        );
    }
  
}
export default App;

