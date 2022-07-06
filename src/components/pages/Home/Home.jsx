import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className='home-main'>
      <p>Sur cette page vous trouverez les cheatsheets que j'ai réalisé moi-même !</p>

      <h1>Sommaire</h1>
      <nav className='menu-navigation'>
        <Link to="react">ReactJS</Link>
        <Link to="javascript">Javascript</Link>
        <Link to="git">Git</Link>
        <Link to="css">CSS</Link>
        <Link to="html">HTML</Link>
        <Link to="regex">Regex</Link>
        <Link to="npm">Npm</Link>
      </nav>
    </main>
  );
}

export default Home;
