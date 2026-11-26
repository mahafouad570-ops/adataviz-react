import { useState, useEffect } from "react";
import Entete from "./Entete.jsx";
import Carte from "./Carte.jsx";
import { formaterDonnee, filtrerParArrondissement } from "./utils.js";
import "./App.css";
const url =
  "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/arbresremarquablesparis/exports/json";

export default function App() {
  const [recherche, setRecherche] = useState("");
  const [arbres, setArbres] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [messageErreur, setMessageErreur] = useState("");
  const [arrondissement, setArrondissement] = useState("");

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

  const arrondissements = [
    ...new Set(arbres.map((arbre) => arbre.arrondissement)),
  ].sort();
  const visibles = filtrerParArrondissement(arbres, arrondissement).filter(
    (arbre) =>
      (arbre.nom || "").toLowerCase().includes(recherche.toLowerCase()),
  );
  return (
    <>
      <Entete />
      <main>
        {chargement && <p role="status">Chargement des arbres...</p>}
        {messageErreur && (
          <p role="alert">
            Impossible de charger les arbres ({messageErreur}).
          </p>
        )}
        {!chargement && !messageErreur && arbres.length === 0 && (
          <p>Aucun arbre à afficher pour le moment.</p>
        )}
        <section className="filtres">
          <label htmlFor="recherche">Rechercher un arbre</label>
          <input
            id="recherche"
            type="search"
            value={recherche}
            onChange={(event) => setRecherche(event.target.value)}
          />
          <label htmlFor="arrondissement">Arrondissement</label>
          <select
            id="arrondissement"
            value={arrondissement}
            onChange={(event) => setArrondissement(event.target.value)}
          >
            <option value="">Tous les arrondissements</option>
            {arrondissements.map((nom) => (
              <option key={nom} value={nom}>
                {nom}
              </option>
            ))}
          </select>
        </section>
        <p className="compteur">{visibles.length} arbres remarquables</p>
        <section className="cartes">
          {visibles.map((arbre, index) => (
            <Carte key={arbre.id} {...arbre} offset={`${Math.min(index, 20) * 0.05}s`} />
          ))}
        </section>
        {visibles.length === 0 && (
          <p>Aucun arbre ne correspond à ta recherche.</p>
        )}
      </main>
    </>
  );
}
