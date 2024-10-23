function ordonne (arr) {
    return arr.sort(function (a,b) {
        return a - b;
      });
}
//autrement fait
function ordonne(arr) {
    // Utiliser la méthode sort avec une fonction de comparaison pour trier les nombres
    return arr.sort(function (a, b) {
        return a - b; // Tri en ordre croissant
    });
}

// Test de la fonction
let numbers = [10, 3, 15, 7, 1];
console.log(ordonne(numbers)); // Résultat: [1, 3, 7, 10, 15]
