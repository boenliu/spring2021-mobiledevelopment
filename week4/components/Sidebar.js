// imports the Component class from the component.js file. This allows sidebar to extend component
import Component from './Component.js';

// a new class called sidebar that has the component class as it's parent class.
class Sidebar extends Component {

  // sends props to the parent class (components)
  constructor (props) {
    super(props);
  }

  render () {
    // creating and initializing the string variable responseHTML to have a blank (not null) string.
    let responseHTML = '';

    // basically a forloop for every item in the list of menu.
    this.props.menu.forEach( (item) => {
      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>

      // for each item in the list, add it to the end of responseHTML (concatenation) while wrapping it in <li></li>
      responseHTML = responseHTML.concat(`<li>${item}</li>`);
    });

    // returns the final string responseHTML
    return responseHTML;
  }
}

// allows index to use sidebar.
export default Sidebar;
