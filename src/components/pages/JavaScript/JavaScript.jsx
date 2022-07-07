import CodeBlock from '../../utils/CodeBlock/CodeBlock';
import { javaScriptContent } from "../../../data/javaScriptContent"
import './JavaScript.css';

function JavaScript() {
  const typeContent = javaScriptContent.filter(content => content.category === "Type")
  const conditionsContent = javaScriptContent.filter(content => content.category === "Conditions")
  const loopsContent = javaScriptContent.filter(content => content.category === "Boucles")
  const operatorsContent = javaScriptContent.filter(content => content.category === "Opérateurs")
  const variablesContent = javaScriptContent.filter(content => content.category === "Variables")
  const fonctionsContent = javaScriptContent.filter(content => content.category === "Fonctions")
  const eventsContent = javaScriptContent.filter(content => content.category === "Evénements")
  const asyncContent = javaScriptContent.filter(content => content.category === "Asynchrones")
  const classesContent = javaScriptContent.filter(content => content.category === "Classes")
  const importExportContent = javaScriptContent.filter(content => content.category === "Import Export")
  const bestFunctionsContent = javaScriptContent.filter(content => content.category === "Fonctions utiles")
  const colorPrimary = '#EFDB4F'

  return (
    <main className='page-main'>
      <h1>Aide-mémoire <span style={{color: colorPrimary}}>JavaScript</span></h1>

      <h2>Type de données</h2>
      <div className='block-container'>
        {typeContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} color={colorPrimary} />
        )}
      </div>

      <h2>Variables</h2>
      <div className='block-container'>
        {variablesContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} color={colorPrimary} />
        )}
      </div>

      <h2>Opérateurs</h2>
      <div className='block-container'>
        {operatorsContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} color={colorPrimary} />
        )}
      </div>
      
      <h2>Conditions</h2>
      <div className='block-container'>
        {conditionsContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} color={colorPrimary} />
        )}
      </div>

      <h2>Boucles</h2>
      <div className='block-container'>
        {loopsContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} color={colorPrimary} />
        )}
      </div>

      <h2>Fonctions</h2>
      <div className='block-container'>
        {fonctionsContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} color={colorPrimary} />
        )}
      </div>

      <h2>Evénements</h2>
      <div className='block-container'>
        {eventsContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} color={colorPrimary} />
        )}
      </div>

      <h2>Asynchrones</h2>
      <div className='block-container'>
        {asyncContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} color={colorPrimary} />
        )}
      </div>

      <h2>Classes</h2>
      <div className='block-container'>
        {classesContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} color={colorPrimary} />
        )}
      </div>

      <h2>Import / Export</h2>
      <div className='block-container'>
        {importExportContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} color={colorPrimary} />
        )}
      </div>

      <h2>Fonctions utiles</h2>
      <div className='functions-container'>
          <div className='block-container'>
            {bestFunctionsContent.map((content, index) =>
              <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} color={colorPrimary} />
            )}
          </div>
      </div>

      <h2>Autres liens</h2>
      <ul>
        <li><a target="blank" href="https://htmlcheatsheet.com/js/">htmlcheatsheet</a></li>
        <li><a target="blank" href="https://devhints.io/es6">devhints</a></li>
        <li><a target="blank" href="https://www.codecademy.com/learn/learn-html/modules/learn-html-elements/cheatsheet">codecademy</a></li>
      </ul>
    </main>
  );
}

export default JavaScript;
