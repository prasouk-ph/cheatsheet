import './CodeBlock.css';
import { useState } from 'react';

function CodeBlock({ title, syntax, syntaxComments, exemples, exemplesComments }) {
  const [isActive, setIsActive] = useState(true)

  return (
    <div className='block'>
        <h3>{title}</h3>
      <pre>{syntax}</pre>
      {syntaxComments && <p>{syntaxComments}</p>}
      
      {exemples && <button onClick={() => setIsActive(!isActive)}>{isActive ? "Masquer" : "Afficher"} les exemples</button>}
      {isActive &&
        <div>
          <pre>{exemples}</pre>
          {exemplesComments && <p>{exemplesComments}</p>}
        </div>
        }
    </div>
  );
}

export default CodeBlock;
