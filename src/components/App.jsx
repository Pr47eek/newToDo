import React, { useState } from "react";

function App() {
  const [item, setitem] = useState("");
  const [itemList, setItemList] = useState([]);

  function eventHandle(event) {
    const value = event.target.value;
    setitem(value);
  }

  function listItems() {
    setItemList((prevValue) => {
      return [...prevValue, item];
    });
    setitem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={eventHandle} type="text" value={item} />
        <button>
          <span onClick={listItems}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.map((items) => (
            <li>{items}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
