import './Home.css';
import { Link } from 'react-router-dom';
import logoReact from '../../../assets/logo_react.svg'
import logoJs from '../../../assets/logo_js.png'
import logoGit from '../../../assets/logo_git.png'
import logoCss from '../../../assets/logo_css.png'
import logoHtml from '../../../assets/logo_html.png'
import logoNpm from '../../../assets/logo_npm.svg'

function Home() {
  return (
    <main className='home-main'>
      <p className='page-description'>Cette application a pour but de mettre à disposition des cheatsheets</p>

      <nav className='menu-navigation'>
        <Link className='link' to="react"><img src={logoReact} alt="logo react" className='logo' /></Link>
        <Link className='link' to="javascript"><img src={logoJs} alt="logo javascript" className='logo' /></Link>
        <Link className='link' to="git"><img src={logoGit} alt="logo git" className='logo' /></Link>
        <Link className='link' to="css"><img src={logoCss} alt="logo css" className='logo' /></Link>
        <Link className='link' to="html"><img src={logoHtml} alt="logo html" className='logo' /></Link>
        <Link className='link' to="npm"><img src={logoNpm} alt="logo npm" className='logo' /></Link>
      </nav>
    </main>
  );
}

export default Home;
