import '../styles/header.css'

function Header() {
    return (
        <header>
            <div id="header">
                <h1>Hassan.</h1>
            </div>
            <ul id="menu">
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">My Work</a></li>
                <li><a href="#skills">My Skills</a></li>
            </ul>
        </header>
    );
}


export default Header;