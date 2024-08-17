import "./App.css";
import {
  increment,
  decrement,
  incrementByValue,
  decrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center pt-3 px-5">
        <div className="text-center border border-purple-300 p-10 bg-slate-300 rounded-md">
          <h1 className="text-3xl font-bold">React with Redux</h1>
          <div>
            <div className="my-3">
              <p className="text-xl font-bold">
                Count:{" "}
                <span className="font-mono font-extralight">{count} </span>
              </p>
            </div>
            <button
              onClick={() => dispatch(increment())}
              className="btn bg-purple-600 text-white font-semibold p-2 rounded mr-2"
            >
              Increament
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className="btn bg-red-600 text-white font-semibold p-2 rounded"
            >
              Decrement
            </button>
          </div>
          <div className="mt-5">
            <button
              onClick={() => dispatch(incrementByValue(5))}
              className="btn bg-purple-600 text-white font-semibold p-2 rounded mr-2"
            >
              Increament By Value
            </button>
            <button
              onClick={() => dispatch(decrementByValue(5))}
              className="btn bg-red-600 text-white font-semibold p-2 rounded"
            >
              Decrement By Value
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
