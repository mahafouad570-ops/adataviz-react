import Entete from "./Entete.jsx";
import Carte from "./Carte.jsx";
import { donnees } from "./donnees.js";
import "./App.css";

export default function App() {
  return (
    <>
    <Entete />
    <main>
    <p className="compteur">{donnees.length} arbres remarquables</p>
    <section className="cartes">
      {donnees.map((arbre) => (
        <Carte key={arbre.id} {...arbre} />
      ))}
    </section>
    </main>
    </>
  );
}
