import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice"; // Assurez-vous que le chemin est correct

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  // console.log(product);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-lg hover:scale-105 transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-xl"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{product.description}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-[#ffd814] text-black px-4 py-2 rounded-xl hover:bg-[#f7e37e] transition"
      >
        Ajouter au panier
      </button>
    </div>
  );
}
