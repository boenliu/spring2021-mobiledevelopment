import React from 'react'; // importing all of react

// extending the pushup class so that it is a react component.
class Pushups extends React.Component {
  // passing properties to React.component so that we can use things like "this"
  constructor(props) {
    super(props);

    // creating a state with a single variable: counter which keeps track of the number of reps for this exercise.
    this.state = {
      counter: 0 // initializing it to zero.
    }
  }

  // the render method which creates/returns the html/jsx for this component.
  render(){
    return(
      <div>
        {/* header 1 with the exercise name*/}
        <h2>Pushups</h2>

        {/* the rep counter */}
        <p>Rep count: {this.state.counter}</p>

        {/* this button wil increment this.state.counter after every button press */}
        <button onClick={() => this.setState({counter: this.state.counter + 1})}>+1 rep</button>

        {/* this will reset this.state.counter to zero after every button press */}
        <button onClick={() => this.setState({counter: 0})}>reset</button>
      </div>
    );
  }
}

// export this component so that App.js can use it.
export default Pushups;
