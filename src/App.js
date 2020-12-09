import './App.css';
import AddCall from './components/AddCall/AddCall';
import CallList from './components/CallList/CallList';
import NextCall from './components/NextCall/NextCall';

function App() {
  return (
    <div className="App">
      <NextCall></NextCall>
      <div>
        <AddCall></AddCall>
        <CallList></CallList>
      </div>
    </div>
  );
}

export default App;
