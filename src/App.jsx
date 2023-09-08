import './App.css'
import Team from './Team';
import Counter from './counter'
import Users from './Users'
import Friends from './Friends';

function App() {
 function handelClick() {
  alert('button clicked');
 }
 const handelClick2 = () =>{
  alert("Click me handel click 2")
 }

const addToFive = (num) =>alert(num + 5);


  return (
    <>
        <Friends></Friends>
        <Users></Users>
        <Team></Team>
        <Counter></Counter>
      <h3>React core concepts recap</h3>
      <button onClick={handelClick}>Click me!</button>
      <button onClick={handelClick2}>Click me2!</button>
      <button onClick={()=>{ alert('Third button click')}}>Click me3!</button>
      {/* Vajailla :D */}
      <button onClick={()=>addToFive(5)}>Four</button>
    </>
  )
}

export default App
