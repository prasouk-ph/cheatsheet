import CodeBlock from '../../utils/CodeBlock/CodeBlock';
import { javaScriptContent } from "../../../data/javaScriptContent"
import './JavaScript.css';

function JavaScript() {
  const typeContent = javaScriptContent.filter(content => content.category === "Type")

  return (
    <main className='page-main'>
      <h1>Aide-mémoire JavaScript</h1>

      <h2>Type de données</h2>
      <div className='block-container'>
        {typeContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} />
        )}
      </div>

      <h2>Conditions</h2>
      <div className='block-container'>
        {typeContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} />
        )}
      </div>

      <h2>Boucles</h2>
      <div className='block-container'>
        {typeContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} />
        )}
      </div>

      <h2>Opérations</h2>
      <div className='block-container'>
        {typeContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} />
        )}
      </div>

      <h2>Variables</h2>
      <div className='block-container'>
        {typeContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} />
        )}
      </div>

      <h2>Fonctions</h2>
      <div className='block-container'>
        {typeContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} />
        )}
      </div>

      <h2>Evénements</h2>
      <div className='block-container'>
        {typeContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} />
        )}
      </div>

      <h2>Asynchrones</h2>
      <div className='block-container'>
        {typeContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} />
        )}
      </div>

      <h2>Classes</h2>
      <div className='block-container'>
        {typeContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} />
        )}
      </div>

      <h2>Import / Export</h2>
      <div className='block-container'>
        {typeContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} />
        )}
      </div>

      <h2>Fonctions utiles</h2>
      <div className='functions-container'>
        <h3>React-Router-Dom</h3>
          <div className='block-container'>
            {typeContent.map((content, index) =>
              <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} />
            )}
          </div>

        <h3>React-Redux</h3>
        <div className='block-container'>
          {typeContent.map((content, index) =>
            <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} />
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
