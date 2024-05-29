import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 px-2 left-0 right-0">
          <div className="px-4 py-2 overflow-hidden flex flex-wrap gap-3 bg-white rounded-xl shadow-lg">
            <button
              onClick={function () {
                setColor("red");
              }}
              className="px-8 py-2 text-black outline-none rounded-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={function () {
                setColor("blue");
              }}
              className="px-8 py-2 text-black outline-none rounded-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={function () {
                setColor("yellow");
              }}
              className="px-8 py-2 text-black outline-none rounded-lg"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={function () {
                setColor("green");
              }}
              className="px-8 py-2 text-black outline-none rounded-lg"
              style={{ backgroundColor: "green" }}
            >
              green
            </button>
            <button
              onClick={function () {
                setColor("pink");
              }}
              className="px-8 py-2 text-black outline-none rounded-lg"
              style={{ backgroundColor: "pink" }}
            >
              pink
            </button>
            <button
              onClick={function () {
                setColor("violet");
              }}
              className="px-8 py-2 text-black outline-none rounded-lg"
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
