import React from "react";

export default function TravelItem({
  description,
  id,
  quantity,
  packed,
  handleChecked,
  handleDelete,
}) {
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        onChange={() => handleChecked(id)}
      />
      <span style={packed ? { textDecoration: "line-through" } : undefined}>
        {quantity}
        {description}
      </span>
      <button onClick={() => handleDelete(id)}>❌</button>
    </li>
  );
}
