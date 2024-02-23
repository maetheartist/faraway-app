import React from "react";
import TravelItem from "./TravelItem";

export default function TravelList({ items, handleChecked, handleDelete }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <TravelItem
            {...item}
            key={item.id}
            handleChecked={handleChecked}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
}
