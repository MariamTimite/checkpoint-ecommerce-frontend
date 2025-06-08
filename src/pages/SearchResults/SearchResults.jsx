import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchAllProducts } from "../../api/productApi";
import { ProductCard } from "../../components";

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query")?.toLowerCase() || "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchAllProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  if (loading) return <div className="pt-28 text-center">Chargement...</div>;
  if (error)
    return <div className="pt-28 text-center text-red-500">{error}</div>;

  return (
    <div className="pt-28 px-8">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
        Résultats pour : "<span className="italic">{query}</span>"
      </h2>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">
          Aucun produit trouvé pour cette recherche.
        </p>
      )}
    </div>
  );
};

export default SearchResults;
