import {Link} from "react-router-dom";

export default function Header(){
return(
    <header className="header">
        <nav>
            <img className="logo" src="src/logo.webp" alt="logo" />
            <ul>
    <Link to="/"> <h1>Home</h1></Link> 
    <Link to="/produtos"> <h1>Produtos</h1></Link> 
    <Link to="/ofertas"><h1>Ofertas</h1></Link> 
        </ul>
    </nav>
    </header>
)
} 