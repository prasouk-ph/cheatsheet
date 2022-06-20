export const reactContent = [
  {
    title: "Pour installer",
    content: {
      syntaxes: [
        {
          code: "npx create-react-app nom-du-projet",
        },
        {
          code: "npx create-react-app nom-du-projet",
          comments: "Doublon"
        },
      ],
      exemples: [
        {
          code: "npx create-react-app cheatsheet-react",
          comments: "Le projet s'appelle cheatsheet-react"
        },
        {
          code: "npx create-react-app cheatsheet-react",
          comments: "Doublon"
        }
      ]
    },
    category: "Installation"
  },
  {
    title: "Composant fonction",
    content: {
      syntaxes: [
        {
          code:
`function NomDeLaFonction(propsSiBesoin) {
  return (jsx)
}`,
        },
        {
          code:
`const NomDeLaFonction = (propsSiBesoin) =>
  jsx
}`,
          comments:
`
Autres
`
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
}`,
          comments:
`
Permet l'utilisation des hooks
`
        },
        {
          code:
`const NomDeLaFonction = (propsSiBesoin) => 
  <div>
    <h1>La maison jungle</h1>
    <p>Appartient à { name } depuis { duration } min</p>
  </div>
}`,
          comments:
`
Demande de comprendre le cycle 
de vie des composants
`
        }
      ],
    },
    category: "Utilisation"
  },
  {
    title: "Composant class",
    content: {
      syntaxes: [
        {
          code:
`class NomDeLaClasse extends React.Component {
  render() {
    jsx
  }
}`,
          comments:
`
Autres
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
}`,
          comments:
`
Permet l'utilisation des hooks
`
        }
      ],
    },
    category: "Utilisation"
  }
]