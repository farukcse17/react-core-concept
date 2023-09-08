import { useState } from 'react'
import './Team.css'
export default function Team(){

        const [player, setPlayer] = useState(11);
    
        const addPlayer = () =>{
            // const newPlayer = player + 1;
            // setPlayer(newPlayer);
            setPlayer(player+1);
        }
        const removePlayer = () =>{
            setPlayer(player-1)
        }

    return(
        <div className="team">
            <h3>Players: {player}</h3>
            <button onClick={addPlayer}>Add Player</button>
            <button onClick={removePlayer}>Reduce Player</button>
        </div>
    )
}