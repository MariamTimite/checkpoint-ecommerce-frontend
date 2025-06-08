import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../../api/productApi";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id);
        console.log("Produit récupéré:", data);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  if (loading)
    return <div className="pt-28 text-center">Chargement du produit...</div>;
  if (error)
    return <div className="pt-28 text-center text-red-500">{error}</div>;
  console.log(product);
  return (
    <div className="pt-28 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover rounded-xl"
        />
        <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <p className="mt-4 font-bold text-xl">{product.price.toFixed(2)} €</p>
      </div>
    </div>
  );
}
