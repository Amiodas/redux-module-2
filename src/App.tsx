import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increament, decreament } from "./redux/features/counterSlice";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
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
              onClick={() => dispatch(increament())}
              className="btn bg-purple-600 text-white font-semibold p-2 rounded mr-2"
            >
              Increament
            </button>
            <button
              onClick={() => dispatch(decreament())}
              className="btn bg-red-600 text-white font-semibold p-2 rounded"
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
