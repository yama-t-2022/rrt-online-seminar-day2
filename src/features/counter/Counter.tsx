//import React from "react";
import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "./counterSlice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment 10
        </button>

        <button
          aria-label="Increment async value"
          onClick={() => dispatch(incrementAsync())}
        >
          Increment async
        </button>

        {/* 1:30付近  非同期 Wait */}
      </div>
    </div>
  );
}
