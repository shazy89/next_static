import path from "path";

const HomePage = () => {
  return (
    <ul>
      <li>Product 1 </li>
      <li>Product 2</li>
      <li>Product 3</li>
    </ul>
  );
};

//export async function getStaticProps(context) {
// const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
// const jsonData = await fs.readFile(filePath);
// const data = JSON.parse(jsonData);
// if (!data) {
//   return {
//     redirect: {
//       destination: "the/path"
//     }
//   };
// }
// if (data.products.length === 0) {
//   return { notFound: true };
// }
// return {
//   props: {
//     products: data.products
//   },
//   revalidate: 10
// };
//}
export default HomePage;
