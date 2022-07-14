import React  from 'react'
import HOC from '../HOC'
const TodoList = ({data}) => {


    let renderUser = data?.slice(0,10).map((todo)=>{
        return(
            <div key={todo.userId}> 
            <p>
                <strong>{todo.title}</strong>
            </p>
            </div>
        )
    })
   
   
  return (
  <div>
    
    
   
    <div>{renderUser}</div>
    </div>
  )
}

const SearchTodoList= HOC(TodoList, 'todos');
export default SearchTodoList;