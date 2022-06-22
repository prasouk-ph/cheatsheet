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
`function NomDeLaFonction(propsSiBesoin) {
  return (
    <baliseBlock>
      <balise>Content {1+2}<balise/>
      <balise>Another Content<balise/>
    </baliseBlock>
  )
}

export default NomDeLafonction`,
          comments:
`
Si plusieurs balises, obligation d'englober le tout dans une balise de type block
`
        },
        {
          code:
`const NomDeLaFonction = (propsSiBesoin) =>
  <baliseInline></baliseInline>
}

export default NomDeLafonction`
        }
      ],
      exemples: [
        {
          code:
`function Header({name}) {
  const duration = 10 + 5

  return (
    <div>
      <h1>La maison jungle</h1>
      <p>Appartient à { name } depuis { duration } min</p>
    </div>
  )
}

export default Header`,
          comments:
`
Permet l'utilisation des hooks
`
        },
        {
          code:
`export default function Header({name}) {
  const duration = 10 + 5

  return (
    <div>
      <h1>La maison jungle</h1>
      <p>Appartient à { name } depuis { duration } min</p>
    </div>
  )
}`,
          comments:
`
On peut utiliser n'importe quel syntaxe d'export
`
        },
        {
          code:
`const NomDeLaFonction = (propsSiBesoin) => 
  <div>
    <h1>La maison jungle</h1>
    <p>Appartient à { name } depuis { duration } min</p>
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
    title: "Créer composant class",
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
`
Demande de comprendre le cycle 
de vie des composants
`
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

export default Mycomponent`
        }
      ],
    },
    category: "Utilisation"
  }
]