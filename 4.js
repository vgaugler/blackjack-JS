

// Déclaration variable
let player = null
let playerScore = 0;
let playerResult = null

let dealer = null
let dealerScore = null
let dealerResult = null
let dealerReponse = null

let carte1 = 0;
let carte2 = 0;
let carte3 = 0;
let carte4 = 0;

let resultat = 0;

// recuperation des element html (score)
let card1player = document.getElementById('carte1player');
let card2player = document.getElementById('carte2player');
let totalcarteplayer = document.getElementById('totalplayer');
let card1dealer = document.getElementById('carte1dealer');
let card2dealer = document.getElementById('carte2dealer');
let totalcartedealer = document.getElementById('dealerscore');
let instructionGame = document.getElementById('instruction');
let yes = document.getElementById('btn-yes');
let no = document.getElementById('btn-no');

card1player.innerHTML = carte1 ;
card2player.textContent = carte2 ;
totalcarteplayer.textContent = playerScore;
card1dealer.textContent = carte3;
card2dealer.textContent = carte4;
totalcartedealer.textContent = dealerScore;

 // fonction coeur
function createHeart() {
  const heart = document.createElement
  ('div');
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  heart.innerText = "💸";

  document.body.appendChild(heart);

  setTimeout(() => {
      heart.remove();
  }, 5000);
}



// Fonction pour les cartes
function drawCard () {
    return Math.floor(Math.random() * 10) + 1;
}

// Fonction Réponse du Dealer
function reponseDealer () {
    dealerReponse = Math.floor(Math.random() * 2) + 1;

    if (dealerReponse === 1) {
        dealerReponse = 'yes'
    } else {
        dealerReponse = 'no'
    }
    return dealerReponse  
}

// fonction choix as
function as(card) {
    if (card === 1){
      let reponse = parseInt(prompt(' voulez vous que la carte AS vaux 11 ou 1 ? (tapez le chiffre souhaitez) '));
      return reponse;  
    } else {
      return card
    }
}

// Début de la partie (pour le joueur)
carte1 = as(drawCard())
carte2 = as(drawCard())
console.log('Player: ' + carte1 + ", " + carte2)
resultat = carte1 + carte2
playerScore += resultat
card1player.innerHTML = carte1 ;
card2player.textContent = carte2 ;
totalcarteplayer.innerHTML = playerScore;
console.log("Player score: " + playerScore)

// Début de la partie (pour le dealer)
as(drawCard())
carte3 = as(drawCard());
console.log('Dealer: ' + carte3)
card1dealer.textContent = carte3;
totalcarteplayer = dealerScore;
resultat = carte3
dealerScore += resultat
card2dealer.textContent = 'hidden';
console.log("Dealer score: " + resultat)



// jeu continue selon le game state (va définir cmt fonctionne les bouttons)
let gameState = 'player';
  
// gestion du click yes 
  yes.addEventListener('click', function(event){
      
  totalcarteplayer = document.getElementById('totalplayer');
  instructionGame.textContent = 'Client , voulez vous tirer une carte';
  
  if (playerScore < 21 && gameState == 'player') {
    carte2 = as(drawCard())
    console.log('Player: ' + carte1)
    resultat = carte2
    playerScore += resultat
    card2player.innerHTML = carte2 ;
    card1player.remove();
    
    totalcarteplayer.textContent = playerScore;

    console.log("Player score: " + playerScore)

// gestion si client va plus que 21

    if ( playerScore === 21) {
      instructionGame.textContent = 'Client a gagné ;)';
     } else if ( playerScore > 21) {
      instructionGame.textContent = 'Vous avez était trop téméraire ! vous perdez! ;)';
     }

    
  } else {
    gameState == 'dealer';
  }
});

// gestion bouton no

  no.addEventListener('click', function(event){

// passe le game state sur dealer   

    gameState = 'dealer';
    instructionGame = document.getElementById('instruction');
    instructionGame.textContent = 'à la maison de jouer';

// boucle du croupier  (manque un delay)

    while (dealerScore < 17) {
      
      totalcartedealer = document.getElementById('dealerscore');
      carte4 = as(drawCard())
      console.log('Dealer: ' + carte4)
      card2dealer.textContent = carte4;
      totalcartedealer.textContent = dealerScore;
      resultat = carte4
      dealerScore += resultat
      console.log("Dealer score: " + dealerScore)

// gestion des résultat      

      if ( dealerScore >= 17) {
        // Conditions résultats
        if ( playerScore > dealerScore && playerScore < 21) {
          instructionGame.textContent = 'Client a gagné ;)';
          setInterval(createHeart, 100);
        } else if ( playerScore < dealerScore && dealer < 21) {
          instructionGame.textContent = 'la maison gagne toujours !';
          setInterval(createHeart, 100);
        } else if ( playerScore > 21 || dealerScore > 21) {
          instructionGame.textContent = 'pas de vainqueur aujourd hui';
          setInterval(createHeart, 100);
        } }
  
  }

  card2dealer.textContent = carte4;
  totalcartedealer.textContent = dealerScore;

  });
  
 
