import React from "react"
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn } from './actions/index';

function App() {
  const counter = useSelector(state => state.counter)
  const isLoggedIn = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter = {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <br></br>
        <button onClick={() => dispatch(signIn())}>{isLoggedIn ? "Log Out" : "Log In"}</button>
        {isLoggedIn ? <h3>Valuable info I should see..</h3> : ''}
      </header>
    </div>
  );
}

export default App;

