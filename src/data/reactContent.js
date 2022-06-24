export const reactContent = [
  {
    title: "Pour installer",
    content: {
      syntaxes: [
        {
          code: "npx create-react-app nom-du-projet",
        }
      ],
      exemples: [
        {
          code: "npx create-react-app cheatsheet-react",
          comments: "Le projet s'appelle cheatsheet-react"
        }
      ]
    },
    category: "Installation"
  },
  {
    title: "Créer composant fonction",
    content: {
      syntaxes: [
        {
          code:
`
import ComposantProvenantDunAutreFichier from 'cheminDuComposant'

function NomDeLaFonction(propsSiBesoin) {
  return (
    <baliseBlock>
      <balise>Content {1+2}<balise/>
      <balise>Another Content {appelDeLaProps}<balise/>
      <ComposantProvenantDunAutreFichier propsATransmettre="valeur" />
    </baliseBlock>
  )
}

export default NomDeLafonction`,
          comments:
`Si plusieurs balises, obligation d'englober le tout dans une balise de type block`
        },
        {
          code:
`const NomDeLaFonction = (propsSiBesoin) =>
  <baliseInline>{appelDeLaProps}</baliseInline>
}

export default NomDeLafonction`
        }
      ],
      exemples: [
        {
          code:
`
import Dropdown from './Dropdown/Dropdown'

function Header({name}) {
  const duration = 10 + 5

  return (
    <div>
      <h1>La maison jungle</h1>
      <p>Appartient à {name} depuis {duration} min</p>
      <Dropdown type="small" />
    </div>
  )
}

export default Header`,
          comments:
`Permet l'utilisation des hooks`
        },
        {
          code:
`export default function Header({name}) {
  const duration = 10 + 5

  return (
    <div>
      <h1>La maison jungle</h1>
      <p>Appartient à {name} depuis {duration} min</p>
    </div>
  )
}`,
          comments:
`On peut utiliser n'importe quel syntaxe d'export`
        },
        {
          code:
`const NomDeLaFonction = (propsSiBesoin) => 
  <div>
    <h1>La maison jungle</h1>
    <p>Appartient à {name} depuis {duration} min</p>
  </div>
}

export default NomDeLaClasse
`
        }
      ],
    },
    category: "Utilisation"
  },
  {
    title: "Créer composant class (A finir/vérifier)",
    content: {
      syntaxes: [
        {
          code:
`class NomDeLaClasse extends React.Component {
  render() {
    return <baliseBlock>
      <balise>Content {1+2}<balise/>
      <balise>Another Content<balise/>
    </baliseBlock>
  )
}

export default NomDeLaClasse`,
          comments:
`Demande de comprendre le cycle de vie des composants`
        }
      ],
      exemples: [
        {
          code:
`class MyComponent extends React.Component {
  render() {
    return <h1>Bonjour, {this.props.name}</h1>;
  }
}

export default Mycomponent`,
          comments:
`La props name doit bien entendu être passé au composant lorsqu'il est appelé`
        },
        {
          code:
`class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      time: new Date().getTime()
    };
  }
  
  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Nous sommes le {this.state.date.toLocaleTimeString()}.</h2>
        <h3>Il est {this.props.time}.</h2>
      </div>
    )
  }
}

export default Mycomponent`,
          comments:
`Pour utiliser le state, on doit initier un constructor`
        }
      ],
    },
    category: "Utilisation"
  },
  {
    title: "Affichage conditionnelle",
    content: {
      syntaxes: [
        {
          code:
`
{condition ? (si oui) : (si non)}
`
        },
        {
          code:
`
{condition && (si oui)}
`
        },
        {
          code:
`
if (condition) {
  return <balise>(si oui)</balise>
}

return (si non)
`
        }
      ],
      exemples: [
        {
          code:
`function DadCard() {
  const childCount = 2
  const message = "Il n'a pas d'enfant"

  return (<p>{childCount > 0 ?
    "Il a un ou plusieurs enfants"
    : message}</p>)
}`
        },
        {
          code:
`function ManCard() {
  const childCount = 2

  return (<p>{childCount > 0 && "Je suis père"}</p>)
}`
        },
        {
          code:
`function ManCard() {
  const childCount = 2

  if (childCount > 0) {
    return <p>Il a un ou plusieurs enfants</p>
  }

  return <p>Il n'a pas d'enfant</p>
}`
        }
      ],
    },
    category: "Utilisation"
  },
  {
    title: "Affichage via boucles",
    content: {
      syntaxes: [
        {
          code:
`
{tableauAItérer.map((élémentDuTableau, index) => (
  <li key={élémentDuTableau + "-" + index}}>{élémentDuTableau}</li>
))}
`,
          comments:
`key doit être unique et est obligatoire`
        }
      ],
      exemples: [
        {
          code:
`function ShoppingList() {
  const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
  ]
  
  return (
    <ul>
      {plantList.map((plant, index) => (
        <li key={plant + "-" +index}>{plant}</li>
      ))}
    </ul>
  )
}`
        },
        {
          code:
`function ShoppingList() {
  const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
  ]
  
  return (
    <ul>
      {plantList.forEach((plant, index) => (
        <li key={plant + "-" +index}>{plant}</li>
      ))}
    </ul>
  )
}`
        }
      ],
    },
    category: "Utilisation"
  },
  {
    title: "Faire des conditions",
    content: {
      syntaxes: [
        {
          code:
`{condition ? (si oui) : (si non)}`
        },
        {
          code:
`{condition && (si oui)}`
        },
        {
          code:
`if (condition) {
  return (si oui)</p>
}

  return (si non)
`
        }
      ],
      exemples: [
        {
          code:
`function DadCard() {
  const childCount = 2

  return (<p>{childCount > 0 ?
    "Il a un ou plusieurs enfants"
    : "Il n'a pas d'enfant"}</p>
  )
}`
        },
        {
          code:
`function ManCard() {
  const childCount = 2

  return (<p>{childCount > 0 && "Je suis père"}</p>)
}`
        },
        {
          code:
`function ManCard() {
const childCount = 2

if (childCount > 0) {
  return <p>Il a un ou plusieurs enfants</p>
}

return <p>Il n'a pas d'enfant</p>
}`
        }
      ],
    },
    category: "Utilisation"
  },
  {
    title: "Déclarer et appeler props",
    content: {
      syntaxes: [
        {
          code:
`function Composant({props1, props2}) {
  return (
    <div>
      <p>Nom : {props1}</p>
      <p>Id : {props2}</p>
    </div>
  )
}

Composant.defaultProps = {
  props1: "valeurParDéfaut",
  props2: "valeurParDéfaut2"
}`,
          comments:
`Via déstructuration
Les props par défauts sont optionnelles`
        },
        {
          code:
`function Card(props) {
  const props1 = props.name
  const props2 = props.id

  return (
    <div>
      <p>props1props1 : {props1}</p>
      <p>props2 : {props2}</p>
    </div>
  )
}`,
          comments: 
`Via déstructuration`
        },
        {
          code:
`function Card(props) {
  const props1 = props.props1
  const props2 = props.props2

  return (
    <div>
      <p>props1 : {props1}</p>
      <p>props2 : {props2}</p>
    </div>
  )
}`
        }
      ],
      exemples: [
        {
          code:
`function Card({name, id}) {
  return (
    <div>
      <p>Nom : {name}</p>
      <p>Id : {id}</p>
    </div
  )
}

Card.defaultProps = {
  name: "Paul",
  id: "1"
}`
        },
        {
          code:
`function Card(props) {
  const {name, id} = props

  return (
    <div>
      <p>Nom : {name}</p>
      <p>Id : {id}</p>
    </div>
  )
}`
        },
        {
          code:
`function Card(props) {
  const name = props.name
  const id = props.id

  return (
    <div>
      <p>Nom : {name}</p>
      <p>Id : {id}</p>
    </div>
  )
}`
        }
      ],
    },
    category: "Props"
  },
  {
    title: "Sécuriser le type des props",
    content: {
      syntaxes: [
        {
          code:
`NomComposant.propTypes = {
  props1: PropTypes.type
}`,
          comments: 
`Demande l'installation de Prop-Types
Dans le terminal du projet : npm i prop-types
`
        }
      ],
      exemples: [
        {
          code:
`import PropTypes from 'prop-types'
 
function Card({ label, title, picture, id }) {
  return (
    <div style={{ display: 'flex', padding: 15 }}>
      <span>{label}</span>
      <img src={picture} alt="freelance" height={80} />
      <span>{title}</span>
    </div>
  )
}
 
Card.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string,
  id: PropTypes.number,
}

Card.defaultProps = {
  title: 'Mon titre par défaut',
}`,
          comments:
`isRequired rend la props title obligatoire`
        },
        {
          code:
`import PropTypes from 'prop-types'
 
function Card({sessionsData}) {
  return (
    <ul>
      {sessionsData.map((session, index) => (
        <li key={session + "-" +index}>{session.day + session.length}</li>
      ))}
    </ul>
  )
}
 
Card.propTypes = {
  session: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
  }))
}`,
          comments:
`On utilise arrayOf et shape pour vérifier le contenu du tableau`
        }
      ],
    },
    category: "Props"
  },
  {
    title: "Gérer les événements",
    content: {
      syntaxes: [
        {
          code:
`function Composant() {
  function handleNomEvénément(événementPasséParDéfaut, paramétreSupplémentaireSiBesoin) {
    instructions
  }

  return (
    <balise onEvénément={handleNomEvénément}>Contenu de la balise</balise>
  )
}`,
          comments:
`Pas besoin de passer d'argument si pas de paramètres supplémentaires`
        },
        {
          code:
`function Composant() {
  const argument = valeurDeL'Argument

  return (
    <balise onEvénément={() => handleNomEvénément(argument)}>Contenu de la balise</balise>
  )
}`,
          comments:
`Pour passer un argument directement dans l'attribut, il faut l'englober dans une fonction anonyme`
        }
      ],
      exemples: [
        {
          code:
`function Header() {
  function handleClick(event) {
    event.preventDefault()
    const title = event.target.textContent
    console.log("Le titre est " + title)
  }

  return (
    <div className="banner">
      <h1 onClick={handleClick}>La maison jungle</h1>
    </div>)
}`
        },
        {
          code:
`function Header() {
  return (
    <div className="banner">
      <h1 onClick={(event) =>
        event.preventDefault()
        alert("Le titre est " + event.target.textContent)
      }>La maison jungle</h1>
    </div>
  )
}`
        }
      ],
    },
    category: "Utilisation"
  },
  {
    title: "Utiliser useState",
    content: {
      syntaxes: [
        {
          code:
`const [nomDuState, setnomDuState] = useState(valeurParDéfaut)`
        },
        {
          code:
`const nomDuState = useState(valeurParDéfaut)
const ClefIndiquantLaValeurDuState = nomDuState[0]
const setnomDuState = nomDuState[1]`
        }
      ],
      exemples: [
        {
          code:
`import { useState } from "react";

function App() {
  const defaultCartContent = []

  const [cart, setCart] = useState(defaultCartContent)
  const [data, setdata] = useState({})
  
  return (
    <div>
      <Banner>
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>

      <div className='lmj-layout-inner'>
        <Cart cart={cart} setCart={setCart} />
        <ShoppingList data={data} />
      </div>
    </div>
  )
}


// In another file:
function Cart({ cart, setCart }) {
  const monsteraPrice = 8
  const [isOpen, setIsOpen] = useState(true)

  return isOpen ? (
    <div className='lmj-cart'>
      <button
          className='lmj-cart-toggle-button'
          onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      <h2>Panier</h2>
      <h3>Total : {monsteraPrice * cart}€</h3>
      <button onClick={() => setCart(0)}>Vider le panier</button>
    </div>
  ) : (
    <div className='lmj-cart-closed'>
      <button
        className='lmj-cart-toggle-button'
        onClick={() => setIsOpen(true)}
      >
          Ouvrir le Panier
      </button>
    </div>
  )
}`,
          comments: `setIsOpen(false) réassigne la valeur d'isOpen, même logique que isOpen = false`
        }
      ],
    },
    category: "Hooks"
  }
]