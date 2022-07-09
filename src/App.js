import React from 'react';
import react , {useState , useEffect} from 'react'
import './App.css';
import DataFetchingOne from './Components/DataFetchingOne';
import DataFetchingTwo from './Components/DataFetchingTwo';
import Wrapper from './Components/Wrapper';
import Counter1 from './Components/Counter1';
import Counter2 from './Components/Counter2';

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
  if(!setChecked){
    throw new Error ('Should be used inside <Checkbox/>')
  }
  return (

    <input
     type='checkbox'
     checked={checked}
     onChange={(e)=>{
      setChecked(e.target.checked)
     }}
     />
   
     )
}

const Label = ({ children , setChecked})=>{

  return <label onClick={()=> setChecked((state)=> !state)}>{children}</label>
}

function App() {
  return (
    <div className="App">
      /**compond component */
      <Checkbox>
        <CheckboxInput />
        <Label>Check box label</Label>
      </Checkbox>

      /** use reducer */
      <DataFetchingTwo />

      {/* render props code */}
      <Wrapper
        render={(count, incCount) => {
          return <Counter1 count={count} incCount={incCount} />;
        }}
      />

      <Wrapper
        render={(count, incCount) => {
          return <Counter2 count={count} incCount={incCount} />;
        }}
      />
    </div>
  );
}

export default App;
