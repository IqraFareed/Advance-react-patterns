import React , {useEffect ,useState} from 'react'
import HOC from '../HOC'
const UserList = ({data}) => {
    // const [users , setUsers] = useState([]);
    // const [term , setTerm] = useState('')
    // useEffect(()=>{
     
    //     const fetchUsers = async () =>{
    //         const res = await fetch('https://jsonplaceholder.typicode.com/users')
    //         const json= await res.json()
    //         setUsers(json)
    //         console.log(json)
    //     }
    //     fetchUsers()
    // },[]);
    let renderUser = data?.map((user)=>{
        return(
            <div key={user.id}> 
            <p>
                <strong>{user.name}</strong>
            </p>
            </div>
        )
    })
    // let filteredUsers= users.filter(({name})=>{
    //     return name.indexOf(term) >=0
    // }).map((user)=>{
    //     return(
    //         <div key={user.id}> 
    //         <p>
    //             <strong>{user.name}</strong>
    //         </p>
    //         </div>
    // )})
  return (
  <div>

  
    <div>{renderUser}</div>
    </div>
  )
}
const SearchUsers = HOC(UserList , 'users')
export default SearchUsers;