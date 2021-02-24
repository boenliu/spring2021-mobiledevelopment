import React from 'react'; // importing all of react

function Situps(){
  // creating a hook so that it can keep track of the counter as well as change the counter. Uses useState();
  const [counter, changeCounter] = React.useState(0);

  // creates/returns the html/jsx code
  return(
    <div>
      {/* simple header 2 with the component name */}
      <h2>Situps</h2>

      {/* shows the counter and labels it "rep count: " */}
      <p>Rep count: {counter}</p>

      {/* button that increments the counter after every button press */}
      <button onClick={() => changeCounter(counter + 1)}>+1 rep</button>

      {/* button that resets the counter after every button press */}
      <button onClick={() => changeCounter(0)}>reset</button>
    </div>
  )
}


// exports the Situps component for App.js to use. 
export default Situps;
