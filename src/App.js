import logo from './logo.svg';
import './App.css';
import React from 'react'
import IdSearchBar from './Components/IdSearchBar';

function App() {
  const [data, setData] = React.useState(null);
  return (
    <div className="App">
      <IdSearchBar></IdSearchBar>
    </div>
  );
}
export default App;
