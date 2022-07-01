import CodeBlock from '../../utils/CodeBlock/CodeBlock';
import { reactContent } from "../../../data/reactContent"
import './ReactJs.css';

function ReactJs() {
  const installationContent = reactContent.filter(content => content.category === "Installation")
  const utilisationContent = reactContent.filter(content => content.category === "Utilisation")
  const hooksContent = reactContent.filter(content => content.category === "Hooks")
  const propsContent = reactContent.filter(content => content.category === "Props")
  // const externalComponentsContent = reactContent.filter(content => content.category === "Composants externes")
  const reactReduxContent = reactContent.filter(content => content.name === "React-Redux")
  const reactRouterDomContent = reactContent.filter(content => content.name === "React-Router-Dom")

  return (
    <main className='page-main'>
      <h1>Aide-mémoire ReactJS</h1>

      <h2>Installation</h2>
      <div className='block-container'>
        {installationContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} />
        )}
      </div>

      <h2>Utilisation</h2>
      <div className='block-container'>
        {utilisationContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} />
        )}
      </div>

      <h2>Props</h2>
      <div className='block-container'>
        {propsContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} />
        )}
      </div>

      <h2>Hooks</h2>
      <div className='block-container'>
        {hooksContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} />
        )}
      </div>

      <h2>Composants externes</h2>
      <div className='components-container'>
        <h3>React-Router-Dom</h3>
          <div className='block-container'>
            {reactRouterDomContent.map((content, index) =>
              <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} />
            )}
          </div>

        <h3>React-Redux</h3>
        <div className='block-container'>
          {reactReduxContent.map((content, index) =>
            <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} />
          )}
        </div>
      </div>

      <h2>Autres liens</h2>
      <ul>
        <li><a target="blank" href="https://dev.to/ericlecodeur/aide-memoire-react-cheat-sheet-32g5">ericlecodeur</a></li>
        <li><a target="blank" href="https://devhints.io/react">devhints</a></li>
        <li><a target="blank" href="https://www.codecademy.com/learn/react-101/modules/react-101-jsx-u/cheatsheet">codecademy</a></li>
      </ul>
      
    </main>
  );
}

export default ReactJs;
