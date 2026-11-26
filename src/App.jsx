import { useState, useEffect } from "react";
import Entete from "./Entete.jsx";
import Carte from "./Carte.jsx";
import { formaterDonnee } from "./utils.js";
import "./App.css";
const url =   "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/arbresremarquablesparis/exports/json";

export default function App() {
  const [recherche, setRecherche] = useState("");
  const [arbres, setArbres] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [messageErreur, setMessageErreur] = useState("");

  useEffect(() => {
    const charger = async () => {
      try {
        const reponse = await fetch(url);
        if (!reponse.ok) {
          throw new Error("Error HTTP " + reponse.status);
        }
        const donneeApi = await reponse.json();
        setArbres(donneeApi.map(formaterDonnee));
      } catch (erreur) { 
        setMessageErreur(erreur.message);
    } finally {
      setChargement(false);
  }
};

charger();
}, []);
  const visibles = arbres.filter((arbre) =>
    (arbre.nom || "").toLowerCase().includes(recherche.toLowerCase())

  );
  return (
    <>
    <Entete />
    <main>
      {chargement && <p role="status">Chargement des arbres...</p>}
      {messageErreur && (
        <p role="alert">Impossible de charger les arbres ({messageErreur}).</p>
      )}
      {!chargement && !messageErreur && arbres.length === 0 && (
        <p>Aucun arbre à afficher pour le moment.</p>
      )}
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
