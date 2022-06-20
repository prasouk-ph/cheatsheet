import './CodeBlock.css';
import { useState } from 'react';

function CodeBlock({ title, syntaxes, syntaxComments, exemples, exemplesComments }) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='block'>
      <h3>{title}</h3>

      <h4>Syntaxe</h4>
      <h4>{exemples.length > 1 ? "Syntaxes" : "Syntaxe"}</h4>
      {syntaxes.map(syntax => <pre className='code'>{syntax}</pre>)}
      {syntaxComments && <p>{syntaxComments}</p>}
      
      {exemples && <button onClick={() => setIsActive(!isActive)}>{isActive ? "Masquer" : "Afficher"} les exemples</button>}
      {isActive &&
        <div>
          <h4>{exemples.length > 1 ? "Exemples" : "Exemple"}</h4>
          {exemples.map(exemple => <pre className='code'>{exemple}</pre>)}
          {exemplesComments && <p>{exemplesComments}</p>}
        </div>
      }
    </div>
  );
}

export default CodeBlock;
