import { useState } from "react";

export default function Carte({ nom, nomLatin, categorie, adresse, hauteur, photo, resume, anneePlantation }) {
    const [ouvert, setOuvert] = useState(false);
    return (
        <article className="carte">
            <span className="badge">{categorie}</span>
            <img className="carte-image" src={photo} alt={nom} />
            <h2>{nom}</h2>
            <p className="nom-latin">{nomLatin}</p>
            <p className="adresse">{adresse}</p>
            <p className="hauteur">Hauteur : {hauteur} m</p>
            <button type="button" onClick={() => setOuvert(!ouvert)}>
                {ouvert ? "Masquer les détails" : "Voir les détails"}
            </button>
            {ouvert && (
                <div className="details">
                    <p>{resume}</p>
                    <p>Planté en {anneePlantation}</p>
                </div>
            )}
        </article>
    )
}