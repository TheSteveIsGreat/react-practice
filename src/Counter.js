import {useState} from 'react'

const Counter = (props) => {
  const [count, setCount ] = useState(0)
  return (
    <>
      <h1>Counter</h1>
      <h3>count: {count}</h3>
      <button onClick={()=> setCount(count + 1)}>add</button>
      <button onClick={()=> setCount(count - 1)}>minus</button>
    </>
  );
}

export default Counter;