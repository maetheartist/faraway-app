import React from "react";
import Logo from "./component/Logo";
import Form from "./component/Form";
import TravelList from "./component/TravelList";

export default function App() {
  const [items, setItems] = React.useState([]);
  const addItems = (item) => {
    setItems((items) => {
      return [...items, item];
    });
  };
  return (
    <div>
      <Logo />
      <Form addItems={addItems} />
      <TravelList items={items} />
    </div>
  );
}
