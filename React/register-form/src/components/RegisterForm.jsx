import { useState } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [no, setNo] = useState("");
  const [gender, setGender] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // API CAll
    // { name: name, email : email, number: no, gender : gender}
    console.log(name);
    console.log(email);
    console.log(no);
    console.log(gender);
    
  };
  return (
    <div className="h-[600px] w-[400px] bg-gray-200 mt-2 rounded-lg flex flex-col justify-center items-center">
      <form>
        <div className="h-10 my-2">
          <label htmlFor="name">Name : </label>
          <input
            className="border px-2"
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="h-10 my-2">
          <label htmlFor="email">Email : </label>
          <input
            className="border"
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="h-10 my-2">
          <label htmlFor="no">Mobile : </label>
          <input
            className="border"
            type="number"
            id="no"
            value={no}
            onChange={(e) => {
              setNo(e.target.value);
            }}
          />
        </div>
        <div className="h-10 my-2">
          <input
            className="m-1"
            type="radio"
            name="gender"
            id="male"
            value={"male"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          <label className="mr-2" htmlFor="male">
            Male
          </label>
          <input
            className="m-1"
            type="radio"
            name="gender"
            id="female"
            value={"female"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          <label className="mr-2" htmlFor="female">
            Female
          </label>
          <input
            className="m-1"
            type="radio"
            name="gender"
            id="other"
            value={"other"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          <label className="mr-2" htmlFor="other">
            Other
          </label>
        </div>
        <div className="flex justify-center items-center h-10 my-2">
          <button className="bg-blue-400 border rounded-lg p-2" type="submit"
          onClick={handleSubmit}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;