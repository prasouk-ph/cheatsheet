import './Css.css';

function Css() {
  const colorPrimary = '#2765F0'

  return (
    <main>
      <h1>Aide-mémoire <span style={{color: colorPrimary}}>CSS</span></h1>

      <h2>Autres liens</h2>
      <ul>
        <li><a target="blank" href="https://www.codecademy.com/learn/learn-css/modules/syntax-and-selectors/cheatsheet">codecademy</a></li>
        <li><a target="blank" href="https://htmlcheatsheet.com/css/">htmlcheatsheet</a></li>
      </ul>

    </main>
  );
}

export default Css;
