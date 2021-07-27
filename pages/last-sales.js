import { useEffect, useState } from "react";

const LastSales = () => {
  useEffect(() => {
    fetch("https://practice-next-250c4-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((data) => {}); // add json at the end
  }, []);
  return (
    <ul>
      <h1>Hi There</h1>
    </ul>
  );
};

export default LastSales;
