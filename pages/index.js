import fs from "fs/promises";
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

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data.products
    }
  };
}
export default HomePage;
