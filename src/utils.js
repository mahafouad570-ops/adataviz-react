
export function formaterDonnee(arbre) {
    return {
        id: arbre.arbres_idbase + "-" + arbre.com_url_pdf,
        nom: arbre.arbres_libellefrancais,
        nomLatin: arbre.com_nom_latin,
        categorie: arbre.com_qualification_rem,
        adresse: arbre.arbres_adresse,
        arrondissement: arbre.arbres_arrondissement,
        hauteur: arbre.arbres_hauteurenm,
        photo:arbre.com_url_photo1,

        resume: arbre.com_resume,
        anneePlantation: arbre.com_annee_plantation,
    }
}

export function filtrerParArrondissement(arbres, arrondissement) {
    if (arrondissement === "") {
        return arbres
    }
    return arbres.filter(arbre => arbre.arrondissement === arrondissement)
}