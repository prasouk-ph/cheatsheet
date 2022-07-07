import './Html.css';

function Html() {
  const colorPrimary = '#E0693A'

  return (
    <main>
      <h1>Aide-mémoire <span style={{color: colorPrimary}}>HTML</span></h1>

      <h2>Autres liens</h2>
      <ul>
        <li><a target="blank" href="https://www.codecademy.com/learn/learn-html/modules/learn-html-elements/cheatsheet">codecademy</a></li>
        <li><a target="blank" href="https://htmlcheatsheet.com/">htmlcheatsheet</a></li>
      </ul>

    </main>
  );
}

export default Html;
