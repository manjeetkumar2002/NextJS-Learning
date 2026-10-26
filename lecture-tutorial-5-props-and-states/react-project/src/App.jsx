// props (parent-child communication) and states (component-level data management)
// props are used to pass data from parent to child components, while states are used to manage data within a component.
// In this example, we will create a simple counter application that demonstrates the use of props and states in React.
// props are immutable, meaning they cannot be changed by the child component, while states are mutable and can be changed by the component itself.
import {useState} from 'react'
import Child from './Child'
function App() {
  const [name, setName] = useState('Mohit') // state
  const [count, setCount] = useState(0) // state
  return ( 
    <div>
      <h1>Hello, {name}!</h1>
      {/* props example */}
     <Child title="ReactJs course"/>
     <Child title="NextJs course"/>
      {/* states example */}
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default App
