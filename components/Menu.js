import Product from "./Product";

const Menu = ({ products }) => {
  return (
    <div className="text-black">
      {products.map(({ id, title, price, description, category, image }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))}
    </div>
  );
};

export default Menu;
