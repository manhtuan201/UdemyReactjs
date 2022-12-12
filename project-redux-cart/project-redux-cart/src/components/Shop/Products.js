import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMY_PRODUCTS = [
    {
      id: "p1",
      price: 6,
      title: "Book",
      description: "The first book I ever read",
    },

    {
      id: "p2",
      price: 5,
      title: "Car",
      description: "The first car I ever drive",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
          id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            key={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
