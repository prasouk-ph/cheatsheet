/* eslint-disable no-template-curly-in-string */
export const javaScriptContent = [
  {
    title: "String",
    content: {
      syntaxes: [
        {
          code:
`"Représente une chaîne de caractères"
'Doit être englobé par des guillements'`
        },
        {
          code:
"`Peut aussi utiliser des nombres sous forme de \n caractère`",
          comments:
`Avec \`\` on peut écrire sur plusieurs lignes, ne pas confondre avec '',
A utiliser avec une balise permettant les sauts à la ligne`
        },
        {
          code: "`${nomVariable}`",
          comments:
`Entre {} la valeur de la variable sera utilisée
Cette technique s'appelle interpolation`
        },
        {
          code: `"Bonjour " + "Paul !"`,
          comments:
`Les espaces sont pris en compte seulement dans les guillemets
Cette technique s'appelle la concatenation`
        }
      ],
      exemples: [
        {
          code:
`const nombreDeVoitures = 2
const message = \`Il y a $\{nombreDeVoitures}\`
const messageConcatenation = "Bonjour " + "Paul" + " " + "!"
`
        }
      ],
    },
    category: "Type"
  },
  {
    title: "Number",
    content: {
      syntaxes: [
        {
          code:
`12.09`
        }
      ],
      exemples: [
        {
          code:
`const price = 2999.99`,
          comments: "Pas besoin de guillemets"
        }
      ],
    },
    category: "Type"
  },
  {
    title: "Boolean",
    content: {
      syntaxes: [
        {
          code:
`true`
        },
        {
          code:
`false`
        }
      ],
      exemples: [
        {
          code:
`const isActive = true
const isOpen = false`,
          comments: "Pas besoin de guillemets"
        }
      ],
    },
    category: "Type"
  },
  {
    title: "Array",
    content: {
      syntaxes: [
        {
          code:
`[élément1, élément2]`
        },
        {
          code:
`const tableau = [élément1, élément2]
const élément1 = tableau[0]
const élément2 = tableau[1]`,
          comments:
`Pour appeler un élément
0 et 1 sont les numéros d'index`
        },
        {
          code:
`const [nomDonnéAElément1, nomDonnéAElément2] = tableau`,
          comments: "Déstructuration"
        },
        {
          code:
`const tableau1 = [1, 2]
const tableau2 = [...tableau1, 3, 4]`,
          comments: 
`Pour utiliser les éléments d'un autre tableau il faut respecter le principe d'immutabilité,
Au lieu de faire référence, on utilise une copie avec ...`
        },
        {
          code:
`tableau.push(élémentAAjouter)
tableau.unshift(élémentAAjouter)`,
          comments: 
`Pour ajouter un élément
push placera l'élément à la fin
unshift au début`
        },
        {
          code:
`tableau.pop()
tableau.shift()
tableau.shift(indexASupprimer, nombreASupprimer)`,
          comments: 
`Pour supprimer des éléments
pop supprimera le 1er élément
shift le dernier`
        }
      ],
      exemples: [
        {
          code:
`const mesVoitures = ["A7", "207"]
const maA7 = mesVoitures[0]
const ma207 = mesVoitures[1]`
        },
        {
          code:
`const mesVoitures = [A7, 207, SF90]
const [, peugeot207, ] = mesVoitures`,
          comments: 
`En cas de déstructuration, il faut respecter l'ordre du tableau pour nommer les éléments du tableau`
        },
        {
          code:
`const voituresParMarques = [
  ["A1", "A5"],
  ["Classe A", "Classe S"]
]

const voituresAudi = voituresParMarques[0]
const voituresMercedes = voituresParMarques[1]
const a5 = voituresParMarques[0][1]
const [[A1, A5], [Classe A, Classe S]] = voituresParMarques`
        },
        {
          code:
`const apple = ["iPhone", "iPad"]
const samsung = ["Galaxy S", "Galaxy Note"]
const telephones = [...apple, ...samsung]`
        }
      ],
    },
    category: "Type"
  },  {
    title: "Object",
    content: {
      syntaxes: [
        {
          code:
`{
  clé1: valeurClé1,
  clé2: valeurClé2
}`
        },
        {
          code:
`nomObjet.clé1 = "valeurClé1";
nomObjet[clé2] = valeurClé2;
const { clef1, clef2 } = nomObjet;`,
          comments:
`Pour appeler la valeur d'une clé
On peut utiliser une string ou même une variable dans [] pour indiquer la clé
Si la clé n'existe pas elle sera créée`
        },
        {
          code:
`delete nomObjet.cléASupprimer`
        }
      ],
      exemples: [
        {
          code:
`const maVoiture = {
  marque: 'Audi',
  model: 'A7'
}

const clef = "model"

maVoiture.marque = "BMW";
maVoiture[clef] = 'Série 7';
maVoiture.annee = 2020;
const { marque, modele } = maVoiture;

delete maVoiture.annee`
        },
        {
          code:
`class Voiture {
  constructor(marque, modele) {
    this.marque = marque;
    this.modele = modele;
  }
}

const maVoiture = new Voiture("Audi", "A7")`
        }
      ],
    },
    category: "Type"
  },
  {
    title: "Pour déclarer",
    content: {
      syntaxes: [
        {
          code:
`const nomVariable = valeur
let nomVariable = valeur
var nomVariable = valeur`,
          comments: 
`const peut être déclaré qu'une fois,
dans un block, le scope sera local,
valeur non modifiable sauf si la valeur est une référence

let peut être redéclaré,
dans un block, le scope sera local

var peut être redéclaré
dans un block, le scope s'étendra à la fonction parent`
        }
      ],
      exemples: [
        {
          code:
`const array = [20]
let string = "Je suis une chaîne de caractères"
var number = 3

const 
name = paul,
surname = pierce

let montant = 500, acompte = 100`
        }
      ],
    },
    category: "Variables"
  },
  {
    title: "Pour accéder ou modifier les valeurs",
    content: {
      syntaxes: [
        {
          code:
`nomVariable = nouvelleValeur`
        }
      ],
      exemples: [
        {
          code:
`const array = [];
const array = [20];
array.push(1)

const number = 10
number += 1`,
          comments:
`const array = [20] provoquera une erreur car déjà déclarée
array.push donnera array [1] car valeur de array = une référence
number += sera impossible car la valeur de number n'est pas une référence`
        },
        {
          code:
`function test() {
  let array = []
  let array = [2]
}

console.log(array)`,
          comments: "Le console log ne marchera pas car array n'est pas accessible"
        },
        {
          code:
`function test() {
  let array = []
  let array = [2]
  console.log(array)

  if (true) {
    let x = 2;  
    console.log(x);  // 2
  }
  console.log(x);  // le console log ne marchera pas car x est accessible que dans le if
}
// array est accessible car le console log est dans le scope local`,
          comments:
`Le 1er console.log affichera 2 dans la console
Le 2ème affichera 2
Le 3ème ne marchera pas car x est accessible que dans le if`
        },
        {
          code:
`function varTest() {
  var x = 1;
  console.log(x);  // 1
  if (true) {
    var x = 2;  // c'est la même variable qui est redéclaré
    var y = "s"
    console.log(x);  // 2
  }
  console.log(x);  // 2
  console.log(y);  // s
}`
        }
      ],
    },
    category: "Variables"
  },
  {
    title: "Pour comparer",
    content: {
      syntaxes: [
        {
          code:
`==`,
          comments: "Egal à"
        },
        {
          code:
`===`,
comments: "Valeur et type égal à"
        },
        {
          code:
`!=`,
          comments: "Différent de"
        },
        {
          code:
`!==`,
          comments: "Valeur et type différent de"
        },
        {
          code:
`>`,
          comments: "Supérieur à"
        },
        {
          code:
`>=`,
          comments: "Supérier ou égal à"
        },
        {
          code:
`<`,
          comments: "Inférieur à"
        },
        {
          code:
`<=`,
          comments: "Inférieur ou égal à"
        }
        ,
        {
          code:
`&&`,
          comments: "Et"
        },
        {
          code:
`||`,
          comments: "Ou"
        }
      ],
      exemples: [
        {
          code:
`const juniorWage = 2000
const juniorWageString = "2000"
const minimumWage = 2000
const seniorWage = 3500

juniorWage == juniorWageString
juniorWage === minimumWage
juniorWage != seniorWage
juniorWage !=== juniorWageString
juniorWage < seniorWage
juniorWage <= minimumWage
seniorWage > minimumWage
juniorWage > minimumWage`
        },
        {
          code:
`const gotPermission = true
const wantToGoOutside = false

if (gotPermission === true && wantToGoOutside == true) {
  alert("Let's go !")
}`
        },
        {
          code:
`const testPCR = true
const passVaccinal = true

if (testPCR || passVaccinal) {
  alert("On peut entrer")
}`,
          comments: "Si on ne précise pas la valeur, elle sera automatiquement true"
        }
      ],
    },
    category: "Opérateurs"
  },
  {
    title: "Pour calculer",
    content: {
      syntaxes: [
        {
          code:
`+
-
*
/
%
**`,
          comments: 
`Dans l'ordre : 
Addition
Soustraction
Multiplication
Division
Reste de la division (modulo)
Puissance`
        },
        {
          code:
`++
+=`,
          comments: 
`++ permet d'incrémenter (fera +1)
+= ajoutera à la variable la précédant
Applicable avec tous les signes`
        }
      ],
      exemples: [
        {
          code:
`const a = 1
const b = 2

let calcul = a + b
calcul++
calcul--
calcul = b - 1
calcul = a * a
calcul *= b + (1 - 1)
calcul /= 10 
calcul = 3 % 2
calcul = 2 ** 3`,
          comments:
`Donnera dans l'ordre : 
3
4
3
1
1
2
0.2
1
8`
        }
      ],
    },
    category: "Opérateurs"
  },
  {
    title: "Pour déclarer",
    content: {
      syntaxes: [
        {
          code:
`function nomDeLaFonction(argument1, argument2 = valeurParDéfaut) {
  instructions;
}`
        },
        {
          code:
`const nomFonction = (argument = valeurParDéfaut) => {
  instructions;
}`
        },
        {
          code:
`function() => {
  instructions;
}

() => valeurRetournée

() => {
  instructions

  return valeurRetournée
}`,
          comments: "Fonction anonyme, non réutilisable"
        }
      ],
      exemples: [
        {
          code:
`function afficherDeuxValeurs(valeur1, valeur2 = 20) {
  console.log('Première valeur:' + valeur1);
  console.log('Deuxième valeur:' + valeur2);
}`
        },
        {
          code:
`const getWordCount = stringToTest => {
	const wordArray = stringToTest.split(" ");
	return wordArray.length;
}`
        },
        {
          code:
`const addition = (valeur1, valeur2 = 20) => {
	const somme = valeur1 + valeur2;
	return somme;
}`
        },
        {
          code:
`<button onclick="() => active = false ">Fermer</button>`
        }
      ],
    },
    category: "Fonctions"
  },
  {
    title: "Pour appeler",
    content: {
      syntaxes: [
        {
          code:
`variable.nomFonction(argumentSiNécessaires)`,
          comments: "Si fonction d'instance (appartenant à une classe)"
        },
        {
          code:
`nomFonction(argumentSiNécessaires)`,
          comments: "Si fonction statique"
        }
      ],
      exemples: [
        {
          code:
`class BankAccount {
	constructor(owner, balance) {
	this.owner = owner;
	this.balance = balance;
	}

	showBalance() {
      		console.log("Solde: " + this.balance + " EUR");
	}

  static sayHelloTo(name) {
    console.log("Hello " + name + "!");
  }
}

const myAccount = new BankAccount("me", 1000)

myAccount.showBalance()
sayHelloTo("Paul")`
        }
      ],
    },
    category: "Fonctions"
  },
  {
    title: "Avec if",
    content: {
      syntaxes: [
        {
          code:
`if (condition) {
  instructions;
} else if {
  instructionsSiConditionRemplie;
} else {
  instructionsSiConditionPasRemplie;
}`
        },
        {
          code:
`condition ? siVrai : siFaux`
        }
      ],
      exemples: [
        {
          code:
`if (myAge > 18) {
  console.log("Je suis majeur");
} else if (myCountry == "USA") {
  console.log("Sauf si je vis aux USA");
} else {
  console.log("Je suis mineur");
}`
        },
        {
          code:
`(myAge > 18) ? "Je suis majeur" : "Je suis mineur"`
        },
        {
          code:
`(myAge > 18) ? (
  console.log("Je suis majeur");
) : (
  "Je suis mineur"
)`
        }
      ],
    },
    category: "Conditions"
  },
  {
    title: "Avec switch",
    content: {
      syntaxes: [
        {
          code:
`switch (variableOucléDeLaVariable) {
  case valeurRencontrée1: 
    instructions;
  
  break;
  case valeurRencontrée2: 
    instructions;
  
  break;
  
  default:
    instructions;
}`,
          comments:
`Si aucune valeur/case n'est rencontrée, les instructions de default seront utilisées
Sans break, chaque “case” sera exécuté`
        }
      ],
      exemples: [
        {
          code:
`const tyreNumber = 4

switch (tyreNumber) {
  case 2: 
    console.log("C'est une moto");
  
  break;
  case 4: 
    console.log("C'est une voiture");
  
  break;
  
  default:
    console.log("C'est un véhicule à roue");
}`
        }
      ],
    },
    category: "Conditions"
  },
]