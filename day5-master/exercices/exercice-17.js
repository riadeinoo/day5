/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * LE CHIFFRE DE CÉSAR (CRYPTOGRAPHIE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction chiffrerCesar(texte, decalage) qui décale chaque lettre de l'alphabet. Par exemple, avec un décalage de 1, "ABC" devient "BCD".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day04/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function chiffrerCesar(texte, decalage) {
    let resultat = '';
    for (let i = 0; i < texte.length; i++) {
        let char = texte[i];
        if (char >= 'A' && char <= 'Z') {
            let code = char.charCodeAt(0);
            let newCode = ((code - 65 + decalage) % 26) + 65;
            resultat += String.fromCharCode(newCode);
        } else if (char >= 'a' && char <= 'z') {
            let code = char.charCodeAt(0);
            let newCode = ((code - 97 + decalage) % 26) + 97;
            resultat += String.fromCharCode(newCode);
        } else {
            resultat += char;
        }
    }
    return resultat;
}

const texte = "ABC";
const decalage = 1;
console.log(chiffrerCesar(texte, decalage)); // Output: "BCD"   