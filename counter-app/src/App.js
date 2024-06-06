import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCount((preState) => preState - 1);
  };
  return (
    <div >
      
      <button onClick={increment}>Increment</button>
        <span  sx={{color: 'red'}}>{count}</span>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
