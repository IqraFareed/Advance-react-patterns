import React , {useReducer , useEffect} from 'react'
import axios from 'axios';

const initialState ={
    loading: true ,
    error:"",
    post:{}
}
//* idle 
//* loading
//* loaded
//* error 


const reducer = (state , action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
           return { 
            loading: false,
            post:action.payload,
            error:""
        }
        case 'FETCH_ERROR':
            return { 
             loading: false,
             post:{},
             error:action.payload
         }
    default:
        return state;
    }
}

const DataFetchingTwo = () => {
 const [state , dispatch]  = useReducer(reducer  ,initialState)
 
 useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
       dispatch({type:"FETCH_SUCCESS" , payload:response.data})
    })
    .catch(error =>{
        console.log(error)
      dispatch({type:"FETCH_ERROR" , payload:error.message})
    })
  },[])
 
 return (
    <div>
    {state.loading ? 'Loading' : state.post.title}
    {state.error ? state.error : null}
   </div>
  )
}

export default DataFetchingTwo;