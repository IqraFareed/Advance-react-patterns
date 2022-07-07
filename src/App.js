import react , {useState , useEffect} from 'react'
import './App.css';
import DataFetchingOne from './Components/DataFetchingOne';
import DataFetchingTwo from './Components/DataFetchingTwo';

//* idle 
//* loading
//* loaded
//* error 
//* 

function App() {
 
  return (
    <div className="App">
     <DataFetchingTwo/>
    </div>
  );
}

export default App;
