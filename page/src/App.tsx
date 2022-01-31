import { useReducer } from "react";
import './App.css'

type CountState = {
    count: number
}

type UpdateState = {
    type: "increment" | "decrement"
    payload: number
}

type ResetAction = {
    type: "reset"
}

type CounterAction = UpdateState | ResetAction

const initialState = {count:0}

function reducer(state: CountState, action: CounterAction){
    switch (action.type){
        case "increment":
            return {
                count: state.count + action.payload
            }
        case "decrement":
            return {
                count: state.count - action.payload
            }
        case "reset":
            return initialState
        default:
            return state
    }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="app">
      <div>
        <div className="count">
          <h3>Count</h3>
          <h1>{state.count}</h1>
        </div>
        <div className="buttons">
          <button onClick={() => dispatch({type: "increment", payload:10})}>+10</button>
          <button onClick={() => dispatch({type: "decrement", payload:10})}>-10</button>
        <button onClick={() => dispatch({type: "reset"})}>R</button>
        </div>
      </div>
    </div>
  );
}

export default App;
