import { useEffect, useState } from "react"

export default function Users(){
    // declare state here
    const [users, setUsers] = useState([]);

    // use useEffect
    useEffect (() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    return(
        <div>
            <h3>Users: {users.length} </h3>
        </div>
    )
}