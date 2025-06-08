const BASE_URL = "https://checkpoint-ecommerce-backend.onrender.com";

export async function fetchAllProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Erreur lors du chargement des produits");

  const data = await res.json();

  // Ajoute un log pour voir ce que tu reçois exactement
  // console.log("🔍 Données reçues depuis l'API /products :", data);

  // Si data est de la forme { products: [...] }, retourne data.products
  if (Array.isArray(data)) return data;
  if (Array.isArray(data.products)) return data.products;

  // Sinon, retourne un tableau vide par défaut
  return [];
}

export async function fetchProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error("Produit introuvable");
  return await res.json();
}
