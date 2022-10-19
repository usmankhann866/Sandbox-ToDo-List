import React, { useState } from "react";

const App = () => {
  // its a state contain the value enter into the input box
  const [inputText, setInput] = useState("");
  //  its a state contain the an empty array
  const [items, setItems] = useState([]);

  // This function set the "inputText" with the new value enter into the input box
  const handeInput = (event) => {
    const newVal = event.target.value;
    setInput(newVal);
  };

  // This function save the previous item and the new item into the empty array
  const addItem = () => {
    setItems((preVal) => {
      return [...preVal, inputText];
    });
    // To set the input box empty after the press of add button
    setInput("");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handeInput} value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* It will display the list of item from the array created 
          the map function will give through each item of the array */}
          {items.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
