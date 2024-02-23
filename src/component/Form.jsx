import React from "react";

export default function Form({ addItems }) {
  const [quantity, setQuantity] = React.useState(1);
  const [description, setDescription] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    addItems(newItem);
    setDescription("");
    setQuantity();
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <select
        name="quantity"
        id="quantity"
        value={quantity}
        onChange={(event) => {
          setQuantity(Number(event.target.value));
        }}
      >
        {Array.from({ length: 40 }, (_, i) => {
          return i + 1;
        }).map((number) => {
          return (
            <option value={number} key={number}>
              {number}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="enter items"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>add items</button>
    </form>
  );
}
