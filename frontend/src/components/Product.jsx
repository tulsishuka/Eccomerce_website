import axios from "axios";
import React, { useEffect, useState } from "react";
const ProductCard = ({ name, image, price }) => (
  <div
    style={{
      border: "2px solid #D33649",
      borderRadius: "8px",
      padding: "20px",
      textAlign: "center",
      width: "180px",
      height: "240px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <img
      src={`http://localhost:3000/${image}`}
      alt={name}
      style={{
        maxWidth: "100%",
        maxHeight: "130px",
        objectFit: "contain",
        marginBottom: "10px",
      }}
    />
    <p>{name}</p>
    <p>₹ {price}</p>
  </div>
);

const Product = () => {
  const [products, setProducts] = useState([]);

  // 🔥 Fetch products from backend
  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/v1/product"
      );

      setProducts(res.data.data); // your backend sends { data: [...] }
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product._id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;