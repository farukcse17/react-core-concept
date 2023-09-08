import Friend from './Friend';
import './Friends.css'
import { useEffect, useLayoutEffect, useState } from "react"

export default function Friends(){

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data));
    }, [])

    return(
        <div className="box">
            <h3>
                Friends: {friends.length}
            </h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
                }
        </div>
    )
}