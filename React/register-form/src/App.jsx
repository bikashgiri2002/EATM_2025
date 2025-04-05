import React from "react";
import RegisterForm from "./components/RegisterForm";

const App = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl">Register Form</h1>
      <div className="flex justify-center items-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default App;
