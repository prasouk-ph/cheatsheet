import CodeBlock from '../../utils/CodeBlock/CodeBlock';
import { gitContent } from '../../../data/gitContent';
import './Git.css';

function Git() {
  const configContent = gitContent.filter(content => content.category === "Configuration")
  const usageContent = gitContent.filter(content => content.category === "Utilisation")
  const colorPrimary = '#EF502E'

  return (
    <main>
      <h1>Aide-mémoire <span style={{color: colorPrimary}}>Git</span></h1>

      <h2>Configuration</h2>
      <div className='block-container'>
        {configContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} color={colorPrimary} />
        )}
      </div>

      <h2>Utilisation</h2>
      <div className='block-container'>
        {usageContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} color={colorPrimary} />
        )}
      </div>

      <h2>Autres liens</h2>
      <ul>
        <li><a target="blank" href="https://www.codecademy.com/learn/learn-git/modules/learn-git-git-workflow-u/cheatsheet">codecademy</a></li>
      </ul>

    </main>
  );
}

export default Git;
