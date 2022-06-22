import './CodeBlock.css';
import { useState } from 'react';

function CodeBlock({ title, syntaxes, exemples }) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='block'>
      <h3>{title}</h3>

      <h4>{syntaxes.length > 1 ? "Syntaxes" : "Syntaxe"}</h4>
      {syntaxes.map((syntax, index) =>
        <div className='code-illustration' key={`syntax-${index}`}>
          <pre className='code'>{syntax.code}</pre>
          {syntax.comments && <p className='comments'>{syntax.comments}</p>}
        </div>
      )}
      
      <button onClick={() => setIsActive(!isActive)}>{isActive ? "Masquer" : "Afficher"} {exemples.length > 1 ? "les exemples" : " l'exemple"}</button>
      {isActive &&
        <div>
          <h4>{exemples.length > 1 ? "Exemples" : "Exemple"}</h4>
          {exemples.map((exemple, index) =>
            <div className='code-illustration' key={`exemple-${index}`}>
              <pre className='code'>{exemple.code}</pre>
              {exemple.comments && <p className='comments'>{exemple.comments}</p>}
            </div>
          )}
        </div>
        
      }
    </div>
  );
}

export default CodeBlock;
