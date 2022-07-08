import React from 'react';
import react , {useState , useEffect} from 'react'
import './App.css';
import DataFetchingOne from './Components/DataFetchingOne';
import DataFetchingTwo from './Components/DataFetchingTwo';


const Checkbox = ({children})=>{
  const [checked ,setChecked] = useState(true)

  const allChildren= React.Children.map(children,(child)=>{
  // it will allow use of any dom element without console warning
    if(typeof child.type !== 'function'){
      // it is because of br element we are using and we don't want to 
      // mess around any other type of element other than functions
      return child
    }

  // if you don't want to allow dom elements with in your compond component

  // if(typeof child.type ==='string'){
  //   throw new Error (
  //     `${child.type} DOM element is not allowed inside <Checkbox/> component` 
  //   )
  // }
    const clone =React.cloneElement(child,{
      checked,
      setChecked
    })
 
    return clone
  })
  return allChildren
}
const CheckboxInput=({checked , setChecked})=>{
 
  return (
    <>
  
     <input
     type='checkbox'
     checked={checked}
     onChange={(e)=>{
      setChecked(e.target.checked)
     }}
     />
     </>
     )
}

const Label = ({ children , setChecked})=>{

  return <label onClick={()=> setChecked((state)=> !state)}>{children}</label>
}

function App() {
  return (
    <div className="App">
      <Checkbox>
      <Label>Check box label</Label>
      <br/>
        <CheckboxInput/> 
      
      </Checkbox>
     <DataFetchingTwo/>
    </div>
  );
}

export default App;
