import { useRef } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const boxReffernce = useRef(null);
  const changeBackgroundColor = (color) => {
    // document.getElementById("box").style.backgroundColor = "green";
    boxReffernce.current.style.backgroundColor = color;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Background Color Changer</h1>
        <div
          ref={boxReffernce}
          style={{ height: "200px", width: "200px", border: "2px solid black" }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            Box
          </h2>
        </div>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <Button color = "red" changeColor={changeBackgroundColor} />
          <Button color={"blue"} changeColor={changeBackgroundColor} />
          <Button color={"yellow"} changeColor={changeBackgroundColor} />
        </div>
      </div>
    </>
  );
}

export default App;
