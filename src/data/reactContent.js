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

function NomDeLaFonction(propsOptionnel) {
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
`const NomDeLaFonction = (propsOptionnel) =>
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
`const NomDeLaFonction = (propsOptionnel) => 
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
`function Composant(props) {
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
`function Composant(props) {
  const props1 = props.props1
  const props2 = props.props2

  return (
    <div>
      <p>props1 : {props1}</p>
      <p>props2 : {props2}</p>
    </div>
  )
}`
        },
        {
          code:
`function Composant({children}) {
  return (
    <div>
      {children}
    </div>
  )
}`,
          comments: 
`Si on ne connaît pas les futurs enfants`
        },
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
        },
        {
          code:
`function App() {
  return (
    <div>
      <Banner>
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      <div className='lmj-layout-inner'>
        <Cart />
        <ShoppingList />
      </div>
      <Footer />
    </div>
  )
}

function Banner({children}) {
  return <div className='lmj-banner'>{children}</div>
}`,
          comments:`Les balises img et h1 seront englobées par une div ayant pour class lmj-banner`
        }
      ],
    },
    category: "Props"
  },
  {
    title: "Passer une props",
    content: {
      syntaxes: [
        {
          code:
`<Composant props1="valeurProps1" props2={valeurProps2ViaVariable}/>`
        }
      ],
      exemples: [
        {
          code:
`function Banner(data) {
  const photographerId = data.id

  return (
    <div>
      <Header />
      <Card photographerName="Paul" photographerId={photographerId} />
    </div>)
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
  function handleNomEvénément(événementPasséParDéfaut, paramétreOptionnel1) {
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
    <balise onEvénément={(argument) => handleNomEvénément(argument)}>Contenu de la balise</balise>
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
  },
  {
    title: "Utiliser useContext",
    content: {
      syntaxes: [
        {
          code:
`import React, { createContext } from "react";

export const NomDuContext = createContext(valeurParDéfaut);

function Composant() {
  const propsATransmette = valeurDeLaProps

  return (
    <NomDuContext.Provider value={propsATransmette}>
      <AutreComposant />
    </NomDuContext.Provider>
  )
}

// Dans un autre fichier :
import React, { useContext } from "react";

function AutreComposant() {
  const propsARécupérer = useContext(NomDuContext);

  return (
    jsx
  )
}`,
          comments: 
`On ajoute export à NomDuContext si on compte l'utiliser dans un autre fichier
NomDuContext se trouve en dehors du composant
La props value dans le provider est obligatoire
`
        },
        {
          code:
`import React, { createContext } from "react";

export const NomDuContext1 = createContext(valeurParDéfaut);
export const NomDuContext2 = createContext(valeurParDéfaut);

function Composant() {
  const propsATransmettre1PourContext1 = valeurDeLaProps
  const propsATransmettre2PourContext1 = valeurDeLaProps
  const propsATransmettePourContext2 = valeurDeLaProps

  return (
    <NomDuContext1.Provider value={clef1: propsATransmette1PourContext1, clef2: propsATransmettre2PourContext1}>
      <NomDuContext2.Provider value={propsATransmettrePourContext2}>
        <AutreComposant />
      </NomDuContext2.Provider>
    </NomDuContext1.Provider>
  )
}

// Dans un autre fichier :
import React, { useContext } from "react";

function AutreComposant() {
  const {clef1, clef2} = useContext(NomDuContext1);
  const propsARécupérer = useContext(NomDuContext2);

  return (
    jsx
  )
}`,
          comments:
`On sépare les context par catégorie
Si plusieurs valeurs à partager dans le même context, il faudra les mettre dans un objet pour y accéder par la suite
Si on veut partager plusieurs context, il faudra les imbriquer à la suite`
        }
      ],
      exemples: [
        {
          code:
`import React, { createContext } from "react";

export const UserContext = createContext('');

function App() {
  const userName = "Superman"

  return (
    <UserContext.Provider value={userName}>
      <UserCard />
      <Menu />
    </UserContext.Provider>
  )
}

// Dans un autre fichier :
import React, { useContext } from "react";

function UserCard() {
  const userName = useContext(UserContext);

  return (
    <p>{userName}</p>
  )
}`,
          comments: 
`Une valeur par défaut du context est généralement inutile
Mais peut être utile pour éviter des erreurs dans la console
Avec de la déstructuration ou TypeScript `
        },
        {
          code:
`import React, { useState, createContext } from "react";

export const LoginStateContext = createContext(false);
export const UserContext = createContext(");

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");

  return (
    <LoginStateContext.Provider value={isLoaded: isLoaded, setIsLoaded: setIsLoaded}>
      <UserContext.Provider value={userFirstName: userFirstName, setUserFirstName: setUserFirstName, userLastName, setUserLastName}>
        <HomePage />
        <LoginPage />
      </UserContext.Provider>
    </LoginStateContext.Provider>
  )
}

// Dans un autre fichier :
import React, { useContext } from "react";

function HomePage() {
  const {isLogged} = useContext(LoginStateContext);
  const {userFirstName, setUserFirstName, userLastName, setUserLastName} = useContext(UserContext);

  return (
    isLogged && (<p>Bonjour {userFirstName + " " + userLastName}</p>)
  )
}`,
        }
      ],
    },
    category: "Hooks"
  },
  {
    title: "Utiliser useEffect",
    content: {
      syntaxes: [
        {
          code:
`import { useEffect } from 'react';

function Composant() {
  function fonctionALancerLorsDeUseEffect() {
    instructions
  }

  useEffect(() => {
    fonctionALancerLorsDeUseEffect()
  }, [dépendance]);

  return (
    jsx
  );
}`,
          comments:
`La dépendance est optionnelle, la fonction dans le useEffect se relance à chaque fois que la dépendance change
Sans dépendance, elle se lancera à chaque nouveau rendu`
        },
        {
          code:
`import { useEffect } from 'react';

function Composant() {

  useEffect(() => {
    () => {
      instructions
    }
  });

  return (
    jsx
  );
}`,
        }
      ],
      exemples: [
        {
          code:
`import { useEffect, useContext } from 'react';

function Home() {
  const {userName} = useContext(UserStateContext);

  function messageInConsole() {
    console.log("Je me lance grâce au useEffect")
    console.log("Je suis sur le compte de :")
    console.log(userName)
  }

  useEffect(() => {
    messageInConsole()
  }, [userName]);

  return (
    <p>Bienvenue !</p>
  );
}`,
        },
        {
          code:
`import { useEffect, useContext } from 'react';

function Home() {
  const {userName} = useContext(UserStateContext);

  useEffect(() => {
    () => {
      console.log("Je me lance grâce au useEffect")
      console.log("Je suis sur le compte de :")
      console.log(userName)
    }
  } []);

  return (
    <p>Bienvenue {userName}!</p>
  );
}`,
          comments: "Avec une dépendance vide, le useEffect sera appelé seulement au 1er rendu"
        }
      ],
    },
    category: "Hooks"
  },
  {
    title: "Pour installer",
    content: {
      syntaxes: [
        {
          code:
`npm install react-router-dom`
        }
      ]
    },
    category: "Composants externes",
    name: "React-Router-Dom"
  },
  {
    title: "Pour utiliser",
    content: {
      syntaxes: [
        {
          code:
`import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

    <Router>
      <Routes>
        <Route path="/" element={<ComposantAAfficher/>} />
        <Route path="/cheminvoulu" element={<ComposantAAfficher/>} />
        <Route path="*" element={<ComposantAAfficher/>} />
      </Routes>
    </Router>`,
          comments:
`Sans Layout
"*" capturera tous les chemins non spécifiés`
        },
        {
          code:
`import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

    <Router>
      <Routes>
        <Route path="/" element={<ComposantIndiquantLaStructureDuLayout />}>
          <Route index element={<ComposantAAfficher />} />
          <Route path="/about" element={<ComposantAAfficher />} />
          <Route path="/accomodation/:id" element={<ComposantAAfficher />} />
          <Route path="*" element={<ComposantAAfficher />}/>
        </Route>
      </Routes>
    </Router>`,
          comments: 
`Avec Layout
index element correspond à la route par défaut`
        },
        {
          code:
`import { Outlet } from "react-router-dom";

function ComposantIndiquantLaStructureDuLayout() {
  return (
    <div>
      <ComposantSupplémentaireAAfficher />
      <Outlet />
      <ComposantSupplémentaireAAfficher />
    </div>
  );
}`,
          comments: 
`Composant Layout
Outlet affichera l'element de la Route selon le path`
        }
      ],
      exemples: [
        {
          code:
`import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import NoPage from './pages/NoPage'
 
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/survey" element={<Survey/>} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)`,
          comments: "Dans index.js"
        },
        {
          code:
`import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './utils/Layout'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Error from './components/Error'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="survey/:questionNumber" element={<Survey />} />
          <Route path="results" element={<Results />} />
          <Route path="freelances" element={<Freelances />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)`,
          comments: "Dans index.js"
        },
        {
          code:
`import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className='Layout'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}`,
          comments: "Ailleurs que index.js"
        },
      ],
    },
    category: "Composants externes",
    name: "React-Router-Dom"
  },
  {
    title: "Pour accéder aux paramètres URL",
    content: {
      syntaxes: [
        {
          code:
`import { useParams } from 'react-router-dom';

function Composant() {
  const { nomParamètreDéfiniDansLePathDeLaRoute } = useParams();
}`
        }
      ],
      exemples: [
        {
          code:
`function Accomodation() {
  const { id } = useParams()
  const currentAccomodation = accomodations.filter(accomodation => accomodation.id === id)[0]
  
  if (currentAccomodation === undefined) {
    console.log("ID inexistant !");
    navigate("/404");
  }

  return (<p>{"L'id du logement est " + id}</p>)
}`
        }
      ],
    },
    category: "Composants externes",
    name: "React-Router-Dom"
  },
  {
    title: "Pour rediriger vers une route",
    content: {
      syntaxes: [
        {
          code:
`import { useNavigate } from "react-router-dom";

function Composant() {
  let navigate = useNavigate();
  
  navigate("cheminVoulu");

  return
}`,
          comments: "Hors jsx, à utiliser dans une fonction"
        },
        {
          code:
`import { Link } from 'react-router-dom'

function Composant() {
  return (
    <nav>
      <Link to="path">Contenu</Link>
    </nav>
  )
}`,
          comments: "Seulement dans du jsx"
        }
      ],
      exemples: [
        {
          code:
`import './Card.css';
import accomodations from '../../../../data/logements.json'
import { useNavigate } from "react-router-dom";

function Card({ title, id }) {
  let navigate = useNavigate();
  const cardData = accomodations.filter(accomodation => accomodation.id === id)[0]
  const cardCoverSource = cardData.cover
  const path = "/accomodation/" + id

  function handleClick() {
      navigate(path);
  }

  return (
  <div className='card' onClick={handleClick}>
    <img className='card-cover' src={cardCoverSource} alt="card cover" />

    <div className="card-footer">
      <p className='card-title'>{title}</p>
    </div>
  </div>
  );
}`
        },
        {
          code:
`import { Link } from 'react-router-dom'

function Menu() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/survey/:id”>Questionnaire</Link>
      <Link to="/freelances">Profils</Link>
      <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
    </nav>
  )
}`,
          comments: 
`Pour rediriger vers autre chose qu'une route
On pourra toujours utiliser la balise a`
        }
      ],
    },
    category: "Composants externes",
    name: "React-Router-Dom"
  },
  {
    title: "Pour installer",
    content: {
      syntaxes: [
        {
          code:
`npm install @reduxjs/toolkit react-redux`
        }
      ]
    },
    category: "Composants externes",
    name: "React-Redux"
  },
  {
    title: "Initialiser le store",
    content: {
      syntaxes: [
        {
          code:
`import { configureStore } from '@reduxjs/toolkit'
import { createAction } from '@reduxjs/toolkit'
import { createReducer } from '@reduxjs/toolkit'

const reducer1InitialStateEnObjet = {
  nomclef: {    
    propriété1: "valeur",
    propriété2: "valeur",
  }
}

const reducer2InitialState = valeur

export const nomDuneActionAvecPayload = createAction(
  'nomDeLactionAvecPayload',
  (nomPayload) => ({
    payload: { clefPayload: valeurPayload }, // should be an object
  })
);

export const nomDuneActionSansPayload = createAction('nomDeLactionSansPayload');

const reducer1 = createReducer(reducer1InitialStateEnObjet.nomclef, (builder) =>
  builder
    .addCase(nomDuneActionAvecPayload, (draft, action) => {
      draft.propriété1 = action.payload.clefPayload
      return
    })
    .addCase(nomDuneActionSansPayload, (draft) => {
      draft.propriété2 = true
      return
    })
)

const reducer2 = createReducer(reducer2InitialState, (builder) =>
  builder
    .addCase(nomDuneActionAvecPayload, (state, action) => {
      return action.payload
    })
    .addCase(nomDuneActionSansPayload, (state) => {
      return nouveauState
    })
)

export const store = configureStore({
  reducer : {
      clefReducer1: reducer1,
      clefReducer2: reducer2
  },
});`,
          comments:"A placer au bout d'un fichier store.js"
        }
      ],
      exemples: [
        {
          code:
`import { configureStore } from '@reduxjs/toolkit'
import { createAction } from '@reduxjs/toolkit'
import { createReducer } from '@reduxjs/toolkit'

const userInitialState = {
  user: {    
    userFirstName: "",
    userLastName: "",
  }
}

const loginInitialState = {
  login: {
    isLogged: checkLoginStatus()
  }
}

export const setUserFirstName = createAction(
  'setUserFirstName',
  (firstName) => ({
    payload: { userFirstName: firstName }, // should be an object
  })
);

export const setUserLastName = createAction(
  'setUserLastName',
  (lastName) => ({
      payload: { userLastName: lastName },
  })
);

export const logOut = createAction('logOut');

export const logIn = createAction('logIn');

const userReducer = createReducer(userInitialState.user, (builder) =>
  builder
    .addCase(setUserFirstName, (draft, action) => {
      draft.userFirstName = action.payload.userFirstName
      return
    })
    .addCase(setUserLastName, (draft, action) => {
      draft.userLastName = action.payload.userLastName
      return
    })
)

const loginReducer = createReducer(loginInitialState.login, (builder) =>
  builder
    .addCase(logIn, (draft) => {
      draft.isLogged = true
      return
    })
    .addCase(logOut, (draft) => {
      draft.isLogged = false
      return
    })
)

export const store = configureStore({
  reducer : {
      user: userReducer,
      login: loginReducer,
  },
});`
        }
      ],
    },
    category: "Composants externes",
    name: "React-Redux"
  },
  {
    title: "Lancer des actions",
    content: {
      syntaxes: [
        {
          code:
`import { useDispatch } from 'react-redux';
import { action1, action2 } from 'fichier contenant les actions';

const dispatch = useDispatch()

dispatch(action1())

// avec payload
dispatch(action2('valeurDuPayload'))`
        }
      ],
      exemples: [
        {
          code:
`import { useDispatch } from 'react-redux';
import { playPause, pointScored } from '../../../store/store';

const dispatch = useDispatch()

dispatch(playPause())

// avec payload
dispatch(pointScored(‘player1’))`
        }
      ],
    },
    category: "Composants externes",
    name: "React-Redux"
  },
  {
    title: "Accéder au store",
    content: {
      syntaxes: [
        {
          code:
`import { useSelector } from 'react-redux'

const dataVoulue = useSelector ((state) => state.clé.value)`
        }
      ],
      exemples: [
        {
          code:
`import { useSelector } from "react-redux";

const isLogged = useSelector((state) => state.login.isLogged);
`
        }
      ],
    },
    category: "Composants externes",
    name: "React-Redux"
  },
]