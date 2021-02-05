// imports the class sidebar so that it can create a new sidebar s
import Sidebar from './components/Sidebar.js';

// creates a new sidebar called s with the menu list of 'Albert Eggstein', 'Attila the Hen', 'Attila the Hen','Dixie Chick','Gregory Peck', and 'Mary Poopins'
const s = new Sidebar({
  menu: [
    'Albert Eggstein',
    'Attila the Hen',
    'Attila the Hen',
    'Dixie Chick',
    'Gregory Peck',
    'Mary Poopins'
  ]
});

/*
  TODO: Use the render() method of Sidebar to show HTML response on console. Results should be wrapped in <ul></ul>

  The final result should look like the following:
  <ul><li>Albert Eggstein</li><li>Attila the Hen</li><li>Attila the Hen</li><li>Dixie Chick</li><li>Gregory Peck</li><li>Mary Poopins</li></ul>
*/

// renders the sidebar menu items and then displays the html. Results are wrapped in <ul></ul>
console.log(`<ul>${s.render()}</ul>`);
