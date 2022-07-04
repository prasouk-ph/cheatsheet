import CodeBlock from '../../utils/CodeBlock/CodeBlock';
import { gitContent } from '../../../data/gitContent';
import './Git.css';

function Git() {
  const configContent = gitContent.filter(content => content.category === "Configuration")
  const usageContent = gitContent.filter(content => content.category === "Utilisation")

  return (
    <main className='page-main'>
      <h1>Aide-mémoire Git</h1>

      <h2>Configuration</h2>
      <div className='block-container'>
        {configContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} />
        )}
      </div>

      <h2>Utilisation</h2>
      <div className='block-container'>
        {usageContent.map((content, index) =>
          <CodeBlock key={`content-${index}`} title={content.title} syntaxes={content.content.syntaxes} syntaxesComments={content.content.syntaxesComments} exemples={content.content.exemples} exemplesComments={content.content.exemplesComments} />
        )}
      </div>
    </main>
  );
}

export default Git;
