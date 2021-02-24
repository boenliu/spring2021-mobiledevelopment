import './App.css'; // i like to keep this because dark mode
import Situps from './components/situps'; // importing situps function component
import Pushups from './components/pushups'; // importing pushup class component

// the main web app
function App() {
  return (
    // returns a div with a header 1, a situp component, and a pushup component, each rendering their own html/jsx code.
    <div>
      <h1>Exercise Tracker</h1>
      <Situps />
      <Pushups />
    </div>
  );
}

// exports the app function component for react to use to create the app
export default App;
