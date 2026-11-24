export default function Carte({ nom, nomLatin, categorie, adresse, hauteur, photo }) {
    return (
        <article className="carte">
            <span className="badge">{categorie}</span>
            <img className="carte-image" src={photo} alt={nom} />
            <h2>{nom}</h2>
            <p className="nom-latin">{nomLatin}</p>
            <p className="adresse">{adresse}</p>
            <p className="hauteur">Hauteur : {hauteur} m</p>
        </article>
    )
}