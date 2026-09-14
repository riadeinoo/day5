/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 16 · NIVEAU 3 : DÉFI (AVANCÉS)
 * EXTRACTION DE HASHTAGS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * À partir d'un tweet : "Beau temps à #Nador aujourd'hui avec la team #YouCode !", extrayez tous les hashtags et retournez-les dans un tableau ["#Nador", "#YouCode"].
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-16
 * ▶️ Commande : node day04/exercices/exercice-16.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let tweet = "Beau temps à #Nador aujourd'hui avec la team #YouCode !"
let dex = 0
let temp
let tags = []
for (let x = 0; x < tweet.length; x++){
    dex += 1
    if (tweet[dex] === "#"){
    tags = tweet.slice(dex)
    }
}
console.log(tags)