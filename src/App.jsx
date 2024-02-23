import React from "react";
import Logo from "./component/Logo";
import Form from "./component/Form";
import TravelList from "./component/TravelList";
import Stat from "./component/Stat";

export default function App() {
  const [items, setItems] = React.useState([]);
  const addItems = (item) => {
    setItems((items) => {
      return [...items, item];
    });
  };
  const handleChecked = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Logo />
      <Form addItems={addItems} />
      <TravelList
        items={items}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      <Stat />
    </div>
  );
}
