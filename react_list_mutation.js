// Code tested in App.js on a new React template in https://codesandbox.io/

import { useState } from "react";

function List(props) {
  return (
    <div className="List">
      {props.items.map((item, idx) => (
        <li>
          {idx} - {item.message}
        </li>
      ))}
    </div>
  );
}

export default function App() {
  let [mutCount, setMutCount] = useState(0);
  let [items, setItems] = useState([
    { message: "Foo" },
    { message: "Bar" },
  ]);
  let mutItems = () => {
    items[0].message += "s"; // The idiomatic way to do this is to create a new list and call setItems with the new list
    setMutCount(mutCount + 1); // Note if this isn't done, the update to items never occurs. This is even if we mutate the list and then call setItems(items)
    console.log("mut");
  };
  return (
    <div className="App">
      <p>mut count: {mutCount}</p>
      <List items={items} />
      <button onClick={mutItems}>mutate</button>
    </div>
  );
}
