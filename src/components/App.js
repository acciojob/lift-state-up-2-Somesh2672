
// import React from "react";
// import './../styles/App.css';

// const App = () => {
// const [child, useChild] = useState("");


// const handleInput = (event) =>{
//   useChild(event.target.value);
// }




//   return (
//     <div>
        


//     </div>
//   )
// }

// export default App




import React, { useState } from "react";
import "./../styles/App.css";

const Parent = () => {
  const [inputValue, setInputValue] = useState(""); // State in the parent component

  // Function to update inputValue when the child component changes it
  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p>{inputValue}</p>

      {/* Child component with inputValue passed as prop */}
      <Child inputValue={inputValue} onInputChange={handleInputChange} />
    </div>
  );
};

const Child = ({ inputValue, onInputChange }) => {
  // Function to handle input changes in the child component
  const handleInput = (event) => {
    const newValue = event.target.value;
    onInputChange(newValue); // Call the parent's function to update inputValue
  };

  return (
    <div className="child">
      <h3>Child Component</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleInput}
        placeholder="Type here..."
      />
      {/* <p>Child's inputValue: {inputValue}</p> */}
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Parent />
    </div>
  );
};

export default App;
