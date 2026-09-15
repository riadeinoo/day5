/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPTEUR D'OCCURRENCES DE LETTRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui compte combien de fois la lettre "e" (minuscule ou majuscule) apparaît dans un long paragraphe.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day04/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let para = "bonjour tt le monde je suis riadeino je vais inshallah apprendre le javascript et faire boucoup dajan et la mala sera gainx"
let count=0
function compte(para){
for (let x = 0; x< para.length; x++){
    
    if (para[x] === "e")
        count += 1
}
return count
}
console.log(compte(para))