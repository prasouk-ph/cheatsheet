import './ReactJs.css';
import CodeBlock from '../../utils/CodeBlock/CodeBlock';
import { reactContent } from "../../../data/reactContent"

function ReactJs() {
  const installationContent = reactContent.filter(content => content.category === "Installation")
  const utilisationContent = reactContent.filter(content => content.category === "Utilisation")

  return (
    <main className='page-main'>
      <h1>Cheatsheet ReactJS</h1>
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

      <h3>Hooks</h3>
    </main>
  );
}

export default ReactJs;
