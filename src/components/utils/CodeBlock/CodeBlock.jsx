import './CodeBlock.css';
import { useState } from 'react';

function CodeBlock({ title, syntax, syntaxComments, exemples, exemplesComments }) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='block'>
      <h3>{title}</h3>

      <h4>Syntaxe</h4>
      <pre className='code'>{syntax}</pre>
      {syntaxComments && <p>{syntaxComments}</p>}
      
      {exemples && <button onClick={() => setIsActive(!isActive)}>{isActive ? "Masquer" : "Afficher"} les exemples</button>}
      {isActive &&
        <div>
          <h4>Exemples</h4>
          <pre className='code'>{exemples}</pre>
          {exemplesComments && <p>{exemplesComments}</p>}
        </div>
      }
    </div>
  );
}

export default CodeBlock;
