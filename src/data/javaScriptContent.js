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
        }
      ],
      exemples: [
        {
          code:
`const nombreDeVoitures = 2
const message = \`Il y a $\{nombreDeVoitures}\`
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
]