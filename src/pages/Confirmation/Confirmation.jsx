import React from "react";

const Confirmation = () => {
  return (
    <div className="mt-24 px-4 md:px-12 lg:px-20 text-center">
      <h1 className="text-3xl font-bold mb-4">Merci pour votre commande 🎉</h1>
      <p className="text-gray-600">
        Votre commande a bien été enregistrée. Vous recevrez un email de
        confirmation sous peu.
      </p>
    </div>
  );
};

export default Confirmation;
