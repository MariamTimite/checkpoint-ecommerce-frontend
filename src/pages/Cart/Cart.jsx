import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from "../../features/cart/cartSlice";
import { StripeCheckoutForm } from "../../components";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-24 px-4 md:px-12 lg:px-20">
      <h1 className="text-3xl font-bold mb-6">Votre panier</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Votre panier est vide.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Liste des produits */}
          <div className="flex-1">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between border-b py-4"
              >
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">
                    {item.description?.slice(0, 60)}...
                  </p>
                  <p className="text-indigo-600 font-bold">
                    {(item.price * item.quantity).toFixed(2)} €
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => dispatch(decrementQuantity(item._id))}
                    className="px-3 py-1 bg-gray-200 rounded-full text-xl font-bold"
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementQuantity(item._id))}
                    className="px-3 py-1 bg-gray-200 rounded-full text-xl font-bold"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removeFromCart(item._id))}
                    className="text-red-500 text-sm ml-4"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={() => dispatch(clearCart())}
              className="mt-6 text-sm text-red-600 underline"
            >
              Vider le panier
            </button>
          </div>

          {/* Résumé du panier */}
          <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-xl shadow-md h-fit">
            <h2 className="text-xl font-bold mb-4">Résumé du panier</h2>
            <div className="flex justify-between text-lg mb-2">
              <span>Sous-total</span>
              <span className="font-semibold">{totalPrice.toFixed(2)} €</span>
            </div>
            <p className="text-sm text-green-600 mb-4">
              Les articles Mabootik Shop sont éligibles à la livraison gratuite
              🚚
            </p>
            <StripeCheckoutForm />
          </div>
        </div>
      )}
    </div>
  );
}
