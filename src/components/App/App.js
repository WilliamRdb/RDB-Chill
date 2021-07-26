import './App.css';
import {useState} from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

function App() {
  const [value1 , setValue1] = useState('')
  const parentCallback = (value) => {
    setValue1(value);
  }
  return (
    <div className="App">
      <Header parentCallback={parentCallback}/>
      <Main search={value1}/> 
      <Footer />
    </div>
  );
}

export default App;
