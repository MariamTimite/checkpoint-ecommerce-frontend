import React, { useEffect, useState } from "react";
import { ProductCard } from "../../components";
import { fetchAllProducts } from "../../api/productApi";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // état pour le clignotement du texte
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchAllProducts();

        // Limiter à 12 produits
        setProducts(data.slice(0, 12));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getProducts();

    // Crée un intervalle pour faire clignoter uniquement le texte
    const interval = setInterval(() => {
      setIsVisible((prevState) => !prevState);
    }, 1000);
    // Nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="pt-28 text-center">Chargement...</div>;
  if (error)
    return <div className="pt-28 text-center text-red-500">{error}</div>;

  return (
    <div className="pt-28 px-8">
      {/* Applique uniquement le clignotement au texte "Nouveaux produits" */}
      <h1
        className={`text-2xl font-bold mb-6 text-[#ee1211] ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        Nouveaux produits
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
