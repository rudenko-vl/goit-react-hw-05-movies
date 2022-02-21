import { Header, Nav, Link } from "./Navigation.styled";

function Navigation() {
    return (
        <Header>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </Nav>
        </Header>
 )   
}

export default Navigation;