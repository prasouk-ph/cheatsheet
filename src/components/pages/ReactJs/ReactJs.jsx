import './ReactJs.css';
import CodeBlock from '../../utils/CodeBlock/CodeBlock';
import { reactContent } from "../../../data/reactContent"

function ReactJs() {
  const installationContent = reactContent.filter(content => content.category === "Installation")
  const utilisationContent = reactContent.filter(content => content.category === "Utilisation")
  const hooksContent = reactContent.filter(content => content.category === "Hooks")
  const externalComponentsContent = reactContent.filter(content => content.category === "Composants externes")

  return (
    <main className='page-main'>
      <h1>Aide-mémoire ReactJS</h1>
      <p>Sur cette page vous trouverez le cheatsheet de React</p>

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

      <h2>Hooks</h2>
      <div className='block-container'>
        {hooksContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} />
        )}
      </div>

      <h2>Composants externes</h2>
      <div className='block-container'>
        {externalComponentsContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} />
        )}
      </div>
    </main>
  );
}

export default ReactJs;
