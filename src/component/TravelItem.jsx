import React from "react";

export default function TravelItem({ description, id, quantity, packed }) {
  return (
    <li>
      {quantity}
      {description}
    </li>
  );
}
