import { useEffect, useState } from "react";

const LastSales = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://practice-next-250c4-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((data) => {
        const transformedSales = [];
        for (let key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume
          });
        }
        setSales(transformedSales);
        setLoading(false);
      }); // add json at the end
  }, []);
  if (loading) {
    return <h4>Loading .....</h4>;
  }
  console.log(sales);
  const array = sales.map((sale) => (
    <li key={sale.id}>
      {sale.username} - ${sale.volume}
    </li>
  ));
  return <ul>{array}</ul>;
};

export default LastSales;
