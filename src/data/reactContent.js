export const reactContent = [
  {
    title: "Pour installer",
    syntax: "npx create-react-app nom-du-projet",
    exemples: `npx create-react-app cheatsheet-project`,
    category: "Installation",
  },
  {
    title: "Composant fonction",
    syntax: 
`function NomDeLaFonction(propsSiBesoin) {
  return (jsx)
}`,
    syntaxComments: "Demande de comprendre le cycle de vie des composants",
    exemples: 
`function Header({name}) {
  const duration = 10 + 5

  return (
    <div>
      <h1>La maison jungle</h1>
      <p>Appartient à { name } depuis { duration } min</p>
    </div>)
}`,
    exemplesComments: "Commentaires",
    category: "Utilisation"
  },
  {
    title: "Composant class",
    syntax:
`class NomDeLaClasse extends React.Component {
  render() {
    jsx
  }
}`,
    exemples:
`class MyComponent extends React.Component {
  render() {
    return <h1>Bonjour, {this.props.name}</h1>;
  }
}`,
    category: "Utilisation"
  }
]