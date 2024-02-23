import React from "react";
import TravelItem from "./TravelItem";

export default function TravelList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return <TravelItem {...item} key={item.id} />;
      })}
    </ul>
  );
}
