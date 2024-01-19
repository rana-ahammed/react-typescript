import { useReducer } from 'react';

const Counter = () => {
  const initialState = {
    count: 0,
  };

  type CounterStateType = {
    count: number;
  };

  const INCREMENT = 'INCREMENT';
  const INCREMENTBYPAYLOAD = 'INCREMENTBYPAYLOAD';
  const RESET = 'RESET';
  const DECREMENT = 'DECREMENT';

  type IncrementActionType = { type: typeof INCREMENT };
  type IncrementByPayloadType = {
    type: typeof INCREMENTBYPAYLOAD;
    payload: number;
  };
  type ResetActionType = { type: typeof RESET };
  type DecrementActionType = { type: typeof DECREMENT };

  type CounterActionType =
    | IncrementActionType
    | IncrementByPayloadType
    | ResetActionType
    | DecrementActionType;

  const reducer = (state: CounterStateType, action: CounterActionType) => {
    switch (action.type) {
      case INCREMENT:
        return { count: state.count + 1 };
      case INCREMENTBYPAYLOAD:
        return { count: state.count + action.payload };
      case RESET:
        return { count: 0 };
      case DECREMENT:
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: INCREMENT });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: INCREMENTBYPAYLOAD, payload: 10 });
        }}
      >
        IncrementByPayload
      </button>
      <button
        onClick={() => {
          dispatch({ type: RESET });
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch({ type: DECREMENT });
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
