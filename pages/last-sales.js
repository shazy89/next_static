import { useEffect, useState } from "react";
import useSWR from "swr";
const LastSales = () => {
  const [sales, setSales] = useState();
  // const [loading, setLoading] = useState(false);
  const { data, error } = useSWR(
    "https://practice-next-250c4-default-rtdb.firebaseio.com/sales.json"
  );
  useEffect(() => {
    if (data) {
      const transformedSales = [];
      for (let key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume
        });
      }
      setSales(transformedSales);
    }
  }, [data]);
  // useEffect(() => {
  //   setLoading(true);
  //   fetch("https://practice-next-250c4-default-rtdb.firebaseio.com/sales.json") // add json at the end
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       const transformedSales = [];
  //       for (let key in data) {
  //         transformedSales.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume
  //         });
  //       }
  //       setSales(transformedSales);
  //       setLoading(false);
  //     });
  // }, []);

  if (error) {
    return <p>Failed to load</p>;
  }
  if (!sales || !data) {
    return <p>Loadin ....</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
};

export default LastSales;
