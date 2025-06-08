import React, { useEffect, useState } from "react";
import { ProductCard } from "../../components";
import { fetchAllProducts } from "../../api/productApi";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchAllProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) return <div className="pt-28 text-center">Chargement...</div>;
  if (error)
    return <div className="pt-28 text-center text-red-500">{error}</div>;
  return (
    <div className="pt-28 px-8">
      <h1 className="text-3xl font-bold mb-6">Tous nos produits</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
