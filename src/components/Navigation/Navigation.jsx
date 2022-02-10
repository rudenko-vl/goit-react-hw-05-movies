import { Nav, Link } from "./Navigation.styled";

function Navigation() {
    return (
        <header>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </Nav>
        </header>
 )   
}

export default Navigation;