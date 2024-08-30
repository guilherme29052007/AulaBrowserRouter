import {Link} from "react-router-dom";

export default function Header(){
return(
    <header className="header">
        <nav>
        <div className="logo-container">
                    <img src="src/logo.webp" className="logo" />
                </div>
            <ul>
    <Link to="/"> <h1>Home</h1></Link> 
    <Link to="/produtos"> <h1>Produtos</h1></Link> 
    <Link to="/ofertas"><h1>Ofertas</h1></Link> 
        </ul>
    </nav>
    </header>
)
} 