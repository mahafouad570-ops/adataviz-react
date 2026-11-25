import { useState } from "react";
import Entete from "./Entete.jsx";
import Carte from "./Carte.jsx";
import { donnees } from "./donnees.js";
import "./App.css";

export default function App() {
  const [recherche, setRecherche] = useState("");
  const visibles = donnees.filter((arbre) =>
    arbre.nom.toLowerCase().includes(recherche.toLowerCase())

  );
  return (
    <>
    <Entete />
    <main>
      <label htmlFor="recherche">Rechercher un arbre</label>
      <input
       id="recherche"
       type="search"
       value={recherche}
       onChange={(event) => setRecherche(event.target.value)} 
       />
       <p>Tu cherches: {recherche}</p>
    <p className="compteur">{visibles.length} arbres remarquables</p>
    <section className="cartes">
      {visibles.map((arbre) => (
        <Carte key={arbre.id} {...arbre} />
      ))}
    </section>
    {visibles.length === 0 && <p>Aucun arbre ne correspond à ta recherche.</p>}
    </main>
    </>
  );
}
